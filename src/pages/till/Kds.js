import React,{useEffect,useState} from 'react';
import { usePageSetup } from "components/hooks/usePageSetup";
import Card from 'components/Card'
import Modal from 'components/Modal'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Loader from 'components/Loader';
import {ErrorMessage} from 'components/Message';
import { useTitle } from 'components/hooks/useTitle';
import {getProductCategories} from 'store/actions/productCategory';
import {getProductByCategory} from 'store/actions/product';
import { useSelector, useDispatch } from 'react-redux';

const Kds = ()=>{
  const dispatch = useDispatch();
    usePageSetup();
    useTitle("Inventroo | KDS");
    const {loading,error,categories} = useSelector((state) => state.productCategories);
    const {loading:productLoading,error:productError,products} = useSelector((state) => state.products);
    const [cart,setCart]=useState([]);
    
    useEffect(()=>{
      //dispatch(getProductCategories())
    },[])

   useEffect(()=>{
    if(loading===false && categories!==undefined){
      //getProduct(categories[0]?.id);
     }
   },[categories])

    const getProduct = (categoryId)=>{
     // dispatch(getProductByCategory(categoryId));
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
      if(exist){
        const newQuantity = exist.quantity-1;
        const newTotal = exist.price * newQuantity
        setCart(
          cart.map((item)=>item.product_id==product.product_id?{...exist,quantity:newQuantity,total:newTotal}:item
  
          )
        );
      }
     }

    const total = cart.reduce((accumulator,current)=> accumulator+current.total,0);
   
   

return(
    <div className="bg-main" style={{ height:'100vh',width:'100vw' }}>
      <div className="content-wrapper">
        <section className="d-flex justify-content-between flex-wrap pt-1">
        
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
 <main>
        
 <div className="row bg-light-50 m-2">

 <div className="col-md-3 mt-2">
     <Card 
     title="Order# 012/Table 8"
     time="07:40"
     mode="Dine in"
     color="success"
     id="modal88"
     />
     <Modal 
     title="Order# 012/Table 8"
     time="07:40"
     mode="Dine in"
     id="modal88"
     >
         <p>1 Akpu</p>
         <p>2 Chicken</p>
         <div className="mt-5">
         <div className="form-group">

         <div className="col-sm-12">
         <textarea type="text" className="form-control" rows={7}></textarea>
         
         </div>
     </div>
         </div>
     </Modal>


 </div>
 <div className="col-md-3 mt-2">
     <Card 
     title="Order# 012/Table 5"
     time="07:40"
     mode="Dine in"
     color="success"
     />

 </div>
 <div className="col-md-3 mt-2">
     <Card 
     title="Order# 012/Table 5"
     time="07:40"
     mode="Takeout"
     color="warning"
     />

 </div>
 <div className="col-md-3 mt-2">
     <Card 
     title="Order# 012/Table 5"
     time="07:40"
     mode="Dine in"
     color="danger"
     />

 </div>
 <div className="col-md-3 mt-2">
     <Card 
     title="Order# 012/Table 5"
     time="07:40"
     mode="Takeout"
     color="danger"
     id="modal89"
     />
     <Modal 
     title="Order# 012/Table 5"
     time="07:40"
     mode="Dine in"
     id="modal89"
     >
         <p>1 Akpu</p>
         <p>2 Chicken</p>
         <div className="mt-5">
         <div className="form-group">

         <div className="col-sm-12">
         <textarea type="text" className="form-control" rows={7}></textarea>
         
         </div>
     </div>
         </div>
     </Modal>

 </div>
 </div>
</main>
        )}
       

      </div>
      </div>
)
}

export default Kds;