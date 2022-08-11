import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {notify} from 'components/Toast';
import {ErrorMessage} from 'components/Message';
import Loader from 'components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import { Table,Pagination } from 'rsuite';
import {getProducts,deleteProduct,deleteProductComplete} from 'store/actions/product';

const ProductList = ()=>{
    useTitle("Inventroo | Products");
    const dispatch = useDispatch();
    const {loading,error,products} = useSelector((state) => state.products);
    const deleteState = useSelector((state) => state.deleteProduct);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;

    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
  
    const handleChangeLimit = dataKey => {
      setPage(1);
      setLimit(dataKey);
    };
  
    const data = products && products.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    });
  
  


    useEffect(()=>{
        if(deleteSuccess){
            notify("success","Product Deleted Successfully");
            dispatch(deleteProductComplete())
        }
        dispatch(getProducts());
    },[dispatch,deleteSuccess])

    const deleteHandler =(product)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deleteProduct(Number(product.productID)));
          console.log(Number(product.productID))
        }
    }

    return(

<div className="content-body">
<div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="dropdown">
  <Link className="dropdown-toggle color-main h5 font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  All Products
  </Link>

  <ul className="dropdown-menu mt-3 mb-5">
  <p className="ml-1 mr-1">DEFAULT FILTERS</p>

    <li className="dropdown-item">
        <Link >All Products</Link>
    </li>
    <li className="dropdown-item">
        <Link>Active Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Ungroup Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Inactive Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Low Stock Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Sales</Link>
    </li>
    <li className="dropdown-item">
        <Link >Purchases</Link>
    </li>


    <li className="dropdown-item">
        <Link> <i className="feather icon-plus">
            </i>New Custom View</Link>
    </li>

  </ul>
</div>
<Link to={'/dashboard/product/new'}>
<button className="btn btn-success">
        <i className="feather icon-plus"></i>
        New
        </button>
</Link>

    </div>
    {loading?(
        <Loader/>
    ):error?(
        <ErrorMessage message={error}/>
    ):(

    <div className="mt-2 mx-auto mb-1">


<Table height={420} data={data} loading={loading}>
        <Table.Column flexGrow={1} align="center" fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Name</h6></Table.HeaderCell>
          <Table.Cell dataKey="name" />
        </Table.Column>

        <Table.Column width={70} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Upc</h6></Table.HeaderCell>
          <Table.Cell dataKey="upc" />
        </Table.Column>

        <Table.Column flexGrow={1}>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}>
            <h6>Opening Stock</h6></Table.HeaderCell>
          <Table.Cell dataKey="opening_stock" />
        </Table.Column>

        <Table.Column flexGrow={1} >
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>
            ReOrder Point</h6></Table.HeaderCell>
          <Table.Cell dataKey='recorder_point'/>
 
        </Table.Column>
        <Table.Column width={70} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>
            Status</h6></Table.HeaderCell>
          <Table.Cell dataKey='productStatus'/>
 
        </Table.Column>
        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>
            Manufacturer</h6></Table.HeaderCell>
          <Table.Cell dataKey='manufacturer.name'/>
 
        </Table.Column>

        <Table.Column flexGrow={1} fixed>
          <Table.HeaderCell style={{ padding: 4, backgroundColor: '#4c27b3', color: '#fff' }}><h6>Action</h6></Table.HeaderCell>
          <Table.Cell>
          {rowData => {
            return (
              <span>
               <Link to={`/dashboard/product/${rowData.productID}/edit`}>
                  
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
          total={products.length}
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


    )
}
export default ProductList;
