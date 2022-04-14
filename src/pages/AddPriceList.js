import { useForm } from 'react-hook-form';
import {ErrorMessage} from 'components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from 'components/Toast';
import { useTitle } from 'components/hooks/useTitle';
import LoadingButton from '../components/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import {addPriceList,addPriceListComplete} from '../store/actions/priceList';

const AddPriceList = ()=>{
  useTitle("Inventroo | New Price List");
    const dispatch = useDispatch();
    const history = useHistory();

    const { success, error, loading} = useSelector((state) => state.addPriceList);
    const {register,formState: { errors },handleSubmit} = useForm();
    const { token} = useSelector((state) => state.auth);

    if(success){
        dispatch(addPriceListComplete());
        history.push('/dashboard/price-list/all');
        notify("success","Price List Added Successfully");
      }

    const submit = (data)=>{
        console.log(data);
        dispatch(addPriceList(data));
    }

    return(
        <div className="content-body">
            <h4 className="font-weight-bold">New Price List</h4>
            <div className="row mt-3">
                <div className="col-md-8">
            <form onSubmit={handleSubmit(submit)}>
                {error && <ErrorMessage message={error}/>}
    <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="name"
      {...register("name", { required: "Name is required" })}
       />
        <span className="text-danger text-center">{errors.name?.message}</span>
    </div>
  </div>

  <div className="form-group row">
<label htmlFor="type" className="col-sm-3 col-form-label">Type</label>
<div className="col-sm-9">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Goods" name="type"
  {...register("type", { required: "Type is required" })}
  />
  <label className="form-check-label">Goods</label>
    </div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Services" name="type"
  {...register("type", { required: "Product Type is required" })}
  />
  <label className="form-check-label">Services</label>
</div>
<span className="text-danger text-center">{errors.type?.message}</span>
</div>
</div>

<div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Item Rate</label>
    <div className="col-sm-9">
    <div class="form-check mb-1">
  <input class="form-check-input" type="radio" name="itemRate" />
  <label class="form-check-label" for="itemRate">
    Markup or Machdown the item rate by percentage
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="itemRate" />
  <label class="form-check-label" htmlFor="itemRate">
    Enter the rate individually for each them
  </label>
</div>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Description</label>
    <div className="col-sm-9">
      <textarea className="form-control" name="description"
       {...register("decription")} rows={5} cols={4}
       ></textarea>

    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-3 col-form-label text-danger">
        Percentage</label>
    <div className="col-sm-9">
    <div className="input-group">
  <div className="input-group-prepend">

  <select className="custom-select" name="mark_type" {...register("mark_type")} >
  <option value="markup">Markup</option>
  <option value="markdown">Markdown</option>
  </select>

  </div>
  <input type="text" className="form-control" name="percentage" {...register("percentage", { required: "Percentage is required" })}/>
  <div className="input-group-append">
    <span className="input-group-text">%</span>
  </div>
</div>

       <span className="text-danger text-center">{errors.percentage?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Roundoff To</label>
    <div className="col-sm-9">
      <select className="custom-select" name="roundoff" {...register("roundoff", { required: "Roundoff to is required" })}
       >
         <option value="never mind">Never Mind</option>
         <option value="whole number">Nearest Whole Number</option>
         <option value="0.99">0.99</option>
         <option value="0.50">0.50</option>
         <option value="0.49">0.49</option>
       </select>
        <span className="text-danger text-center">{errors.roundoff?.message}</span>
    </div>
  </div>

  <div className="float-right mb-5 mt-2">

            {loading? (
              <LoadingButton message={"Save and Continue"}/>
            ):(
      <button type="submit" className="btn btn-main mr-1">
      <i className="fa fa-check-square-o"></i> Save and Continue
      </button>
            )}
								

                                <button type="reset" className="btn btn-warning ">
									<i className="feather icon-x"></i> Cancel
								</button>
							</div>
                </form>
                </div>
         </div>

        </div>
    )
}

export default AddPriceList;
