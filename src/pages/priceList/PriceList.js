import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {notify} from 'components/Toast';
import {ErrorMessage} from 'components/Message';
import Loader from 'components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getPriceLists,deletePriceList,deletePriceListComplete} from 'store/actions/priceList';

const PriceList = ()=>{
useTitle("Inventroo | Price List")
    const dispatch = useDispatch();
    const {loading,error,priceLists} = useSelector((state) => state.priceLists);
    const deleteState = useSelector((state) => state.deletePriceList);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;

    useEffect(()=>{
      if(deleteSuccess){
          notify("success","PriceList Deleted Successfully");
          dispatch(deletePriceListComplete())
      }
        dispatch(getPriceLists());
      
  },[dispatch,deleteSuccess])

  
  const deleteHandler =(priceList)=>{
    if(window.confirm('Are You Sure to Delete?')){
      dispatch(deletePriceList(Number(priceList.priceListID)));
    }
}

    return (
        <div className="content-body">
            <div className="row d-flex justify-content-between ml-2 mr-5 ">
            <div className="dropdown">
  <Link className="dropdown-toggle color-main h5 font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  All Price List
  </Link>

  <ul className="dropdown-menu mt-2">
  <p className="ml-1 mr-">DEFAULT FILTER</p>

    <li className="dropdown-item">
        <Link >All</Link>
    </li>
    <li className="dropdown-item">
        <Link>Sales</Link>
    </li>
    <li className="dropdown-item">
        <Link >Purchase</Link>
    </li>

  </ul>
</div>
  <Link to={'/dashboard/price-list/new'}>
  <button className="btn btn-success btm-sm-small">
          <i className="feather icon-plus"></i>
          New Price List
      </button>
  </Link>
      </div>
          {
          loading? (
            <Loader/>
          ):error?(
            <ErrorMessage message={error}/>
          ):(
      
          <div className="unit-list mt-2 mb-5 mt-2">
          <table className="table table-responsive-sm">
    <thead className="btn-main p-1">
      <tr>
        <th>Name and Description</th>
        <th>Type</th>
        <th>Mark Type</th>
        <th>Percentage</th>
        <th>Rounding</th>
        <th >Action</th>
      </tr>
    </thead>
    <tbody>
        {priceLists && priceLists.map(priceList=>(
   <tr key={priceList.priceListID}>
                  <td>{priceList.name}</td>
                  <td>{priceList.type}</td>
                  <td>{priceList.mark_type}</td>
                  <td>{priceList.percentage}</td>
                  <td>{priceList.roundoff}</td>

                  <td>
                    <Link to={`/dashboard/price-list/${priceList.priceListID}/edit`}>
                    <button className="btn btn-warning mr-1">
                <i className="feather icon-edit"></i>
                </button>
                    </Link>
  
                <button className="btn btn-danger" onClick={()=>deleteHandler(priceList)}>
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
export default PriceList;