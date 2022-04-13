import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useTitle } from 'components/hooks/useTitle';
import { useSelector, useDispatch } from 'react-redux';
import {addManufacturer,addManufacturerComplete} from '../store/actions/manufacturer';

const AddCustomer = ()=>{
  useTitle("Inventroo | New Customer");
    const dispatch = useDispatch();
  const history = useHistory();

    const { success, error, loading} = useSelector((state) => state.addManufacturer);
    const {register,formState: { errors },handleSubmit} = useForm();
    const { token} = useSelector((state) => state.auth);

    if(success){
        
        dispatch(addManufacturerComplete());
        history.push('/dashboard/product-category/all');
        notify("success","Product Category Added Successfully");
      }

    const submit = (data)=>{
        console.log(data);
        dispatch(addManufacturer(data,token));
    }

    return(
        <div className="content-body">
            <h4 className="font-weight-bold">Add Customer</h4>
            <div className="row mt-5">
                <div className="col-md-12">
            <form onSubmit={handleSubmit(submit)}>
                {error && <ErrorMessage message={error}/>}
                <div className="form-group row">
<label htmlFor="type" className="col-sm-3 col-form-label">Customer Type</label>
<div className="col-sm-9">
    <div className="form-check form-check-inline">
  <input className="form-check-input" checked type="radio" value="business" name="type"
  {...register("type", { required: "Customer Type is required" })}
  />
  <label className="form-check-label">Business</label>
    </div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="individual" name="type"
  {...register("type", { required: "Customer Type is required" })}
  />
  <label className="form-check-label">Individual</label>
</div>
<span className="text-danger text-center">{errors.type?.message}</span>
</div>
</div>
<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Primary Contact </label>
    <div className="col-sm-3">
    <select className="custom-select" name="salutation"
    {...register("salutation", { required: "Salutation is required" })}>
       <option>Salutation</option>
       <option value="Mr">Mr.</option>
       <option value="Mrs">Mrs.</option>
       <option value="Miss">Miss.</option>
       <option value="Dr">Dr.</option>

     </select>
       <span className="text-danger text-center">{errors.salutation?.message}</span>
    </div>

    <div className="col-sm-3">
    <input className="form-control" name="firstname"
    {...register("firstname", { required: "Firstname is required" })} placeholder="Firstname" />
       
       <span className="text-danger">{errors.firstname?.message}</span>
    </div>
    <div className="col-sm-3">
    <input className="form-control" name="lastname"
    {...register("lastname", { required: "Lastname is required" })}  placeholder="Lastname"/>
       
       <span className="text-danger">{errors.lastname?.message}</span>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Company Name</label>
    <div className="col-sm-6">
    <input className="form-control" name="company_name"
    {...register("company_name", { required: "Company Name is required" })}  placeholder="Company Name"/>
       
       <span className="text-danger">{errors.company_name?.message}</span>
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Customer Display Name</label>
    <div className="col-sm-6">
    <input className="form-control" name="display_name"
    {...register("display_name", { required: "Customer Display Name is required" })}  placeholder="Display Name"/>
       
       <span className="text-danger">{errors.display_name?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Customer Email</label>
    <div className="col-sm-6">
    <input className="form-control" name="email"
    {...register("email", { required: "Customer Email is required" })}  placeholder="Okwori@example.com"/>
       
       <span className="text-danger">{errors.email?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Customer  Phone </label>
    
    <div className="col-sm-3">
    <input className="form-control" name="work_phone"
    {...register("work_phone", { required: "Work Phone is required" })} placeholder="Work Phone" />
       
       <span className="text-danger">{errors.work_phone?.message}</span>
    </div>
    <div className="col-sm-3">
    <input className="form-control" name="mobile"
    {...register("mobile", { required: "Mobile is required" })}  placeholder="Mobile"/>
       
       <span className="text-danger">{errors.mobile?.message}</span>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Website</label>
    <div className="col-sm-6">
    <input className="form-control" name="website"
    {...register("website")}/>
       
       <span className="text-danger">{errors.email?.message}</span>
    </div>
</div>
<div className="p-1 bg-light-50 col-12">
<ul class="nav nav-pills " id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-others-tab" data-toggle="pill" href="#pills-others" role="tab" aria-controls="others" aria-selected="true">Other Details</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-address-tab" data-toggle="pill" href="#pills-address" role="tab" aria-controls="address" aria-selected="false">Address</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="contact" aria-selected="false">Contact Person</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-custom-tab" data-toggle="pill" href="#pills-custom" role="tab" aria-controls="custom" aria-selected="false">Custom Fields</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-reporting-tab" data-toggle="pill" href="#pills-reporting" role="tab" aria-controls="reporting" aria-selected="false">Reporting Tags</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-remark-tab" data-toggle="pill" href="#pills-remark" role="tab" aria-controls="remark" aria-selected="false">Remarks</a>
  </li>
</ul>

</div>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active mt-1" id="pills-others" role="tabpanel" aria-labelledby="others">
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Primary Contact </label>
    <div className="col-sm-6">
    <select className="custom-select" name="currency"
    {...register("currency", { required: "Currency is required" })}>
       <option>Currency</option>
       <option value="NGN">NGN</option>
       <option value="DOLLAR">USD</option>

     </select>
       <span className="text-danger text-center">{errors.currency?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Tax Rate </label>
    <div className="col-sm-6">
    <select className="custom-select" name="tax_rate"
    {...register("tax_rate", { required: "Tax Rate is required" })}>
       <option>Select Tax Rate</option>
       <option value="0.5">0.5</option>
       <option value="0.9">0.9</option>

     </select>
       <span className="text-danger text-center">{errors.tax_rate?.message}</span>
       <span>To associate more than one tax, you need to create a tax group in Settingss</span>

    </div>

    </div>
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Payment Term </label>
    <div className="col-sm-6">
    <select className="custom-select" name="payment_term"
    {...register("payment_term", { required: "Payment Term is required" })}>
      
       <option value="due on receipt">due on Receipt</option>
       <option value="others">others</option>

     </select>
       <span className="text-danger text-center">{errors.payment_term?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Facebook</label>
    <div className="col-sm-6">
    <input className="form-control" name="facebook"
    {...register("facebook")} />
       
       <span>https://www.facebook.com/</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Twitter</label>
    <div className="col-sm-6">
    <input className="form-control" name="twitter"
    {...register("twitter")} />
       
       <span>https://www.twitter.com/</span>
    </div>
</div>
<p><strong>Customer owner: </strong>Assign a user as the Customer owner to provide
access only to the data of this customer <a href="#">Learn more</a></p>
  </div>
  <div class="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="address">
   <div className="row">
     <section className="col-md-6">
     <h5 className="mt-1">BILLING ADDRESS</h5>
     <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Attention</label>
    <div className="col-sm-9">
    <input className="form-control" name="attention"
    {...register("attention")} />
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Country </label>
    <div className="col-sm-9">
    <select className="custom-select" name="country"
    {...register("country", { required: "Country is required" })}>
      
       <option value="nigeria">Nigeria</option>
       <option value="United Kingdom">United Kingdom</option>

     </select>
       <span className="text-danger text-center">{errors.payment_term?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    State </label>
    <div className="col-sm-9">
    <select className="custom-select" name="state"
    {...register("state", { required: "State is required" })}>
      
       <option value="Lagos">Lagos</option>
       <option value="Abuja">Abuja</option>

     </select>
       <span className="text-danger text-center">{errors.state?.message}</span>
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    City </label>
    <div className="col-sm-9">
    <select className="custom-select" name="city"
    {...register("city", { required: "City is required" })}>
      
       <option value="Makurdi">Makurdi</option>
       <option value="Otukpo">Otukpo</option>

     </select>
       <span className="text-danger text-center">{errors.city?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Address</label>
    <div className="col-sm-9">
    <textarea className="form-control" name="address1" rows="3"
    {...register("address1")} placeholder="Street 1"></textarea>
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    </label>
    <div className="col-sm-9">
    <textarea className="form-control" name="address2" rows="3"
    {...register("address2")} placeholder="Street 2"></textarea>
       
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Zip code</label>
    <div className="col-sm-9">
    <input className="form-control" name="zip_code"
    {...register("zip_code")} />
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Phone</label>
    <div className="col-sm-9">
    <input className="form-control" name="phone"
    {...register("phone")} />
       
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Fax</label>
    <div className="col-sm-9">
    <input className="form-control" name="fax"
    {...register("fax")} />
       
    </div>
</div>
     </section>

     <section className="col-md-6">
     <h5 className="mt-1">SHIPPING ADDRESS</h5>
     <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Attention</label>
    <div className="col-sm-9">
    <input className="form-control" name="attention"
    {...register("attention")} />
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Country </label>
    <div className="col-sm-9">
    <select className="custom-select" name="country"
    {...register("country", { required: "Country is required" })}>
      
       <option value="nigeria">Nigeria</option>
       <option value="United Kingdom">United Kingdom</option>

     </select>
       <span className="text-danger text-center">{errors.payment_term?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    State </label>
    <div className="col-sm-9">
    <select className="custom-select" name="state"
    {...register("state", { required: "State is required" })}>
      
       <option value="Lagos">Lagos</option>
       <option value="Abuja">Abuja</option>

     </select>
       <span className="text-danger text-center">{errors.state?.message}</span>
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    City </label>
    <div className="col-sm-9">
    <select className="custom-select" name="city"
    {...register("city", { required: "City is required" })}>
      
       <option value="Makurdi">Makurdi</option>
       <option value="Otukpo">Otukpo</option>

     </select>
       <span className="text-danger text-center">{errors.city?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Address</label>
    <div className="col-sm-9">
    <textarea className="form-control" name="address1" rows="3"
    {...register("address1")} placeholder="Street 1"></textarea>
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    </label>
    <div className="col-sm-9">
    <textarea className="form-control" name="address2" rows="3"
    {...register("address2")} placeholder="Street 2"></textarea>
       
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Zip code</label>
    <div className="col-sm-9">
    <input className="form-control" name="zip_code"
    {...register("zip_code")} />
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Phone</label>
    <div className="col-sm-9">
    <input className="form-control" name="phone"
    {...register("phone")} />
       
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Fax</label>
    <div className="col-sm-9">
    <input className="form-control" name="fax"
    {...register("fax")} />
       
    </div>
</div>
     </section>
   </div>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="contact">Contact Person</div>
  <div class="tab-pane fade" id="pills-custom" role="tabpanel" aria-labelledby="custom">Custom Fields</div>
  <div class="tab-pane fade" id="pills-reporting" role="tabpanel" aria-labelledby="reporting">Reporting </div>
  <div class="tab-pane fade" id="pills-remark" role="tabpanel" aria-labelledby="remark">Remarks</div>
</div>
  
                <button type="submit" className="btn btn-main mr-1 float-right">
				<i className="fa fa-check-square-o"></i> Submit
				</button>
                </form>
                </div>
         </div>

        </div>
    )
}

export default AddCustomer;