import { usePageSetup } from "components/hooks/usePageSetup";
import {tillMenu} from 'components/utils'

const TillA = ()=>{
    usePageSetup();
return(
    <div className="">
      <div className="content-wrapper bg-main">
        <section className="d-flex justify-content-between pt-1">
        
            <div className="nav-menu">
                    <ul class="nav">
                    <li class="nav-item">
                            <a class="nav-link active" href="#">
                            <img src="/app-assets/images/logo/troo-logo-white.png"
                  alt="branding logo" className="logo-image"/>
                            </a>
                        </li>
                        <li class="nav-item pl-3">
                            <a class="nav-link active text-white" href="#">Till</a>
                        </li>
                        <li class="nav-item pl-3">
                            <a class="nav-link text-white" href="#">KDS</a>
                        </li>
                    </ul>

            </div>
      
        <nav>
          <ul class="nav">
              
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Logout</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#"><i className="feather icon-settings"></i> Settings</a>
              </li>
            </ul>
        </nav>
        </section>
        <hr/>
      <div className="d-flex">
        <div className="col-md-7 food-menu">
        <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
        {tillMenu.map((item,index)=>(
            <li class="nav-item " role="presentation" key={`${index}-${item}`}>
            <a class={index===0?`nav-link text-white active`:`nav-link text-white`} id={`pills-${item}-tab`} data-toggle="pill" href={`#pills-${item}`} role="tab" aria-controls={`pills-${item}`} aria-selected={index===0?`true`:``}>{item}</a>
        </li>
        ))}
  
        </ul>
<div class="tab-content mt-2" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-Rice" role="tabpanel" aria-labelledby="pills-Rice-tab">
          
          <div id="accordionWrap1" role="tablist" aria-multiselectable="true">
          <section className="row ">
            <div className="col-md-4">
            <div class="card accordion collapse-icon accordion-icon-rotate">
					<div id="jollofRice" class="card-header primary" data-toggle="collapse" href="#jollofRice" aria-expanded="false"
					aria-controls="jollofRice">
						<a class="collapsed" href="#">Jollof Rice</a>
					</div>
					<div id="jollofRice" role="tabpanel" data-parent="#accordionWrap1" aria-labelledby="jollofRice" class="collapse ">
						<div class="card-content">
							<div class="card-body">
								Caramels dessert chocolate cake pastry jujubes bonbon. Jelly wafer jelly beans. Caramels
								chocolate cake liquorice cake wafer jelly beans croissant apple pie. Oat cake brownie
								
							</div>
						</div>
					</div>
				</div>
            </div>
            <div className="col-md-4 ">
            <div class="card accordion collapse-icon accordion-icon-rotate">
					<div id="riceStew" class="card-header primary" data-toggle="collapse" href="#riceStew" 
					aria-controls="riceStew" aria-expanded="false">
						<a class="collapsed" href="#"> Rice & Stew</a>
					</div>
					<div id="riceStew" role="tabpanel" data-parent="#accordionWrap1" aria-labelledby="riceStew" class="collapse ">
						<div class="card-content">
							<div class="card-body">
								Caramels dessert chocolate cake pastry jujubes bonbon. Jelly wafer jelly beans. Caramels
								chocolate cake liquorice cake wafer jelly beans croissant apple pie. Oat cake brownie
								
							</div>
						</div>
					</div>
				</div>
            </div>
            <div className="col-md-4 ">
            <div class="card accordion collapse-icon accordion-icon-rotate">
					<div id="coconutRice" class="card-header primary" data-toggle="collapse" href="#coconutRice" 
					aria-controls="coconutRice" aria-expanded="false">
						<a class="collapsed" href="#">Coconut Rice</a>
					</div>
					<div id="coconutRice" role="tabpanel" data-parent="#accordionWrap1" aria-labelledby="coconutRice" class="collapse">
						<div class="card-content">
							<div class="card-body">
								Caramels dessert chocolate cake pastry jujubes bonbon. Jelly wafer jelly beans. Caramels
								chocolate cake liquorice cake wafer jelly beans croissant apple pie. Oat cake brownie
								
							</div>
						</div>
					</div>
				</div>
            </div>
          </section>
            </div>
           

  </div>
  <div class="tab-pane fade" id="pills-Pasta" role="tabpanel" aria-labelledby="pills-Pasta-tab">Pasta</div>
  <div class="tab-pane fade" id="pills-Swallow" role="tabpanel" aria-labelledby="pills-Swallow-tab">Swallow</div>
</div>

        </div>
        <div className="col-md-5 pr-2 pl-2">
        <div class="d-flex justify-content-between">
            <div class="switchToggle">
                <input type="checkbox" id="switch"/>
                <label for="switch">Toggle</label>
            </div>
            <div>
              <h4 className="text-white"><i className="fa fa-user mr-1 "> </i>John Doe</h4>
            </div>

            </div>

            <section className="table-wrapper mt-2 bg-white">
              <div className="table-select d-flex justify-content-between color-light pr-2 pl-2 pt-1">
                <h4 className="font-weight-bold">Select Table</h4>
                <h4 className="font-weight-bold">Table #1</h4>
              </div>
    <table class="table">
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
            </div>
            
          </div>
          <div className="p-1">
            <div className="d-flex justify-content-between">
             
              <button className="btn btn-success col-md-3 mr-1">Cancel</button>
              <button className="btn btn-success col-md-3 mr-1">Hold</button>
              <button className="btn btn-success col-md-3 mr-1">Comment</button>
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