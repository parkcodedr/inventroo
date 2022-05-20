import { usePageSetup } from "components/hooks/usePageSetup";
import {tillMenu} from 'components/utils'
import {Accordian} from 'components/Accordian'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { AccordianItem } from "components/AccordianItem";

const TillA = ()=>{
    usePageSetup();
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
       
      <div className="d-flex">
        <div className="col-md-7 food-menu">
        <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
        {tillMenu.map((item,index)=>(
            <li className="nav-item " role="presentation" key={`${index}-${item}`}>
            <Link className={index===0?`nav-link text-white active`:`nav-link text-white`} id={`pills-${item}-tab`} data-toggle="pill" href={`#pills-${item}`} role="tab" aria-controls={`pills-${item}`} aria-selected={index===0?`true`:``}>{item}</Link>
        </li>
        ))}
  
        </ul>
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
        <div className="d-flex justify-content-between">
            <div className="switchToggle">
                <input type="checkbox" id="switch"/>
                <label for="switch" className="table-label">Toggle</label>
            </div>
            <div>
              <h4 className="text-white"><i className="fa fa-user mr-1 "> </i>John Doe</h4>
            </div>

            </div>

            <section className="table-wrapper mt-1 bg-white">
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
    <div style={{ "margin-top":'70px' }}></div>
    
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