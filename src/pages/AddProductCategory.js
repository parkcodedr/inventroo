import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useTitle } from 'components/hooks/useTitle';
import { useSelector, useDispatch } from 'react-redux';
import {addManufacturer,addManufacturerComplete} from '../store/actions/manufacturer';

const AddProductCateogory = ()=>{
  useTitle("Inventroo | New Product Category");
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
        <div className="content-body mt-5">
            <h4 className="font-weight-bold">Add Product Category</h4>
            <div className="row mt-5">
                <div className="col-md-10">
            <form onSubmit={handleSubmit(submit)}>
                {error && <ErrorMessage message={error}/>}
                <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Category Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="category_name"
      {...register("category_name", { required: "Category Name is required" })}
       />
        <span className="text-danger text-center">{errors.category_name?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Description</label>
    <div className="col-sm-9">
      <textarea  className="form-control" name="description"
       {...register("description", { required: "Category Description is required" })}
       ></textarea>
        <span className="text-danger text-center">{errors.description?.message}</span>
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

export default AddProductCateogory;