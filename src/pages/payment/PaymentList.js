import React,{useEffect} from 'react';
import { Table,Pagination } from 'rsuite';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ErrorMessage} from 'components/Message';
import Loader from 'components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getPayments,deletePayment,deletePaymentComplete} from 'store/actions/payment';



const PaymentList = () => {
  useTitle("Inventroo | Payments")
    const dispatch = useDispatch();
    const {loading,error,payments} = useSelector((state) => state.payments);
    const deleteState = useSelector((state) => state.deleteManufacturer);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;

    useEffect(()=>{
      if(deleteSuccess){
      dispatch(deletePaymentComplete());
      }
          dispatch(getPayments());
    },[dispatch,deleteSuccess]);

    const deleteHandler =(payment)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deletePayment(payment.id));
        }
    }

    //const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = payments && payments.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

    return (
      <div className="content-body">
          
        {loading? (
          <Loader/>
        ):error?(
          <ErrorMessage message={error}/>
        ):(

        <div className="unit-list">
           <h4 className="font-weight-bold mb-1">
            All Payments
            </h4>
        <div>
      <Table height={420} data={data} loading={loading}>
        <Table.Column width={50} align="center" fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Id</h6></Table.HeaderCell>
          <Table.Cell dataKey="paymentID" />
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Payment Mode</h6></Table.HeaderCell>
          <Table.Cell dataKey="payment_mode" />
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Total</h6></Table.HeaderCell>
          <Table.Cell dataKey="total" />
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Currency</h6></Table.HeaderCell>
          <Table.Cell dataKey="currency" />
        </Table.Column>
        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Date</h6></Table.HeaderCell>
          <Table.Cell dataKey="date_created" />
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Action</h6></Table.HeaderCell>
          <Table.Cell>
          {rowData => {
            return (
              <span>
               <Link to={`/dashboard/payment/${rowData.paymentID}/view`}>
                  
                  View
                  
                      </Link>
          
                  {/* <i className="feather icon-trash-2 ml-1 pointer" onClick={()=>deleteHandler(rowData)}></i>  */}
              </span>
            );
          }}
        </Table.Cell>
      
        </Table.Column>
        
      </Table>
      <div style={{ padding: 10 }}>
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
          total={payments.length}
          limitOptions={[10, 20,50,100]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
    </div>


        )}
        </div>
     );
}

export default PaymentList;
