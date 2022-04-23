
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDropzone} from 'react-dropzone';
import { useForm } from 'react-hook-form';
import Loader from '../components/Loader';
import {ErrorMessage} from '../components/Message';
import ButtonProcessing from '../components/ButtonProcessing';
import {useHistory,useParams} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { useTitle } from 'components/hooks/useTitle';

import {updateCustomer,updateCustomerComplete,getCustomerDetail} from '../store/actions/customers';

const EditCustomerList= ()=>{
useTitle("Inventroo | Edit Customer");
const [customerType,setCustomerType] = useState("");
const [displayName,setDisplayName] = useState([]);
const [salutation,setSalutation] = useState("");
const [firstname,setFirstname] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const id = params.customerId;
    const {register,reset,formState: { errors },handleSubmit} = useForm();

    const customerDetail = useSelector((state) => state.customerDetail);
    const { customer, error, loading} = customerDetail;
    const updateState = useSelector((state) => state.updateCustomer);
    const { success:updateSuccess, error:updateError, loading:updateLoading} = updateState;
    

    if(updateSuccess){
        history.push('/dashboard/customer/all');
        notify("success","Customer Updated Successfully");
        dispatch(updateCustomerComplete());
      }

    useEffect(()=>{
        if(!customer || customer.customerID!=id){
            dispatch(getCustomerDetail(id));
        }else{
            reset({
            ...customer
            })
            setCustomerType(customer.account_type);
        }
    },[customer,id,dispatch])
    
    const generateDisplayName = (salutation,firstname,lastname)=>{
      
          
    }

    const submitPriceList = (data)=>{
        data.customerID = id;
        dispatch(updateCustomer(data));
    }
        

    return(
        <div className="content-body">
        {loading? (
            <Loader/>
        ):error?(
            <ErrorMessage message={error}/>
        ):(
            <div className="">
            <h4 className="font-weight-bold">Edit Customer</h4>
            <hr/>
            <div className="row mt-2">
                
    <form onSubmit={handleSubmit(submitPriceList)}>
    <div className="col-md-10">
      {updateError && <ErrorMessage message={updateError}/>}
    
      <div className="form-group row">
<label htmlFor="type" className="col-sm-2 col-form-label">Customer Type</label>
<div className="col-sm-9">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="business" name="account_type"
  checked={customerType==="business"}
  {...register("account_type", { required: "Customer Type is required" })}
  onChange={(e)=>setCustomerType(e.target.value)} />
  <label className="form-check-label">Business</label>
    </div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="individual" name="account_type"
  {...register("account_type", { required: "Customer Type is required" })}
  checked={customerType==="individual"}
  onChange={(e)=>setCustomerType(e.target.value)}
  />
  <label className="form-check-label">Individual</label>
</div>
<span className="text-danger text-center">{errors.account_type?.message}</span>
</div>
</div>
<div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Primary Contact </label>
    <div className="col-sm-3">
    <select className="custom-select" name="salutation"
    {...register("salutation", { required: "Salutation is required" })}
    onChange={(e)=>{
      setSalutation(e.target.value)
      generateDisplayName(e.target.value,"","");
    }}
    >
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
    {...register("first_name", { required: "Firstname is required" })} 
    onChange={(e)=>{
      setFirstname(e.target.value)
      generateDisplayName("",e.target.value);
    }}
    placeholder="Firstname" />
      
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
    {...register("date_of_birth")} name="date_of_birth" />
       <span className="text-danger">{errors.date_of_birth?.message}</span>
    </div>
    <label className="col-sm-1 col-form-label">
        Gender</label>
    <div className="col-sm-3">
     <select className="custom-select" 
     {...register("gender",{ required:"Gender is required"})} name="gender">
       <option value="">Select Gender</option>
       <option value="Male">Male</option>
       <option value="Female">Female</option>
     </select>
    </div>
    <span className="text-danger">{errors.gender?.message}</span>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Address

    <div className="form-check">
  <input className="form-check-input" type="checkbox" />
  <label className="form-check-label">
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
    <input className="form-control" name="customer_email"
    {...register("customer_email", { required: "Customer Email is required" })}  placeholder="Okwori@example.com"/>
       
       <span className="text-danger">{errors.customer_email?.message}</span>
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
    <input className="form-control" name="mobile_phone"
    {...register("mobile_phone", { required: "Mobile is required" })}  placeholder="Mobile"/>
       
       <span className="text-danger">{errors.mobile_phone?.message}</span>
    </div>
    </div>
    
        {customerType==="individual"?(
          <>
          <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Website</label>
    <div className="col-sm-3">
    <input className="form-control" name="website_url"
    {...register("website_url")}/>
       
       
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
    <input className="form-control" name="website_url"
    {...register("website_url")}/>
       
      
    </div>
</div>



<div className="p-1 bg-light-50 col-12">
<ul className="nav nav-pills " id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="pills-others-tab" data-toggle="pill" href="#pills-others" role="tab" aria-controls="others" aria-selected="true">Other Details</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-address-tab" data-toggle="pill" href="#pills-address" role="tab" aria-controls="address" aria-selected="false">Address</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="contact" aria-selected="false">Contact Person</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-custom-tab" data-toggle="pill" href="#pills-custom" role="tab" aria-controls="custom" aria-selected="false">Custom Fields</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-reporting-tab" data-toggle="pill" href="#pills-reporting" role="tab" aria-controls="reporting" aria-selected="false">Reporting Tags</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-remark-tab" data-toggle="pill" href="#pills-remark" role="tab" aria-controls="remark" aria-selected="false">Remarks</a>
  </li>
</ul>

</div>

<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active mt-1" id="pills-others" role="tabpanel" aria-labelledby="others">
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
     Currency </label>
    <div className="col-sm-6">
    <select className="custom-select" name="currency"
    {...register("currency", { required: "Currency is required" })}>
       <option value="">Select Currency</option>
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
       <option value="">Select Tax Rate</option>
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
      <option value="">Select payment term</option>
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
  <div className="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="address">
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
    <select className="custom-select" name="billing_country"
    {...register("billing_country", { required: "Country is required" })}>
        <option value="">Select Country</option>
       <option value="Nigeria">Nigeria</option>
       <option value="United Kingdom">United Kingdom</option>

     </select>
       <span className="text-danger text-center">{errors.billing_country?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    State </label>
    <div className="col-sm-9">
    <select className="custom-select" name="billing_state"
    {...register("billing_state", { required: "State is required" })}>
       <option value="">Select State</option>
       <option value="Lagos">Lagos</option>
       <option value="Abuja">Abuja</option>

     </select>
       <span className="text-danger text-center">{errors.billing_state?.message}</span>
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    City </label>
    <div className="col-sm-9">
    <select className="custom-select" name="billing_city"
    {...register("billing_city", { required: "City is required" })}>
       <option value="">Select City</option>
       <option value="Makurdi">Makurdi</option>
       <option value="Otukpo">Otukpo</option>

     </select>
       <span className="text-danger text-center">{errors.billing_city?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Address</label>
    <div className="col-sm-9">
    <textarea className="form-control" name="address" rows="3"
    {...register("address")} placeholder="Street 1"></textarea>
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    </label>
    <div className="col-sm-9">
    <textarea className="form-control" name="billing_address2" rows="3"
    {...register("billing_address2")} placeholder="Street 2"></textarea>
       
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
    <input className="form-control" name="billing_phone"
    {...register("billing_phone")} />
       
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Fax</label>
    <div className="col-sm-9">
    <input className="form-control" name="billing_fax"
    {...register("billing_fax")} />
       
    </div>
</div>
     </section>

     <section className="col-md-6">
     <h5 className="mt-1">SHIPPING ADDRESS</h5>
     <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Attention</label>
    <div className="col-sm-9">
    <input className="form-control" name="shipping_attention"
    {...register("shipping_attention")} />
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Country </label>
    <div className="col-sm-9">
    <select className="custom-select" name="shipping_country"
    {...register("shipping_country", { required: "Country is required" })}>
       <option value="">Select Country</option>
       <option value="Nigeria">Nigeria</option>
       <option value="United Kingdom">United Kingdom</option>

     </select>
       <span className="text-danger text-center">{errors.shipping_country?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    State </label>
    <div className="col-sm-9">
    <select className="custom-select" name="shipping_state"
    {...register("shipping_state", { required: "State is required" })}>
       <option value="">Select State</option>
       <option value="Lagos">Lagos</option>
       <option value="Abuja">Abuja</option>

     </select>
       <span className="text-danger text-center">{errors.shipping_state?.message}</span>
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    City </label>
    <div className="col-sm-9">
    <select className="custom-select" name="shipping_city"
    {...register("shipping_city", { required: "City is required" })}>
       <option value="">Select City</option>
       <option value="Makurdi">Makurdi</option>
       <option value="Otukpo">Otukpo</option>

     </select>
       <span className="text-danger text-center">{errors.shipping_city?.message}</span>
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Address</label>
    <div className="col-sm-9">
    <textarea className="form-control" name="shipping_address" rows="3"
    {...register("shipping_address")} placeholder="Street 1"></textarea>
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    </label>
    <div className="col-sm-9">
    <textarea className="form-control" name="shipping_address" rows="3"
    {...register("shipping_address")} placeholder="Street 2"></textarea>
       
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Zip code</label>
    <div className="col-sm-9">
    <input className="form-control" name="shipping_zip_code"
    {...register("shipping_zip_code")} />
       
    </div>
</div>

<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Phone</label>
    <div className="col-sm-9">
    <input className="form-control" name="shipping_phone"
    {...register("shipping_phone")} />
       
    </div>
</div>
<div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Fax</label>
    <div className="col-sm-9">
    <input className="form-control" name="shipping_fax"
    {...register("shipping_fax")} />
       
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
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="contact">
    <div className="d-flex justify-content-between p-1">
      <h5>BILLING ADDRESS</h5>
      <h5>SHIPPING ADDRESS</h5>
    </div>
    <table className="table">
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
  

  <div className="tab-pane fade" id="pills-custom" role="tabpanel" aria-labelledby="custom">
    <p className="text-center mt-1">Start adding custom fields for your contact
    by going to Settings <i className="feather icon-arrow-right"></i> Preferences <i className="feather icon-arrow-right"></i>Customers and Vendor.<br/> You can also
    refine the address format of your customers from there
    </p>
  </div>
  <div className="tab-pane fade" id="pills-reporting" role="tabpanel" aria-labelledby="reporting">
  <p className="text-center mt-1">You have not created any Reporting Tags. <br/>
    Start creating by going to More Settings <i className="feather icon-arrow-right"></i> Reporting Tags
    </p>
  </div>
  <div className="tab-pane fade" id="pills-remark" role="tabpanel" aria-labelledby="remark">
  <div className="form-group col-md-6 mt-1">
    <label >Remarks <span className="text-muted">(For internal use)</span></label>
    <textarea className="form-control" rows="5" cols="5" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
</div>
          </>
        )}


  <div className="float-right mb-2 mt-5">

								{updateLoading? (
                  <ButtonProcessing message={"Updating"}/>
                ):(
                  <button type="submit" className="btn btn-main mr-1">
									<i className="fa fa-check-square-o"></i> Save and Continue
								</button>
                )}

                                <button type="reset" className="btn btn-warning ">
									<i className="feather icon-x"></i> Cancel
								</button>
							</div>


   

    

</div>
    </form>

                
         </div>

        </div>
        )}
        </div>
    )
}

export default EditCustomerList;