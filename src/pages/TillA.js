import { usePageSetup } from "components/hooks/usePageSetup";
import {tillMenu} from 'components/utils'

const TillA = ()=>{
    usePageSetup();
return(
    <div className="">
      <div className="content-wrapper bg-main text-white">
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
        <div className="col-md-7">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tillMenu.map((item,index)=>(
            <li class="nav-item" role="presentation" key={`${index}-${item}`}>
            <a class={index===0?`nav-link text-white active`:`nav-link text-white`} id={`pills-${item}-tab`} data-toggle="pill" href={`#pills-${item}`} role="tab" aria-controls={`pills-${item}`} aria-selected={index===0?`true`:``}>{item}</a>
        </li>
        ))}
  
        </ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-Rice" role="tabpanel" aria-labelledby="pills-Rice-tab">Rice</div>
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
              <h4><i className="fa fa-user mr-1"> </i>John Doe</h4>
            </div>

            </div>

            <section className="table-wrapper mt-3 bg-white">
              <div className="table-select d-flex justify-content-between bg-light pr-2 pl-2 pt-1">
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
    <div style={{ "margin-top":'90px' }}></div>
    
  </tbody>
  
</table>

          <div className="bg-light p-1">
            <div className="d-flex ">
              <button className="btn btn-success col-md-2 mr-1">Discount</button>
              <button className="btn btn-success col-md-2 mr-1">Cancel</button>
              <button className="btn btn-success col-md-2 mr-1">Hold</button>
              <button className="btn btn-success col-md-2 mr-1">Comment</button>
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