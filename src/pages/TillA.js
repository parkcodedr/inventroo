import React,{useEffect} from 'react';
import { usePageSetup } from "components/hooks/usePageSetup";
import {tillMenu} from 'components/utils'
import {Accordian} from 'components/Accordian'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AccordianItem } from "components/AccordianItem";
import Loader from '../components/Loader';
import { useTitle } from 'components/hooks/useTitle';
import {getProductCategories} from '../store/actions/productCategory';
import {getProducts,getProductByCategory} from '../store/actions/product';
import { useSelector, useDispatch } from 'react-redux';

const TillA = ()=>{
  const dispatch = useDispatch();
    usePageSetup();
    useTitle("Inventroo | Till");
    const {loading,error,categories} = useSelector((state) => state.productCategories);
    const {loading:productLoading,error:productError,products} = useSelector((state) => state.products);
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
    
    if(loading===true) return <p className="mt-5"><Loader/></p>
return(
    <div className="" >
      <div className="content-wrapper bg-main" style={{ height:'100vh' }}>
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
                            <NavLink to={"/dashboard/till/preview"} activeClassName={'till-nav-active'} className="nav-link active text-white" href="#">Till</NavLink>
                        </li>
                        <li className="nav-item pl-3">
                            <NavLink activeClassName={'till-nav-active'}  to={"/kid"} className="nav-link text-white" href="#">KDS</NavLink>
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
       
      <div className="row mx-auto">
        <div className="col-md-7 food-menu">
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
                <button  className="btn btn-float btn-round btn-success float-right m-1"><i class="fa fa-plus"></i></button>
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
        <div className="col-md-5 pr-2 pl-2">
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

            <section className="table-wrapper mt-1 bg-white mb-3">
              <div className="table-select d-flex justify-content-between color-light pr-2 pl-2 pt-1">
                <h4 className="font-weight-bold">Select Table</h4>
                <h4 className="font-weight-bold">Table #1</h4>
              </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Eact</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row">Jollof Rice</th>
      <td>1</td>
      <td>500</td>
      <td>500</td>
    </tr>
    <tr >
      <th scope="row">Coca cola</th>
      <td>2</td>
      <td>500</td>
      <td>1000</td>
    </tr>
   
    
  </tbody>
  
</table>

          <div className="color-light">
          <div className="p-1">
            <div className="d-flex justify-content-between">
              <button className="btn btn-success col-md-2 mr-1">Discount</button>
              <button className="btn btn-success col-md-2 mr-1">Cancel</button>
              <button className="btn btn-success col-md-2 mr-1">Hold</button>
              <button className="btn btn-success col-md-2 mr-1">Comment</button>
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
              <p>Subtotal</p><p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1 ">
              <p>Tax</p><p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1">
              <p>Balance Due</p><p>0.00</p>
            </div>
            <div className="d-flex justify-content-between pr-1 pl-1">
              <h4 className="font-weight-bold">Total</h4>
              <h4 className="font-weight-bold">0.00</h4>
            </div>
            </div>
            
            
          </div>
          
          <div className="p-1">
            <div className="d-flex justify-content-between">
             
              <button className="btn btn-success col-md-3 mr-1">Split Bill</button>
              <button className="btn btn-success col-md-3 mr-1">Cash Payment</button>
              <button className="btn btn-success col-md-3 mr-1">Card Payment</button>
            </div>
          </div>

          </div>
            </section>
        </div>
      </div>

      </div>
      </div>
)
}

export default TillA;