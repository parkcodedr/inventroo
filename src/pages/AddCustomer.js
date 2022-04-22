import React,{useState} from 'react';
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
  const [customerType,setCustomerType] = useState("business");

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
                <div className="col-md-10">
            <form onSubmit={handleSubmit(submit)}>
                {error && <ErrorMessage message={error}/>}
                <div className="form-group row">
<label htmlFor="type" className="col-sm-2 col-form-label">Customer Type</label>
<div className="col-sm-9">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="business" name="type"
  checked={customerType==="business"}
  {...register("type", { required: "Customer Type is required" })}
  onChange={(e)=>setCustomerType(e.target.value)} />
  <label className="form-check-label">Business</label>
    </div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="individual" name="type"
  {...register("type", { required: "Customer Type is required" })}
  checked={customerType==="individual"}
  onChange={(e)=>setCustomerType(e.target.value)}
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
    <input className="form-control" name="first_name"
    {...register("first_name", { required: "Firstname is required" })} placeholder="Firstname" />
       
       <span className="text-danger">{errors.first_name?.message}</span>
    </div>
    <div className="col-sm-3">
    <input className="form-control" name="last_name"
    {...register("last_name", { required: "Lastname is required" })}  placeholder="Lastname"/>
       
       <span className="text-danger">{errors.last_name?.message}</span>
    </div>
    </div>
      {customerType==="individual"?(
        <>
        <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Date of Birth </label>
    <div className="col-sm-3">
    <input className="form-control" type="date" 
    {...register("date_of_birth",{ required:"Date of Birth is required"})} name="date_of_birth" />
       <span className="text-danger">{errors.date_of_birth?.message}</span>
    </div>
    <label className="col-sm-1 col-form-label">
        Gender</label>
    <div className="col-sm-3">
     <select className="custom-select" 
     {...register("gender",{ required:"Gender is required"})} name="gender">
       <option>Select Gender</option>
       <option value="Male">Male</option>
       <option value="Female">Female</option>
     </select>
    </div>
    <span className="text-danger">{errors.gender?.message}</span>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Address

    <div class="form-check">
  <input class="form-check-input" type="checkbox" />
  <label class="form-check-label" for="flexCheckDefault">
    use as delivery Address
  </label>
</div>
    </label>
    
    <div className="col-sm-6">
    <input className="form-control" name="address"
    {...register("address", { required: "Address is required" })}  placeholder="Address"/>
       
       <span className="text-danger">{errors.address?.message}</span>
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Delivery Address</label>
    <div className="col-sm-6">
    <input className="form-control" name="delivery_address"
    {...register("delivery_address")}  placeholder="Deliver Address"/>
       
    </div>
</div>
        </>
      ):(
        <>
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

        </>
      )}

    
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
    {...register("work_phone")} placeholder="Work Phone" />
       
    
    </div>
    <div className="col-sm-3">
    <input className="form-control" name="mobile"
    {...register("mobile", { required: "Mobile is required" })}  placeholder="Mobile"/>
       
       <span className="text-danger">{errors.mobile?.message}</span>
    </div>
    </div>
    
        {customerType==="individual"?(
          <>
          <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Website</label>
    <div className="col-sm-3">
    <input className="form-control" name="website"
    {...register("website")}/>
       
       <span className="text-danger">{errors.email?.message}</span>
    </div>

    <label className="col-sm-2 col-form-label">
    Loyalty ID</label>
    <div className="col-sm-3">
    <input className="form-control" name="loyalty_id"
    {...register("loyalty_id")}/>
       
    </div>
</div>
          </>
        ):(
          <>
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
     <div className="border-left-main pl-1">
       <p><strong>Note:</strong></p>
       <ul>
         <li>You can add and manage additional address from contact detail section</li>
         <li>View and edit the address format of your transaction under settings <i className="feather icon-arrow-right"></i> Preference <i className="feather icon-arrow-right"></i> Customers and Vendor</li>
       </ul>
     </div>
   </div>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="contact">
    <div className="d-flex justify-content-between p-1">
      <h5>BILLING ADDRESS</h5>
      <h5>SHIPPING ADDRESS</h5>
    </div>
    <table class="table">
  <thead className="bg-main text-white">
    <tr>
      <th scope="col">Salutation</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
      <th scope="col">Workphone</th>
      <th scope="col">Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mr.</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>+987685668</td>
      <td>+445657765</td>
    </tr>
    
    
  </tbody>
</table>
<p className="color-main"> <i className="feather icon-plus"></i> Add contact person</p>
  </div>
  

  <div class="tab-pane fade" id="pills-custom" role="tabpanel" aria-labelledby="custom">
    <p className="text-center mt-1">Start adding custom fields for your contact
    by going to Settings <i className="feather icon-arrow-right"></i> Preferences <i className="feather icon-arrow-right"></i>Customers and Vendor.<br/> You can also
    refine the address format of your customers from there
    </p>
  </div>
  <div class="tab-pane fade" id="pills-reporting" role="tabpanel" aria-labelledby="reporting">
  <p className="text-center mt-1">You have not created any Reporting Tags. <br/>
    Start creating by going to More Settings <i className="feather icon-arrow-right"></i> Reporting Tags
    </p>
  </div>
  <div class="tab-pane fade" id="pills-remark" role="tabpanel" aria-labelledby="remark">
  <div class="form-group col-md-6 mt-1">
    <label >Remarks <span className="text-muted">(For internal use)</span></label>
    <textarea class="form-control" rows="5" cols="5" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
</div>
          </>
        )}

  
          <button type="submit" className="btn btn-main mr-1">
				<i className="fa fa-check-square-o"></i> Submit
				</button>

        <button type="reset" className="btn btn-outline-main mr-1">
				<i className="feather icon-x"></i> Cancel
				</button>
                </form>
                </div>
         </div>

        </div>
    )
}

export default AddCustomer;