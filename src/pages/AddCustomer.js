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
                <div className="col-md-10">
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
<div className="pt-5 pb-5 bg-gray">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-others" role="tabpanel" aria-labelledby="others">Other Details</div>
  <div class="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="address">Address</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="contact">Contact Person</div>
  <div class="tab-pane fade" id="pills-custom" role="tabpanel" aria-labelledby="custom">Custom Fields</div>
  <div class="tab-pane fade" id="pills-reporting" role="tabpanel" aria-labelledby="reporting">Reporting </div>
  <div class="tab-pane fade" id="pills-remark" role="tabpanel" aria-labelledby="remark">Remarks</div>
</div>
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