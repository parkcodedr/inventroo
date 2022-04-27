import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getProductCategories,deleteProductCategory,deleteProductCategoryComplete} from '../store/actions/productCategory';

const ProductCategoryList = () => {
  useTitle("Inventroo | Product Category");
    const dispatch = useDispatch();
    const {loading,error,categories} = useSelector((state) => state.productCategories);
    const deleteState = useSelector((state) => state.deleteProductCategory);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;
    const { token} = useSelector((state) => state.auth);

    useEffect(()=>{
      if(deleteSuccess){
      dispatch(deleteProductCategoryComplete());
      }
        dispatch(getProductCategories());
    },[dispatch,deleteSuccess]);

    const deleteHandler =(category)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deleteProductCategory(category.id));
        }
    }

    return (
      <div className="content-body">
          <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
  <h3 className="font-weight-bold">
  All Product Category
  </h3>

</div>
<Link to={'/dashboard/product-category/new'}>
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
      <th>CATEGORY NAME</th>
      <th >DESCRIPTION</th>
      <th >DATE CREATED</th>
      <th >ACTION</th>
    </tr>
  </thead>
  <tbody>
      {categories && categories.map(category=>(
 <tr key={category.id}>
                <td>{category.category_name}</td>
                <td>{category.description}</td>
                <td>{(category.created_at).substring(0,10)}</td>
                <td>
                  <Link to={`/dashboard/product-category/${category.id}/edit`}>
                  <button className="btn btn-warning mr-1">
              <i className="feather icon-edit"></i>
              </button>
                  </Link>

              <button className="btn btn-danger" onClick={()=>deleteHandler(category)}>
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

export default ProductCategoryList;
