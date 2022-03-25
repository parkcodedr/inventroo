import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getProductGroups,deleteProductGroup,deleteProductGroupComplete} from '../store/actions/productGroup';

const ProductGroupList = () => {
  useTitle("Inventroo | Product Groups")
    const dispatch = useDispatch();
    const {loading,error,productGroups} = useSelector((state) => state.productGroups);
    const deleteState = useSelector((state) => state.deleteProductGroup);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;
    const { token} = useSelector((state) => state.auth);

    useEffect(()=>{
      if(deleteSuccess){
      dispatch(deleteProductGroupComplete());
      }
        dispatch(getProductGroups());
    },[dispatch,deleteSuccess]);

    const deleteHandler =(productGroup)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deleteProductGroup(productGroup.productGroupID,token));
        }
    }

    return (
      <div className="content-body">
          <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
  <h3 className="font-weight-bold">
  All Product Groups
  </h3>

</div>
<Link to={'/dashboard/product-group/new'}>
<button className="btn btn-success">
        <i className="feather icon-plus"></i>
        New
    </button>
</Link>
    </div>
        {loading? (
          <Loader/>
        ):error?(
          <ErrorMessage message={error}/>
        ):(

        <div className="unit-list mt-2">
        <table className="table table-responsive-sm">
  <thead className="btn-main p-1">
    <tr>
      <th>NAME</th>
      <th >TYPE</th>
      <th >RETURNABLE</th>
      <th >STATUS</th>
      <th >PRODUCTS</th>
      <th >ACTION</th>
    </tr>
  </thead>
  <tbody>
      {productGroups && productGroups.map(productGroup=>(
 <tr key={productGroup.productGroupID}>
                <td>{productGroup.name}</td>
                <td>{productGroup.type}</td>
                <td>{(productGroup.returnable)===1? "True":"False"}</td>
                <td>{productGroup.productGroupStatus}</td>
                <td>
                  {productGroup.products.map(item=>(
            <span class="badge color-main mr-1 text-white">{item.name}</span>
                  ))}
               
                  
                  </td>
                <td>
                  <Link to={`/dashboard/productGroup/${productGroup.productGroupID}/edit`}>
                  <button className="btn btn-warning mr-1">
              <i className="feather icon-edit"></i>
              </button>
                  </Link>

              <button className="btn btn-danger" onClick={()=>deleteHandler(productGroup)}>
              <i className="feather icon-trash-2"></i>
              </button>
              </td>
                </tr>
      ))}


  </tbody>
  </table>
        </div>


        )}
        </div>
     );
}

export default ProductGroupList;
