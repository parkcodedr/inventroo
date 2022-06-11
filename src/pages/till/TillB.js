import React,{useState,useEffect} from 'react';
import { usePageSetup } from "components/hooks/usePageSetup";
import {Accordian} from 'components/Accordian'
import { NavLink,Link } from "react-router-dom";
import { AccordianItem } from "components/AccordianItem";
import ListGroup from 'components/ListGroup';
import ListGroupItem from 'components/ListGroupItem';
import Loader from 'components/Loader';
import {ErrorMessage} from 'components/Message';
import CashCalculator from 'components/CashCalculator';
import Modal from 'components/Modal';
import { useTitle } from 'components/hooks/useTitle';
import {getProductCategories} from 'store/actions/productCategory';
import {getProductByCategory,getScanProduct,searchProduct,getScanProductComplete} from 'store/actions/product';
import { useSelector, useDispatch } from 'react-redux';

const TillB = ()=>{
  const dispatch = useDispatch();
  usePageSetup();
  useTitle("Inventroo | Till");

    const [show,setShow] = useState(false);
    const [searchItem,setSearchItem] = useState("");
     const {loading,error,categories} = useSelector((state) => state.productCategories);
    const {loading:productLoading,success,error:productError,products,scanProduct} = useSelector((state) => state.products);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
      dispatch(getProductCategories())
    },[])

   useEffect(()=>{
    if(loading===false && categories!==undefined){
      getProduct(categories[0]?.id);
     }
   },[categories])

    const getProduct = (categoryId)=>{
      dispatch(getProductByCategory(categoryId));
    }

    const scanProductCode = (productCode)=>{
      dispatch(getScanProduct(productCode))
    }

    const searchProductItem = ()=>{
      dispatch(searchProduct(searchItem))
    }

    const addToCart = (product)=>{
      //event.preventDefault();
      if(product!=undefined){
        const {cost_price,productID,name} = product;
      const quantity = 1;
      const total = cost_price * quantity
   
      const exist = cart.find(item=>item.product_id==productID);
      if(exist){
        const newQuantity = exist.quantity+1;
        const newTotal = exist.price * newQuantity
        setCart(
          cart.map((item)=>item.product_id==productID?{...exist,quantity:exist.quantity+1,total:newTotal}:item
  
          )
        );
      }else{
        setCart([...cart,
          {price:cost_price,product_id:productID,quantity,total,name}])
      }
      }
      
    }
     const removeFromCart =(id)=>{
      const newCart = cart.filter(item=>item.product_id!==id);
      setCart(newCart);
     }

     const ReduceItemFromCart =(product)=>{
      const exist = cart.find(item=>item.product_id==product.product_id);
      if(exist && exist.quantity!==1){
        const newQuantity = exist.quantity-1;
        const newTotal = exist.price * newQuantity
        setCart(
          cart.map((item)=>item.product_id==product.product_id?{...exist,quantity:newQuantity,total:newTotal}:item
  
          )
        );
      }

     }

     const increaseCartItem =(product)=>{
      const exist = cart.find(item=>item.product_id==product.product_id);
      if(exist){
        const newQuantity = exist.quantity+1;
        const newTotal = exist.price * newQuantity
        setCart(
          cart.map((item)=>item.product_id==product.product_id?{...exist,quantity:newQuantity,total:newTotal}:item
  
          )
        );
      }
     }

    const total = cart.reduce((accumulator,current)=> accumulator+current.total,0);
    console.log(cart);
    console.log(scanProduct);
    if(success===true && scanProduct!==undefined){
      addToCart(scanProduct);
      dispatch(getScanProductComplete());
    }

