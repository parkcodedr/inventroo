
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

import {updateProductCategory,updateProductCategoryComplete,getProductCategoryDetail} from '../store/actions/productCategory';

const EditPriceList= ()=>{
useTitle("Inventroo | Edit Product Category");
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const id = params.productCategoryId;
    const {register,reset,formState: { errors },handleSubmit} = useForm();

    const productCategoryDetail = useSelector((state) => state.productCategoryDetail);
    const { category, error, loading} = productCategoryDetail;
    const updateState = useSelector((state) => state.updateProductCategory);
    const { success:updateSuccess, error:updateError, loading:updateLoading} = updateState;
  

    if(updateSuccess){
        history.push('/dashboard/product-category/all');
        notify("success","Product Category Updated Successfully");
        dispatch(updateProductCategoryComplete());
      }

    useEffect(()=>{
        if(!category || category.id!=id){
            dispatch(getProductCategoryDetail(id));
        }else{
            reset({
            category_name:category.category_name,
            description:category.description,
            
            })
        }
    },[category,id])
    


    const submitProductCategory = (data)=>{
        data.categoryID = id;
        dispatch(updateProductCategory(data));
    }
        

    return(
        <div className="content-body">
        {loading? (
            <Loader/>
        ):error?(
            <ErrorMessage message={error}/>
        ):(
            <div className="">
            <h4 className="font-weight-bold">Edit Product Category</h4>
            <div className="row mt-5">
                <div className="col-md-8">
    <form onSubmit={handleSubmit(submitProductCategory)}>
      {updateError && <ErrorMessage message={updateError}/>}
    
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


   

    


    </form>

                </div>
         </div>

        </div>
        )}
        </div>
    )
}

export default EditPriceList;