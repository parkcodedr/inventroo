import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ErrorMessage} from 'components/Message';
import Loader from 'components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import { Table,Pagination } from 'rsuite';
import {getCustomers,deleteCustomer,deleteCustomerComplete} from 'store/actions/customers';

const CustomerList = () => {
  useTitle("Inventroo | Customers ")
    const dispatch = useDispatch();
    const {loading,error,customers} = useSelector((state) => state.customers);
    const deleteState = useSelector((state) => state.deleteCustomer);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;
    const { token} = useSelector((state) => state.auth);

    const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = customers && customers.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });


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
  
        {loading? (
          <Loader/>
        ):error?(
          <ErrorMessage message={error}/>
        ):(

        <div className="customer-list">
          <div className="row d-flex justify-content-between ml-2 mr-5 mb-1">

            <h5 className="font-weight-bold">
            All Customers
            </h5>

          <Link to={'/dashboard/customer/new'}>
            <button className="btn btn-success">
                <i className="feather icon-plus"></i>
                New
            </button>
          </Link>
    </div>
          <Table height={420} data={data} loading={loading}>
        <Table.Column flexGrow={1} align="center" fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Name</h6></Table.HeaderCell>
          <Table.Cell dataKey="name" />
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Company</h6></Table.HeaderCell>
          <Table.Cell dataKey="company_name" />
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Email</h6></Table.HeaderCell>
          <Table.Cell dataKey="customer_email" />
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Work Phone</h6></Table.HeaderCell>
          <Table.Cell dataKey="work_phone" />
        </Table.Column>
        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Date</h6></Table.HeaderCell>
          <Table.Cell>
          {'0.00'}
            </Table.Cell>
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Action</h6></Table.HeaderCell>
          <Table.Cell>
          {rowData => {
            return (
              <span>
               <Link to={`/dashboard/customer/${rowData.customerID}/edit`}>
                  
                  <i className="feather icon-edit"></i>
                  
                      </Link>
          
                  <i className="feather icon-trash-2 ml-1 pointer" onClick={()=>deleteHandler(rowData)}></i> 
              </span>
            );
          }}
        </Table.Cell>
      
        </Table.Column>
        
      </Table>
      <div style={{ padding: 5 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="sm"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={customers.length}
          limitOptions={[10, 20,50,100]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>



          

        </div>


        )}
        </div>
     );
}

export default CustomerList;
