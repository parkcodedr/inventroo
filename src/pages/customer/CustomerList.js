import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ErrorMessage} from 'components/Message';
import Loader from 'components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getCustomers,deleteCustomer,deleteCustomerComplete} from 'store/actions/customers';

const CustomerList = () => {
  useTitle("Inventroo | Customers ")
    const dispatch = useDispatch();
    const {loading,error,customers} = useSelector((state) => state.customers);
    const deleteState = useSelector((state) => state.deleteCustomer);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;
    const { token} = useSelector((state) => state.auth);

    useEffect(()=>{
      if(deleteSuccess){
      dispatch(deleteCustomerComplete());
      }
        dispatch(getCustomers());
    },[dispatch,deleteSuccess]);

    const deleteHandler =(customer)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deleteCustomer(customer.customerID));
        }
    }

    return (
      <div className="content-body">
          <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
  <h3 className="font-weight-bold">
  All Customers
  </h3>

</div>
<Link to={'/dashboard/customer/new'}>
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
      <th scope="col">NAME</th>
      <th scope="col">COMPANY NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">WORK PHONE</th>
      <th scope="col">RECEIVABLES</th>
      <th scope="col">UNUSED CREDIT</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
      {customers && customers.map(customer=>(
 <tr key={customer.customerID}>
                <td>{customer.name}</td>
                <td>{customer.company_name}</td>
                <td>{customer.customer_email}</td>
                <td>{customer.work_phone}</td>
                <td>{'0.00'}</td>
                <td>{'0.00'}</td>
                <td>
                  <Link to={`/dashboard/customer/${customer.customerID}/edit`}>
                  <button className="btn btn-warning mr-1">
              <i className="feather icon-edit"></i>
              </button>
                  </Link>

              <button className="btn btn-danger" onClick={()=>deleteHandler(customer)}>
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

export default CustomerList;
