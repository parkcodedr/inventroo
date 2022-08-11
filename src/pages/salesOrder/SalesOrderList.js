import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {notify} from 'components/Toast';
import {ErrorMessage} from 'components/Message';
import { Table,Pagination } from 'rsuite';
import Loader from 'components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getSalesOrder,deleteSalesOrder,deleteSalesOrderComplete} from 'store/actions/salesOrder';

const SalesOrderList = ()=>{
useTitle("Inventroo |  Sales Order")
    const dispatch = useDispatch();
    const {loading,error,salesOrders} = useSelector((state) => state.salesOrder);
    const deleteState = useSelector((state) => state.deleteSalesOrder);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess,messge} = deleteState;



    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
  
    const handleChangeLimit = dataKey => {
      setPage(1);
      setLimit(dataKey);
    };
  
    const data = salesOrders && salesOrders.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    });

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

<Table 
virtualized
height={420} 
data={data} 
loading={loading}>
        <Table.Column flexGrow={1} align="center" fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Date</h6></Table.HeaderCell>
          <Table.Cell dataKey="sales_date" />
        </Table.Column>


        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Sales Order</h6></Table.HeaderCell>
          <Table.Cell dataKey="sales_order" />
        </Table.Column>

        <Table.Column flexGrow={1}>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Reference</h6></Table.HeaderCell>
          <Table.Cell dataKey="reference" />
        </Table.Column>

        <Table.Column flexGrow={1} >
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>
          Payment term</h6></Table.HeaderCell>
          <Table.Cell dataKey='payment_term'/>
 
        </Table.Column>
        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>
            Shipment Date</h6></Table.HeaderCell>
          <Table.Cell dataKey='expected_shipment_date'/>
 
        </Table.Column>
        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>
            Total</h6></Table.HeaderCell>
          <Table.Cell dataKey='total'/>
 
        </Table.Column>

        <Table.Column width={70} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Action</h6></Table.HeaderCell>
          <Table.Cell>
          {rowData => {
            return (
              <span>
               <Link to={`/dashboard/sales-order/${rowData.productID}/edit`}>
                  
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
          total={salesOrders.length}
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
export default SalesOrderList;