

import React,{useState,useEffect} from 'react';
import TagsInput from 'pages/TagsInput';
import {useDropzone} from 'react-dropzone';
import { useTitle } from 'components/hooks/useTitle';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from 'components/Message';
import LoadingButton from 'components/LoadingButton';
import { useHistory,useParams} from 'react-router-dom';
import {notify} from 'components/Toast';
import Loader from 'components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import {getManufacturers} from 'store/actions/manufacturer';
import {getBrands} from 'store/actions/brand';
import {getUnits} from 'store/actions/unit';
import {getTaxes} from 'store/actions/tax';
import {updateProductGroup,updateProductGroupComplete,getProductGroupDetail} from 'store/actions/productGroup';
import {thumbsContainer,thumb,thumbInner,img} from 'components/styles/DropZoneStyle';
import ImageThumbs from 'components/ImageThumbs';
const EditProductGroup = ()=>{
  useTitle('Inventroo | Edit Product Group');
  const params = useParams();
  
  const dispatch = useDispatch();
  const history = useHistory();
  const productGroupID=params.productGroupId;
  const [tags,setTags] = useState([]);
  const [productName,setProductName] = useState("");
  const [product,setProduct] = useState([]);
  const [files, setFiles] = useState([]);
    const [form,setForm] = useState([
      {
        name:"",
        options:"",

        errors:{
            name:null,
            options:null,  
        }
    }
    ]);

    const { success:updateSuccess, error:updateError, loading:updateLoading} = useSelector((state) => state.updateProductGroup);
  const { units} = useSelector((state) => state.units);
  const { taxes} = useSelector((state) => state.taxes);
  const { brands} = useSelector((state) => state.brands);
  const { manufacturers} = useSelector((state) => state.manufacturers);
  const { loading,success,error,productGroup} = useSelector((state) => state.productGroupDetail);
  const {register,formState: { errors },handleSubmit} = useForm();
  const { token} = useSelector((state) => state.auth);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg,image/png',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

    const selectedTags = tags => {
      setTags(tags)
      handleAddProduct(tags)
     
      // const prevTags = [...tags];
      // const newTags = [...prevTags,...tags];
      // setTags([...new Set(newTags)]);
      
    };

    const handleAddMore = (e)=>{
      e.preventDefault();
      const inputState = {
          name:"",
          options:"",

          errors:{
              name:null,
              options:null,  
          }
      }

          setForm(prev=>[...prev,inputState]);
      
  }

  const handleChange = (index,event)=>{
    event.preventDefault();
    event.persist();
    console.log('call');
    setForm((prev)=>{
        return prev.map((item,i)=>{
            if(i!==index){
                return item;
            }

            return {
                ...item,
                [event.target.name]:event.target.value,

                errors: {
                    ...item.errors,
                    [event.target.name]:
                      event.target.value.length > 0
                        ? null
                        : [event.target.name] + " Is required",
                  },
            }
        })
    })
}

const handleRemove = (e,index)=>{
  e.preventDefault();
  setForm(prev=>prev.filter((item)=>item!==prev[index]));
}

const handleAddProduct = (tags)=>{
setProduct((prev)=>{
  console.log(prev.length);
  return [...prev,
    {
      name:`${productName}-${tags[prev.length]}`,
      sku:"",
      costPrice:0,
      salePrice:0,
      upc:"",
      ean:"",
      isbn:"",
      reOrderPoint:"",
  }
  ]
});

 

}
const updateProductInput = (index,event)=>{
  let data = [...product];
  data[index].name = event.target.value;
  setProduct(data);
}

const handleProductChange = (index,event)=>{
  event.preventDefault();
  event.persist();
  setProduct((prev)=>{
      return prev.map((item,i)=>{
          if(i!==index){
              return item;
          }

          return {
              ...item,
              [event.target.name]:event.target.value,
          }
      })
  })
}

  




  useEffect(()=>{
    if(!productGroup || productGroup.productID!=productGroupID){
      dispatch(getProductGroupDetail(productGroupID));
    }else{

    }
    

    // dispatch(getManufacturers(token));
    // dispatch(getBrands(token));
    // dispatch(getUnits(token));
    // dispatch(getTaxes());
  },[productGroup,productGroupID]);

  if(loading) return <Loader/>

const submit = (data)=>{
  const productData = new FormData();
  const adjustedProducts = [];
       
  product.map(item=>{
    
    adjustedProducts.push({
      name:item.name,
      sku:item.sku,
      cost_price:item.costPrice,
      sale_price:item.salePrice,
      upc:item.upc,
      isbn:item.isbn,
      ean:item.ean,
      recorder_point:Number(item.reOrderPoint),

    })
  });
 
    const attributes=[];
    attributes.push({name:form[0].name,option:tags.join(',')});
    console.log(adjustedProducts);


  productData.append("product_image",acceptedFiles[0]);
  productData.append("name",productName);
  productData.append("type",data.type);
  productData.append("returnable",Number(data.returnable));
  productData.append("unit_id",data.unit);
  productData.append("brand_id",data.brand);
  productData.append("tax_id",data.tax);
  productData.append("manufacturer_id",data.manufacturer);
  productData.append("attributes",JSON.stringify(attributes));
  productData.append("products",JSON.stringify(adjustedProducts));

  dispatch(updateProductGroup(productData));
 
}

if(updateSuccess){
  dispatch(updateProductGroupComplete());
  history.push('/dashboard/product-group/all');
  notify("success","Product Group Added Successfully");
}

    return(
<div className="content-body">
<div className="row mx-auto">
    <h3 className="font-weight-bold">Edit Product Group</h3>
</div>
{updateError && <ErrorMessage message={updateError}/>}
    <form onSubmit={handleSubmit(submit)}>
   
    <div className="row mt-2 row mx-auto">
      <div className="col-md-7">
      <div className="form-group row">
<label htmlFor="type" className="col-sm-3 col-form-label">Type</label>
<div className="col-sm-9">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Goods" name="type"
  {...register("type", { required: "Product Type is required" })}
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
    <label htmlFor="productName" className="col-sm-3 col-form-label text-danger">
        Product Group Name * </label>
    <div className="col-sm-9">
      <input type="text" className="form-control" 
      value={productName}
     
      onChange={(e)=>setProductName(e.target.value)} 
      
     
       />
       <span className="text-danger text-center">{errors.product_name?.message}</span>
    </div>
  </div>



  <div className="form-group row">
    <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
    <div className="col-sm-9">
      <textarea className="form-control" rows={4} cols={8}></textarea>
      <div className="form-check form-check-inline">
  <input className="form-check-input position-static" name="returnable" value="1" type="checkbox" {...register("returnable")} />
  <label className="form-check-label">Returnable Products <i className="feather icon-help-circle" data-toggle="tooltip" data-placement="top" title="Enable this option if items in this group are eligible for sales return"></i></label>
</div>
    </div>
  </div>
      </div>

      <div className="d-flex flex-column col-md-3 align-items-center">
<section className="container  drop-zone-new" >
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} name="file"/>
         <i className="feather icon-image icon-size"></i>
        <p>Drag Image (s) here or click to select files</p>

      </div>

    </section>
    <aside style={thumbsContainer}>
       <ImageThumbs files={files} 
       thumb={thumb} img={img}
       thumbInner={thumbInner} />
      </aside>
    </div>

    </div>
    
    <div className="row mx-auto">
    <div className="col-md-10">
    <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Unit </label>
    <div className="col-sm-4">
    <select className="custom-select" name="unit" {...register("unit")}>
       <option>Select or type to add</option>
       {units && units.map(unit=>(
        <option value={unit.id}  key={unit.id}>{unit.display_name}</option>
       ))}


     </select>
    </div>
    <label className="col-sm-2 col-form-label">
        Tax</label>
    <div className="col-sm-4">
     <select className="custom-select" name="tax" {...register("tax")}>
       <option>Select a Tax</option>
       {taxes && taxes.map(tax=>(
        <option value={tax.id}  key={tax.id}>{tax.name}</option>
       ))}
     </select>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Manufacturer </label>
    <div className="col-sm-4">
    <select className="custom-select" name="manufacturer" {...register("manufacturer")}>
       <option>Select Manufacturer</option>
       {manufacturers && manufacturers.map(manufacturer=>(
        <option value={manufacturer.id} key={manufacturer.id}>{manufacturer.name}</option>
       ))}
     </select>
    </div>
    <label className="col-sm-2 col-form-label">
        Brand</label>
    <div className="col-sm-4">
     <select className="custom-select" name="brand" {...register("brand")}>
       <option>Select a Brand</option>
       {brands && brands.map(brand=>(
        <option value={brand.id} key={brand.id}>{brand.name}</option>
       ))}
     </select>
    </div>
  </div>
  <p className="text-danger">Multiple Products?</p>
 
 {JSON.stringify(product)}

  {form.map((item,index)=>(
    <div className="form-row" key={`item-${index}`}>
        <div className="col-md-4 offset-md-2">
      <label >Attributes</label>
      <input type="text" className={item.errors.name?"form-control is-invalid":"form-control"} name="name" 
      value={item.name}
      onChange={(e)=>handleChange(index,e)}
       />
       <span className="invalid-feedback">
           {item.errors?.name}
       </span>
    </div>
    <div className="col-md-5">
      <label >Options</label>

      <TagsInput selectedTags={selectedTags}
      addProduct={handleAddProduct}
      // onChange={(e)=>handleChange(index,e)}
      name="options" 
      tags={[]}
        />

      {/* <input type="text"
      name="options" data-role="tagsinput"
      value={item.options}
      onBlur={handleAddProduct}
      className={item.errors.options?"form-control is-invalid":"form-control"}
      onChange={(e)=>handleChange(index,e)}
      /> */}
      <span className="invalid-feedback">
           {item.errors?.options}
       </span>
    </div>
    <div className="col-md-1 mt-3">
    <i className="feather icon-x-circle color-main" onClick={(e)=>handleRemove(e,index)} style={{ fontSize:'16px',cursor:'pointer' }}></i>
    </div>
        </div>
))}
  <span onClick={handleAddMore} className="offset-md-2 " ><i  className="fa fa-plus-circle color-main mt-1" style={{ fontSize:'18px',cursor:'pointer' }}></i> Add More attributes</span>
           
   

   

    </div>
<section className="col-md-12">
  
<div className="bg-light row justify-content-between align-items-center p-2 mt-1">
  <div>
  <div className="form-check form-check-inline">
  <label className="form-check-label mr-2">Select Your Product Type:</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="productType"/>
  <label className="form-check-label" >Inventory</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="productType"/>
  <label className="form-check-label" >Non-inventory</label>
</div>
  </div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox"/>
  <label className="form-check-label" >Include Opening Stock?</label>
</div>
      </div>
</section>

    <table className="table table-responsive group-table">
  <thead>
    <tr>
      <th scope="col" className="text-danger">Product Name</th>
      <th scope="col">SKU</th>
      <th scope="col" className="text-danger">Cost Price*</th>
      <th scope="col" className="text-danger">Selling Price*</th>
      <th scope="col">UPC</th>
      <th scope="col">EAN</th>
      <th scope="col">ISBN</th>
      <th scope="col">REORDER POINT</th>
    </tr>

  </thead>

  <tbody>
  {product.map((item,index)=>
    <tr key={`${item}-${index}`}>
      <td>
        <textarea className="form-control" name="name" rows={1}
        onChange={(e)=>handleProductChange(index,e)} 
        value={item.name}></textarea>
      </td>
      <td ><input type="text" className="form-control" name="sku" onChange={(e)=>handleProductChange(index,e)} /></td>
      <td ><input type="text" className="form-control" name="costPrice" onChange={(e)=>handleProductChange(index,e)} /></td>
      <td><input type="text" className="form-control" name="salePrice"  onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td><input type="text" className="form-control" name="upc" onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td><input type="text" className="form-control" name="ean" onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td><input type="text" className="form-control" name="isbn" onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td><input type="text" className="form-control" name="reOrderPoint" onChange={(e)=>handleProductChange(index,e)}  /></td>
    </tr>

  )}
  </tbody>
  </table>

  <div id="accordionWrap2" role="tablist" aria-multiselectable="true" className="mt-2">
  <div className="card shadow-none accordion collapse-icon accordion-icon-rotate left">
					<div id="heading21" className="card-header primary" data-toggle="collapse" href="#accordion21" aria-expanded="false"
					aria-controls="accordion21" >
						<a className="card-title text-capitalize text-dark">Configure Account</a>
					</div>
					<div id="accordion21"  role="tabpanel" data-parent="#accordionWrap2" aria-labelledby="heading21" className="collapse">
						<div className="card-content">
							<div className="card-body">
              <div className="form-row">
    <div className="form-group col-md-4">
      <label >Sales Account</label>
      <input type="text" className="form-control" />
    </div>
    <div className="form-group col-md-4">
      <label >Purchase Account</label>
      <input type="text" className="form-control" />
    </div>
    <div className="form-group col-md-4">
      <label >Inventory Account</label>
      <input type="text" className="form-control" />
    </div>
  </div>
							</div>
						</div>
					</div>
          </div>
          </div>
    

</div>
<div className="float-right mb-1 mt-1">

            {updateLoading? (
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





    )
}
export default EditProductGroup;
