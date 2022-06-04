import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from 'components/Toast';
import LoadingButton from 'components/LoadingButton';
import { useTitle } from 'components/hooks/useTitle';
import { useSelector, useDispatch } from 'react-redux';
import {addProductCategory,addProductCategoryComplete} from 'store/actions/productCategory';

const AddProductCateogory = ()=>{
  useTitle("Inventroo | New Product Category");
    const dispatch = useDispatch();
  const history = useHistory();

    const { success, error, loading} = useSelector((state) => state.addProductCategory);
    const {register,formState: { errors },handleSubmit} = useForm();

    if(success){
        dispatch(addProductCategoryComplete());
        history.push('/dashboard/product-category/all');
        notify("success","Product Category Added Successfully");
      }

    const submit = (data)=>{
        console.log(data);
        dispatch(addProductCategory(data));
    }

    return(
        <div className="content-body">
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
  
  {loading? (
                  <div className="float-right">
                    <LoadingButton/>
                  </div>
                ):(
                  <button type="submit" className="btn btn-main mr-1 float-right">
									<i className="fa fa-check-square-o"></i> Save and Continue
								</button>
                )}

                </form>
                </div>
         </div>

        </div>
    )
}

export default AddProductCateogory;