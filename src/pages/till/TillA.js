import React,{useEffect,useState} from 'react';
import { usePageSetup } from "components/hooks/usePageSetup";
import {Accordian} from 'components/Accordian'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AccordianItem } from "components/AccordianItem";
import Loader from 'components/Loader';
import CashCalculator from 'components/CashCalculator';
import Modal from 'components/Modal';
import {ErrorMessage} from 'components/Message';
import { useTitle } from 'components/hooks/useTitle';
import {getProductCategories} from 'store/actions/productCategory';
import {getProductByCategory} from 'store/actions/product';
import { useSelector, useDispatch } from 'react-redux';

const TillA = ()=>{
  const dispatch = useDispatch();
    usePageSetup();
    useTitle("Inventroo | Till");
    const {loading,error,categories} = useSelector((state) => state.productCategories);
    const {loading:productLoading,error:productError,products} = useSelector((state) => state.products);
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
    const addToCart = (product)=>{
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
   

return(
    <div className="content-body">
      <div className="bg-main" style={{ height:'100vh'}}>
        <section className="d-flex justify-content-between pt-1">
            <div className="nav-menu">
                    <ul className="nav">
                    <li className="nav-item">
                            <a className="nav-link active" href="#">
                            <img src="/app-assets/images/logo/troo-logo-white.png"
                  alt="branding logo" className="logo-image"/>
                            </a>
                        </li>
                        <li className="nav-item pl-3">
                            <NavLink to={"/till/restaurant"} activeClassName={'till-nav-active'} className="nav-link active text-white" href="#">Till</NavLink>
                        </li>
                        <li className="nav-item pl-3">
                            <NavLink activeClassName={'till-nav-active'}  to={"/till/kds"} className="nav-link text-white" href="#">KDS</NavLink>
                        </li>
                    </ul>

            </div>
      
        <nav>
          <ul className="nav">
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Logout</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={'/settings'}><i className="feather icon-settings"></i> Settings</Link>
              </li>
            </ul>
        </nav>
        </section>
       {loading? (<Loader/>):(
        <div className="row mx-auto bg-main">
        
        <div className="col-md-6 food-menu">
        <p>
        {error && <ErrorMessage message={error}/>}
        </p>
        <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
        {categories && categories.map((category,index)=>(
            <li className="nav-item " role="presentation" key={`${category.id}`}
            onClick={()=>getProduct(category.id)}
            >
            <a className={index===0?`nav-link text-white active`:`nav-link text-white`} id={`pills-${category.id}-tab`} data-toggle="pill" href={`#pills-${category.id}`} role="tab" aria-controls={`pills-${category.id}`} aria-selected={index===0?`true`:``}>{category.category_name}</a>
        </li>
        ))}
  
        </ul>
<div className="tab-content mt-2" id="pills-tabContent">

  {
    categories && categories.map((category,index)=>(
  <div key={category.id} className={index===0?'tab-pane fade show active text-white':`tab-pane fade text-white`} id={`pills-${category.id}`} role="tabpanel" aria-labelledby={`pills-${category.category_name}-tab`}>
           {productLoading? <Loader/>:(
            
          
             <Accordian id={`accordion${category.category_name}`}>
                <section className="row">
            {
              products && products.map(product=>(
          <div className="col-md-4">
            <AccordianItem 
            title={product.name}
            id={(product.name).replace(/\s+/g, '')}
            show="false"
            parent={`accordion${category.category_name}`}
            headerId={`${product.productID}Header`}
             >
              <>
              <img src={"/app-assets/images/jollof_rice.jpg"} alt={"Jollof Rice"} className="card-image" />
                <button  className="btn btn-float btn-round btn-success float-right m-1"  onClick={(e)=>addToCart(product)}>
                  <i class="fa fa-plus"></i></button>
              </>
             </AccordianItem>
            </div>
              ))
            }
             </section>
            </Accordian>
         
          
           )}
           
          
  </div>
    ))
}
 
  
</div>

        </div>

        <div className="col-md-6">
        <div className="d-flex justify-content-between">
        <div class="btn-container">
      <label class="switch btn-color-mode-switch">
            <input type="checkbox" name="color_mode" id="color_mode" value="1"/>
            <label for="color_mode" data-on="Takeout" data-off="Eat-in" class="btn-color-mode-switch-inner"></label>
        </label>
     
  </div>
            <div>
              <h4 className="text-white"><i className="fa fa-user mr-1 "> </i>John Doe</h4>
            </div>

            </div>

            <section className="table-wrapper mt-1 bg-white  mx-auto">
              <div className="table-select d-flex justify-content-between color-light pr-2 pl-2 pt-1">
                <h4 className="font-weight-bold">Select Table</h4>
                <h4 className="font-weight-bold">Table #1</h4>
              </div>
    <table className="table table-responsive-md table-sm">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Each</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
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
        <i className="feather icon-x-circle h4 text-danger"  onClick={()=>removeFromCart(item.product_id)} style={{ cursor:'pointer' }}></i>
      </td>
    </tr>
    ))}
    
   
    
  </tbody>
  
</table>

          <div className="color-light">
          <div className="p-1">
            <div className="d-flex justify-content-between flex-wrap ">
              <button className="btn btn-success col-md-2 mr-1 mb-1">Discount</button>
              <button className="btn btn-success col-md-2 mr-1 mb-1">Cancel</button>
              <button className="btn btn-success col-md-2 mr-1 mb-1">Hold</button>
              <button className="btn btn-success col-md-2 mr-1 mb-1">Comment</button>
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
              <h4 className="font-weight-bold">{total}</h4>
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

export default TillA;