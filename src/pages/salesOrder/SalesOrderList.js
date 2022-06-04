import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {notify} from 'components/Toast';
import {ErrorMessage} from 'components/Message';
import Loader from 'components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getSalesOrder,deleteSalesOrder,deleteSalesOrderComplete} from 'store/actions/salesOrder';

const SalesOrderList = ()=>{
useTitle("Inventroo |  Sales Order")
    const dispatch = useDispatch();
    const {loading,error,salesOrders} = useSelector((state) => state.salesOrder);
    const deleteState = useSelector((state) => state.deleteSalesOrder);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess,messge} = deleteState;

    useEffect(()=>{
      if(deleteSuccess){
          notify("success","Sales Order Deleted Successfully");
          dispatch(deleteSalesOrderComplete())
      }
      dispatch(getSalesOrder());
  },[dispatch,deleteSuccess])

  
  const deleteHandler =(salesOrder)=>{
    if(window.confirm('Are You Sure to Delete?')){
      dispatch(deleteSalesOrder(Number(salesOrder.salesOrderID)));
    }
}

    return (
        <div className="content-body">
            <div className="row d-flex justify-content-between ml-2 mr-5 ">
            <div className="dropdown">
  <Link className="dropdown-toggle color-main h5 font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  All Sales Order
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
  <Link to={'/dashboard/sales-order/new'}>
  <button className="btn btn-success btm-sm-small">
          <i className="feather icon-plus"></i>
          New 
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
        <th>Date</th>
        <th>Sales Order</th>
        <th>Reference</th>
        <th>Customer Name</th>
        {/* <th>Order Status</th>
        <th>Invoiced</th> */}
        <th>Payment</th>
        {/* <th>Packed</th>
        <th>Shipped</th> */}
          <th>Shipment Date</th>
        <th>Amount</th>
        <th >Action</th>
      </tr>
    </thead>
    <tbody>
        {salesOrders && salesOrders.map(salesOrder=>(
        <tr key={salesOrders.salesOrderID}>
                 <td>{salesOrder.sales_date}</td>
                 <td>{salesOrder.sales_order}</td>
                   <td>{salesOrder.reference}</td>
                  <td>{salesOrder.customer_name}</td>
                  <td>{salesOrder.payment_term}</td>
                  <td>{salesOrder.expected_shipment_date}</td>
                  <td>{salesOrder.total}</td>
                  
             
                  <td>
                    <Link to={`/dashboard/sales-order/${salesOrder.salesOrderID}/edit`}>
                    <button className="btn btn-warning mr-1">
                <i className="feather icon-edit"></i>
                </button>
                    </Link>
  
                <button className="btn btn-danger" onClick={()=>deleteHandler(salesOrder)}>
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
export default SalesOrderList;