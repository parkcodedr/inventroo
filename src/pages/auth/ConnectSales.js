import { usePageSetup } from "components/hooks/usePageSetup";
import { useTitle } from "components/hooks/useTitle";
import {Link} from 'react-router-dom';

const ConnectSales = ()=>{
    usePageSetup();
    useTitle("Inventroo | Connect to Sales")
    return (
        <main className="row mx-auto">
        <div className="col-md-4 bg-sales" style={{height:'100vh'}} >
        
        </div>
        <section className="col-md-8 ">
        <div className="row m-3 ">
        <img src="/app-assets/images/logo/troo-logo-color.png"  alt="branding logo" height="15%" width="15%" />
        </div>
        
            <div className="col-md-8 mx-auto">
            <form>
        <h5 className="text-center mb-1 font-weight-bold">Connect to Sales</h5>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label >Firstn Name</label>
      <input type="text" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label >Last Name</label>
      <input type="text" class="form-control" />
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label >Email *</label>
      <input type="text" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label >Password</label>
      <input type="text" class="form-control" />
    </div>
  </div>
  <div class="form-group">
    <label for="business_name">Buiness Name</label>
    <input type="text" class="form-control"  placeholder="Business Name"/>
  </div>

  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label" >
        I agree  to <Link to="/terms">Terms & Conditions</Link> and 
        <Link to="/privacy-policy"> Privacy Policy</Link>
      </label>
    </div>
  </div>

  <div class="form-group text-center">
    
  <button type="submit" class="btn btn-main col-md-6">Submit</button>
  </div>
</form>

            </div>
        </section>

        </main>
    )
}

export default ConnectSales;