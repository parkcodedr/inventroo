import React,{useState} from 'react';
import { usePageSetup } from "components/hooks/usePageSetup";
import {tillMenu} from 'components/utils'
import {Accordian} from 'components/Accordian'
import { NavLink,Link } from "react-router-dom";
import { AccordianItem } from "components/AccordianItem";
import ListGroup from 'components/ListGroup';
import ListGroupItem from 'components/ListGroupItem';

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
        <div className="input-group">
  <input type="text" className="form-control" placeholder="Write to search" />
  <div className="input-group-append">
    <button className="btn btn-success" type="button" >Enter</button>
  </div>
</div>
        </div>
         </>
       ):(
         <>
         <div className="col-md-9">
         <input type="text" className="form-control" placeholder="Scan product barcode" />
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
            title="Fruits"
            id="fruits"
            show="false"
            parent="accordionTill"
            headerId="fruitHeader"
            bg="bg-main"
             >
              <div className="bg-main">
              <ListGroup>
              <ListGroupItem title="Apple" link="/apple" />
                <ListGroupItem title="Orange" link="/orange" />
                <ListGroupItem title="Mango" link="/mango" />
              </ListGroup>
              </div>
          
             </AccordianItem>

             <AccordianItem 
            title="Soda"
            id="soda"
            show="false"
            parent="accordionTill"
            headerId="sodaHeader"
            bg="bg-main"
             >
              <div className="bg-main">
              <ListGroup>
              <ListGroupItem title="Coca Cola" link="/apple" />
                <ListGroupItem title="Pepsi" link="/orange" />
                <ListGroupItem title="Fanta" link="/mango" />
              </ListGroup>
              </div>
          
             </AccordianItem>
            </div>
            <div className="col-md-4 ">
           
             <AccordianItem 
            title="Condiments"
            id="condiments"
            show="false"
            parent="accordionTill"
            headerId="condimentHeader"
            bg="bg-main"
             >
              <div className="bg-main">
              <ListGroup>
              <ListGroupItem title="Maggi" link="/apple" />
                <ListGroupItem title="Curry" link="/orange" />
                <ListGroupItem title="Onga" link="/mango" />
              </ListGroup>
              </div>
          
             </AccordianItem>
             <AccordianItem 
            title="Wines"
            id="wines"
            show="false"
            parent="accordionTill"
            headerId="winesHeader"
            bg="bg-main"
             >
              <div className="bg-main">
              <ListGroup>
              <ListGroupItem title="Voldka" link="/apple" />
                <ListGroupItem title="Spirit" link="/orange" />
                <ListGroupItem title="Fruit Wine" link="/mango" />
              </ListGroup>
              </div>
          
             </AccordianItem>
            </div>
            <div className="col-md-4 ">
            <AccordianItem 
            title="Vegetable"
            id="vegetable"
            show="false"
            parent="accordionTill"
            headerId="vegetableHeader"
            bg="bg-main"
             >
              <div className="bg-main">
              <ListGroup>
              <ListGroupItem title="Carrot" link="/apple" />
                <ListGroupItem title="Okra" link="/orange" />
                <ListGroupItem title="Carrot" link="/mango" />
              </ListGroup>
              </div>
          
             </AccordianItem>
             <AccordianItem 
            title="Beverages"
            id="beverages"
            show="false"
            parent="accordionTill"
            headerId="beveragesHeader"
            bg="bg-main"
             >
              <div className="bg-main">
              <ListGroup>
              <ListGroupItem title="Milo" link="/apple" />
                <ListGroupItem title="Cocoa" link="/orange" />
                <ListGroupItem title="Bournvita" link="/mango" />
              </ListGroup>
              </div>
          
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
                <h5 className="font-weight-bold">Around-the-corner-Gloceries</h5>
                <h5 className="font-weight-bold"><i className="feather icon-printer"></i> Print</h5>
              </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row">Jollof Rice</th>
      <td>x1</td>
      <td>3500</td>
     
    </tr>
    <tr >
      <th scope="row">Coca Cola</th>
      <td>x2</td>
      <td>500</td>
      
    </tr>
    <div style={{'margin-top':'100px'}}></div>
    
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