return(
    <div className="content-body">
      <div className="bg-main" style={{ height:'100vh'}}>
        <section className="d-flex justify-content-between pt-1">
        <div className="logo">
        <Link className="nav-link active" to={'/dashboard'}>
                            <img src="/app-assets/images/logo/troo-logo-white.png"
                  alt="branding logo" className="logo-image"/>
        </Link>
        </div>
            <div className="nav-menu">
                    <ul className="nav">
                    <li className="nav-item pl-3">
                            <NavLink activeClassName={'till-nav-active'}  to={"/till/register"} className="nav-link text-white" >Register</NavLink>
                        </li>
                        <li className="nav-item pl-3">
                            <NavLink to={"/till"} activeClassName={'till-nav-active'} className="nav-link active text-white">
                                <i className="feather icon-refresh-cw"></i></NavLink>
                        </li>
                        <li className="nav-item pl-3">
                            <NavLink activeClassName={'till-nav-active'}  to={"/till/kid"} className="nav-link text-white" >
                            <i className="feather icon-settings"></i>
                            </NavLink>
                        </li>
                    </ul>

            </div>
      
        <nav>
          <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-white h5" to={'/settings'}>
                <i className="fa fa-user-circle mr-1 "> </i>John Doe</Link>
              </li>
            </ul>
        </nav>
        </section>
       
      
        {loading? (
          <p className="mt-3"><Loader/></p>
        ):(
<>
<div className="row mx-auto bg-main">
<div className="col-md-6 food-menu">
        <p>
        {error && <ErrorMessage message={error}/>}
        </p>
        <div className="row justify-content-between">
       {show==false?(
         <>
          <div className="col-md-9">
        <div className="input-group">
  <input type="text" className="form-control" autoFocus placeholder="Write to search" onChange={(e)=>setSearchItem(e.target.value)} />
  <div className="input-group-append">
    <button className="btn btn-success" type="button" onClick={searchProductItem}>Enter</button>
  </div>
</div>
        </div>
         </>
       ):(
         <>
         <div className="col-md-9">
         <input type="text" className="form-control" placeholder="Scan product barcode" autoFocus onChange={(e)=>scanProductCode(e.target.value)} />
         </div>
         </>
       )}

<div className="btn-container">
    
    <label className="switch btn-color-mode-switch">
          <input type="checkbox" name="color_mode" id="color_mode" onChange={(e)=>setShow(!show)} />
          <label htmlFor="color_mode" data-on="Scan" data-off="Search" className="btn-color-mode-switch-inner"></label>
      </label>
   
</div>
            </div>

            <Accordian id={"accordionTillNew"}>
            <section className="row mt-2 bg-main">
            {categories && categories.map((category,index)=>(

              <div className="col-md-4">
              <AccordianItem 
              title={category.category_name}
              id={(category.category_name).replace(/\s+/g, '')}
              show="false"
              parent={'accordionTillNew'}
              headerId={`${category.id}Header`}
              bg="bg-main"
           
              >
                <>

               

                      <div className="bg-main">
                      <ListGroup>
                        {
                      category.products && category.products.map(product=>(
                        
                      <ListGroupItem title={product.name} 
                      onclick={(event)=>addToCart(product)}/>

                      ))
                      }
                        </ListGroup>
                      </div>
             

                
                </>
              </AccordianItem>
              </div>
        ))}
        </section>
            </Accordian>

            

          
 

        </div>

        <div className="col-md-6 mt-1">
            <section className="table-wrapper mx-auto bg-white">
              <div className="table-select d-flex justify-content-between color-light pr-2 pl-2 pt-1">
                <h5 className="font-weight-bold">Around-the-corner-Gloceries</h5>
                <h5 className="font-weight-bold"><i className="feather icon-printer"></i> Print</h5>
              </div>
    <table className="table table-responsive-lg">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Each</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {cart && cart.map(item=>(
      <tr>
      <th scope="row">{item.name}</th>
      <td>
      
      
      <span className="feather icon-minus-circle text-info pointer h4  mr-1" onClick={()=>ReduceItemFromCart(item)}></span>
      {item.quantity} 
      <span className="feather icon-plus-circle text-success pointer ml-1  h4 " onClick={()=>increaseCartItem(item)}></span>
      </td>
      <td>{item.price}</td>
      <td>{item.total}</td>
      <td>
        
        {/* <i className="feather icon-plus h4 font-weight-bold"  onClick={()=>ReduceItemFromCart(item)} style={{ cursor:'pointer' }}></i>
        <i className="feather icon-minus h4 font-weight-bold"  onClick={()=>ReduceItemFromCart(item)} style={{ cursor:'pointer' }}></i> */}
        <i className="feather icon-x-circle h4  text-danger"  onClick={()=>removeFromCart(item.product_id)} style={{ cursor:'pointer' }}></i>
      </td>
    </tr>
    ))}
    
    
  
    
  </tbody>
  
</table>

          <div className="color-light">
          <div className="">
            <div className="row mx-auto p-1 justify-content-space-between">
              <button className="btn btn-success col m-1">Discount</button>
              <button className="btn btn-success col m-1">Cancel</button>
              <button className="btn btn-success col m-1">Hold</button>
              <button className="btn btn-success col m-1">Comment</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
            <div className="d-flex justify-content-between pr-1 pl-1 pt-1">
              <p>Credit</p><p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1 ">
              <p>Discount</p><p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1">
              <p>Tips</p><p>0.00</p>
            </div>
            </div>
            
            <div className="col-md-6">
            <div className="d-flex justify-content-between pr-1 pl-1 pt-1">
              <p>Subtotal</p><p>{total && total}</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1 ">
              <p>Tax</p><p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1">
              <p>Balance Due</p><p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1">
              <h4 className="font-weight-bold">Total</h4>
              <h4 className="font-weight-bold">{total && total}</h4>
            </div>
            </div>
            
            
          </div>
          
          <div className="p-1">
            <div className="d-flex justify-content-between">
             
              <button className="btn btn-success col-md-3 mr-1">Split Bill</button>
              <button className="btn btn-success col-md-3 mr-1" data-toggle="modal" data-target="#cashCalculator">Cash Payment</button>
              <button className="btn btn-success col-md-3 mr-1">Card Payment</button>
            </div>
          </div>

          </div>
            </section>
        </div>
        </div>
</>
        )}

<Modal id="cashCalculator" 
          btnOk="Pay" 
          btnCancel="Cancel"
          btnOkType="btn btn-success"
          btnCancelType="btn btn-outline-success"
          >
            <div className="row mx-auto">
              <div className="col-md-8 justify-content-center">
                <div className="calculator-header">
                  <h4 className="text-center font-weight-bold">Cash Amount Calculator</h4>
                </div>
              <CashCalculator />
              </div>
             
            </div>
          </Modal>

      </div>
      </div>
)
}

export default TillB;