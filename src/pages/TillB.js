import React,{useState} from 'react';
import { usePageSetup } from "components/hooks/usePageSetup";
import {tillMenu} from 'components/utils'
import {Accordian} from 'components/Accordian'
import { NavLink,Link } from "react-router-dom";
import { AccordianItem } from "components/AccordianItem";

const TillB = ()=>{
    usePageSetup();
    const [show,setShow] = useState(false);
    console.log(show);

return(
    <div className="content-body">
      <div className="bg-main">
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
       
      <div className="row m-1">
        <div className="col-md-7 food-menu">
        <div className="d-flex justify-content-between">
       {show==false?(
         <>
          <div className="col-md-9">
        <div class="input-group">
  <input type="text" class="form-control" placeholder="Write to search" />
  <div class="input-group-append">
    <button class="btn btn-success" type="button" >Enter</button>
  </div>
</div>
        </div>
         </>
       ):(
         <>
         <div className="col-md-9">
         <input type="text" class="form-control" placeholder="Scan product barcode" />
         </div>
         </>
       )}

            <div className="switchToggle">
                <input type="checkbox" id="switch"
                onChange={(e)=>setShow(!show)}
                 />
                <label htmlFor="switch" className="label-switch">Search</label>
            </div>
            

            </div>
<div className="tab-content mt-2" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-Rice" role="tabpanel" aria-labelledby="pills-Rice-tab">
          <Accordian id={"accordionTill"}>
          <section className="row ">
            <div className="col-md-4">
            <AccordianItem 
            title="Jollof Rice"
            id="jollofRice"
            show="false"
            parent="accordionTill"
            headerId="jollofRiceHeader"
             >
              <>
              <img src={"/app-assets/images/jollof_rice.jpg"} alt={"Jollof Rice"} className="card-image" />
                <button  className="btn btn-float btn-round btn-success float-right m-1"><i class="fa fa-plus"></i></button>
              </>
             </AccordianItem>
            </div>
            <div className="col-md-4 ">
            <AccordianItem 
            title="Rice & Stew"
            id="riceStew"
            imgSource="/app-assets/images/rice_stew.png"
            show="false"
            parent="accordionTill"
            headerId="riceStewHeader"
             >
                <img src={"/app-assets/images/rice_stew.png"} alt={"Rice and Stew"} className="card-image" />
                <button  className="btn btn-float btn-round btn-success float-right m-1"><i class="fa fa-plus"></i></button>
             </AccordianItem>
            </div>
            <div className="col-md-4 ">
            <AccordianItem 
            title="Coconut Rice"
            id="coconutRice"
            show={false}
            parent="accordionTill"
            headerId="coconutRiceHeader"
             >
               <img src={"/app-assets/images/coconut_rice.jpg"} alt={"coconut Rice"} className="card-image" />
                <button  className="btn btn-float btn-round btn-success float-right m-1"><i class="fa fa-plus"></i></button>
             </AccordianItem>
            </div>

            <div className="col-md-4">
            <AccordianItem 
            title="Fried Rice"
            id="friedRice"
            show="false"
            parent="accordionTill"
            headerId="friedRiceHeader"
             >
              <>
              <img src={"/app-assets/images/jollof_rice.jpg"} alt={"Fried Rice"} className="card-image" />
                <button  className="btn btn-float btn-round btn-success float-right m-1"><i class="fa fa-plus"></i></button>
              </>
             </AccordianItem>
            </div>
            <div className="col-md-4 ">
            <AccordianItem 
            title="Special Fried Rice"
            id="specialFriedRice"
            imgSource="/app-assets/images/rice_stew.png"
            show="false"
            parent="accordionTill"
            headerId="specialFriedRiceHeader"
             >
                <img src={"/app-assets/images/rice_stew.png"} alt={"special Fried Rice"} className="card-image" />
                <button  className="btn btn-float btn-round btn-success float-right m-1"><i class="fa fa-plus"></i></button>
             </AccordianItem>
            </div>
            <div className="col-md-4 ">
            <AccordianItem 
            title="Ofada Rice"
            id="ofadaRice"
            show={false}
            parent="accordionTill"
            headerId="ofadaRiceHeader"
             >
               <img src={"/app-assets/images/coconut_rice.jpg"} alt={"Ofada Rice"} className="card-image" />
                <button  className="btn btn-float btn-round btn-success float-right m-1"><i class="fa fa-plus"></i></button>
             </AccordianItem>
            </div>
          </section>
          </Accordian>
  </div>
  <div className="tab-pane fade" id="pills-Pasta" role="tabpanel" aria-labelledby="pills-Pasta-tab">Pasta</div>
  <div className="tab-pane fade" id="pills-Swallow" role="tabpanel" aria-labelledby="pills-Swallow-tab">Swallow</div>
</div>

        </div>
        <div className="col-md-5 pr-2 pl-2">
            <section className="table-wrapper bg-white">
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
    <div style={{'margin-top':'90px'}}></div>
    
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

export default TillB;