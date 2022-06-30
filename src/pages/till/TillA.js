import React,{useEffect,useState} from 'react';
import { usePageSetup } from "components/hooks/usePageSetup";
import {Accordian} from 'components/Accordian'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AccordianItem } from "components/AccordianItem";
import Loader from 'components/Loader';
import CashCalculator from 'components/CashCalculator';
import Modal from 'components/Modal';
//import PaymentModal from '../../components/PaymentModal ';
import {ErrorMessage} from 'components/Message';
import { useTitle } from 'components/hooks/useTitle';
import {getProductCategories} from 'store/actions/productCategory';
import {addCashPayment,addCashPaymentComplete} from 'store/actions/payment';
import {getProductByCategory} from 'store/actions/product';
import { useSelector, useDispatch } from 'react-redux';
import { notify } from 'components/Toast';
import {closeModal} from 'components/closeModal';
import {openModal} from 'components/openModal';

const TillA = ()=>{
  const dispatch = useDispatch();
    usePageSetup();
    useTitle("Inventroo | Till");
    const {loading,error,categories} = useSelector((state) => state.productCategories);
    const {loading:productLoading,error:productError,products} = useSelector((state) => state.products);
    const {loading:addPaymentLoading,error:addPaymentError,success:paymentSuccess} = useSelector((state) => state.addPayment);
    const [cart,setCart]=useState([]);
    const [credit,setCredit]= useState(0);
    const [discount,setDiscount]= useState(0);
    const [tips,setTips]= useState(0);
    const [tax,setTax]= useState(0);

    
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
      const total_cost = cost_price * quantity
   
      const exist = cart.find(item=>item.product_id==productID);
      if(exist){
        const newQuantity = exist.quantity+1;
        const newTotal = exist.rate * newQuantity
        setCart(
          cart.map((item)=>item.product_id==productID?{...exist,quantity:exist.quantity+1,total_cost:newTotal}:item
  
          )
        );
      }else{
        setCart([...cart,
          {rate:cost_price,product_id:productID,quantity,total_cost,product_name:name,currency:"NGN"}])
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
        const newTotal = exist.rate * newQuantity
        setCart(
          cart.map((item)=>item.product_id==product.product_id?{...exist,quantity:newQuantity,total_cost:newTotal}:item
  
          )
        );
      }
     }

     const increaseCartItem =(product)=>{
      const exist = cart.find(item=>item.product_id==product.product_id);
      if(exist){
        const newQuantity = exist.quantity+1;
        const newTotal = exist.rate * newQuantity
        setCart(
          cart.map((item)=>item.product_id==product.product_id?{...exist,quantity:newQuantity,total_cost:newTotal}:item
  
          )
        );
      }
     }
     const sub_total = cart.reduce((accumulator,current)=> accumulator+current.total_cost,0);
    const total = sub_total +discount+tips+tax;
    
    
    console.log(cart);
   
    const makePayment = ()=>{
      const payments = new FormData();
      payments.append("credit",0);
      payments.append("discount",0);
      payments.append("tips",0);
      payments.append("payment_mode","cash");
      payments.append("tax",0);
      payments.append("sub_total",sub_total);
      payments.append("total",total);
      payments.append("currency",'NGN');
      payments.append("items",JSON.stringify(cart));
      dispatch(addCashPayment(payments));

    }

 
if(paymentSuccess){
  closeModal("cashCalculator")
  notify("success","Payment Successful");
  dispatch(addCashPaymentComplete());
  setCart([]);
  openModal("receiptModal");
}
if(addPaymentError){
  closeModal("cashCalculator")
  notify("error",addPaymentError);
  
}

return(
    <div className="content-body">
      <div className="bg-main" style={{ height:'100vh'}}>
        <section className="d-flex justify-content-between pt-1">
            <div className="nav-menu">
                    <ul className="nav">
                    <li className="nav-item">
                            <a className="nav-link active" href="#">
                            <img src="/app-assets/images/logo/troo-logo-color.png"alt="branding logo" className="logo-image"/>
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
  <div key={category.id} className={index===0?'tab-pane fade show active ':`tab-pane fade`} id={`pills-${category.id}`} role="tabpanel" aria-labelledby={`pills-${category.category_name}-tab`}>
           {productLoading? <Loader/>:(
            
          
            //  <Accordian id={`accordion${category.category_name}`}>
                <section className="row">
                  
            {
              products && products.map(product=>(
          <div className="col-md-4" key={product.productID}>
            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
              {product.name}
              <span className="feather icon-plus-circle pointer h4 text-success" onClick={(e)=>addToCart(product)}></span>
              </div>
            </li>
            {/* <AccordianItem 
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
             </AccordianItem> */}
            </div>
              ))
            }
             </section>
            
         
          
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

            <section className="table-wrapper mt-1 bg-white  mx-auto mb-1">
              <div className="table-select d-flex justify-content-between color-light pr-2 pl-2 pt-1">
                <h4 className="font-weight-bold">Select Table</h4>
                <h4 className="font-weight-bold">Table #1</h4>
              </div>
    <table className="table table-responsive-sm">
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
      <tr key={item.product_id}>
      <th scope="row">{item.product_name}</th>
      <td>
      
      
      <span className="feather icon-minus-circle text-info pointer h4  mr-1" onClick={()=>ReduceItemFromCart(item)}></span>
      {item.quantity} 
      <span className="feather icon-plus-circle text-success pointer ml-1  h4 " onClick={()=>increaseCartItem(item)}></span>
      </td>
      <td>{item.rate}</td>
      <td>{item.total_cost}</td>
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
              <button className="btn btn-success col-md-3 mr-1" data-toggle="modal" data-target="#cardPaymentModal">Card Payment</button>
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
          modalBody={false}
          enableTitle={false}
          onClick={()=>makePayment()}
          loading={addPaymentLoading}
          >
           
             
                <div className="calculator-header bg-main p-1 text-white mb-1">
                  <h4 className="text-center font-weight-bold">Cash Amount Calculator</h4>
                </div>
                <CashCalculator />
             
          
          </Modal>

          <Modal id="receiptModal" 
          btnOk="Print Receipt" 
          btnCancel="No Receipt"
          btnOkType="btn btn-success"
          btnCancelType="btn btn-outline-success"
          modalBody={false}
          enableTitle={false}
          title={"Cash Payment"}
          loading={false}
          onCloseModal={()=>closeModal("receiptModal")}
         
          >
            <div className="calculator-header bg-main p-1 text-white mb-1">
                  <h4 className="text-center font-weight-bold">Cash Payment</h4>
                </div>
            <p className="m-5">Total: {total}</p>
            </Modal>


          

      </div>

      <Modal id="cardPaymentModal" 
          btnOk="Print Receipt" 
          btnCancel="No Receipt"
          btnOkType="btn btn-success"
          btnCancelType="btn btn-outline-success"
          modalBody={false}
          enableTitle={false}
          title={"Cash Payment"}
          loading={false}
         
          >
            <div className="calculator-header bg-main p-1 text-white mb-1">
                  <h4 className="text-center font-weight-bold">Card Payment</h4>
                </div>
            <div className="m-3 d-flex justify-content-center flex-column">
              <span className="mx-auto"  style={{ fontSize:"60px" }}>
                <i className="fa fa-check-circle text-success"></i></span>
              <h3 className="text-center">Card Payment Successful</h3>
            </div>
            </Modal>
      </div>
)
}

export default TillA;