import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
//import {addManufacturer,addManufacturerComplete} from '../store/actions/manufacturer';
import {getProducts,getProductDetail} from '../store/actions/product';

const AddInventoryAdjustment = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [form,setForm] = useState([
      {
        product_name:"",
        opening_stock:"",
        cost_price:0,
        sale_price:0,
        new_stock_in_hand:0,
        quantity_adjusted:0,

        errors:{
            product_name:null,
            cost_price:null,
            sale_price:null,
        }
    }
    ]);

    const { products, error, loading} = useSelector((state) => state.products);
    const { product,loading:productLoading} = useSelector((state) => state.productDetail);
    const {register,formState: { errors },handleSubmit} = useForm();
    const { token} = useSelector((state) => state.auth);

    // if(success){

    //     dispatch(addManufacturerComplete());
    //     history.push('/dashboard/price-list/all');
    //     notify("success","Price List Added Successfully");
    //   }

    const submit = (data)=>{
        console.log(data);
        //dispatch(addPriceList(data));
    }


    
const prevIsValid = ()=>{
  if (form.length === 0) {
      return true;
    }

    const someEmpty = form.some(
      (item) => item.productName === "" || item.costPrice === ""
    );

    if (someEmpty) {
      form.map((item, index) => {
        const allPrev = [...form];

        if (form[index].product_name === "") {
          allPrev[index].errors.product_name = "Product Name is required";
        }

        if (form[index].cost_price === "") {
          allPrev[index].errors.cost_price = "Cost Price is required";
        }
        setForm(allPrev);
      });
    }

    return !someEmpty;
  };

    const handleAddMore = (e)=>{
      e.preventDefault();
      const inputState = {
        product_name:"",
        opening_stock:"",
        cost_price:0,
        sale_price:0,
        new_stock_in_hand:0,
        quantity_adjusted:0,

        errors:{
            product_name:null,
            cost_price:null,
            sale_price:null,
        }
    }

      if(prevIsValid()){

          setForm(prev=>[...prev,inputState]);
      }
  }




  const handleChange = (index,event)=>{
    event.preventDefault();
    event.persist();
    if(event.target.name=="product_name"){
      dispatch(getProductDetail(event.target.value));
     if(product){
      setForm((prev)=>{
        console.log(prev);
        return prev.map((item,i)=>{
            if(i!==index){
                return item;
            }

            return {
                ...item,
                ["cost_price"]:product.cost_price,
                ["sale_price"]:product.sale_price,
                ["opening_stock"]:product.opening_stock,
               
            }
        })
    })
     }
    }
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
  console.log(index);
  setForm(prev=>prev.filter((item)=>item!==prev[index]));
}

    useEffect(()=>{
      dispatch(getProducts());
    },[])

    if(loading) return <Loader/>

    return(
        <div className="content-body">
            <h4 className="font-weight-bold">New Adjustment</h4>
            <div className="row mt-3">
                
            <form onSubmit={handleSubmit(submit)}>
                {/* {error && <ErrorMessage message={error}/>} */}
                <div className="col-md-8">
<div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Mode of Adjustment</label>
    <div className="col-sm-9">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="adjustmentMode" />
  <label class="form-check-label">
    Quantity Adjustment
  </label>
</div>
<div class="form-check mt-1">
  <input class="form-check-input" type="radio" name="adjustmentMode" />
  <label class="form-check-label" htmlFor="adjustmentMode">
    Value Adjustment
  </label>
</div>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Reference Number</label>

    <div className="col-sm-9">
    <select class="custom-select" name="reference" {...register("reference")} >
    <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>

    </select>

    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Date *</label>
    <div className="col-sm-9">
      <input type="date" className="form-control" name="date"
      {...register("date", { required: "Name is required" })}
       />
        <span className="text-danger text-center">{errors.date?.message}</span>
    </div>
  </div>


  <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Account</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="account"
      {...register("account", { required: "Account is required" })}
       />
        <span className="text-danger text-center">{errors.account?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="reason" className="col-sm-3 col-form-label text-danger">
        Reason *</label>
    <div className="col-sm-9">
    <select class="custom-select" name="reason" {...register("reason", { required: "Reason is required" })}>
    <option>Select a reason</option>
    <option value="1">Stock on fire</option>
      <option value="2">Stolen goods</option>
      <option value="3">Damaged goods</option>
      <option value="4">Stock Writen off</option>
      <option value="5">stocktaking results</option>
      <option value="6">Inventory Revaluation</option>


    </select>
        <span className="text-danger text-center">{errors.reason?.message}</span>
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
  {JSON.stringify(form)}
  <table className="table group-table">
 <thead>
 <tr className="bg-main text-white">
  <th scope="col">Item Details</th>
  <th></th>
  <th scope="col">Quantity Available</th>
  <th scope="col">New Quantity on Hand</th>
  <th scope="col">Quantity Adjusted</th>
  <th scope="col">Purchase Price</th>
  <th scope="col">Cost Price</th>
 
  </tr>
 </thead>
 <tbody>
  {form.map((item,index)=>(

<tr key={`item-${index}`}>
  <td colSpan={2}>
  <select className="custom-select" value={item.product_name} name="product_name"  onChange={(e)=>handleChange(index,e)}>
  <option >Select a product</option>
  {products && products.map(product=>(
    <option value={product.productID} key={product.productID}>{product.name}</option>
  ))}
  </select>
  </td>
  <td ><input type="text" className="form-control" value={item.opening_stock} name="opening_stock" onChange={(e)=>handleChange(index,e)}/ ></td>
  <td><input type="text" className="form-control" value={item.new_stock_in_hand} name="new_stock_in_hand" onChange={(e)=>handleChange(index,e)} /></td>
  <td><input type="text" className="form-control" value={item.quantity_adjusted} name="quantity_adjusted" onChange={(e)=>handleChange(index,e)} /></td>
  <td><input type="text" className="form-control" value={item.sale_price} name="sale_price"  onChange={(e)=>handleChange(index,e)}/></td>
  <td><input type="text" className="form-control" value={item.cost_price} name="cost_price"  onChange={(e)=>handleChange(index,e)}/></td>
  <td><i className="feather icon-trash btn btn-danger" onClick={(e)=>handleRemove(e,index)}></i></td>
  </tr>

))}

</tbody>

  

  </table>
  <input className="btn btn-outline-main" onClick={handleAddMore}  value="Add another line" type="button"/>
  <div className="d-flex mt-3">
      <button className="btn btn-main mr-1">Save as Draft</button>
      <button className="btn btn-outline-main mr-1" type="submit">Convert to Adjusted</button>
    <button className="btn btn-outline-main">Cancel</button>
    </div>

    </div>
                </form>
               
         </div>

        </div>
    )
}

export default AddInventoryAdjustment;
