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
        <>
        <div class="content-body">

</div>
        </>
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

          
<section id="configuration">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    
                    <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                   
                </div>
                <div class="card-content collapse show">
                    <div class="card-body card-dashboard">
                        <p class="card-text"></p>
                        <table class="table table-striped table-bordered zero-configuration">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>work Phone</th>
                                    <th>Receivables</th>
                                    <th>Action</th>
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
              
                <td>
                  <Link to={`/dashboard/customer/${customer.customerID}/edit`}>
                  
              <i className="feather icon-edit"></i>
              
                  </Link>
      
              <i className="feather icon-trash-2 ml-1 pointer" onClick={()=>deleteHandler(customer)}></i>
              
              </td>
                </tr>
      ))}
      
                            </tbody>
                          
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>


        )}
        </div>
     );
}

export default CustomerList;
