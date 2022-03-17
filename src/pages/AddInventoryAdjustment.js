import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
import {addInventoryAdjustment,addInventoryAdjustmentComplete} from '../store/actions/inventoryAdjustment';
import {getProducts,getProductDetail} from '../store/actions/product';
import ButtonProcessing from 'components/ButtonProcessing';

const AddInventoryAdjustment = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [adjustmentMode,setAdjustmentMode] = useState("quantity");
    const [form,setForm] = useState([
      {
        product_id:0,
        opening_stock:0,
        cost_price:0,
        sale_price:0,
        new_stock_in_hand:0,
        quantity_adjusted:0,
        current_value:0,
        changed_value:0,
        adjusted_value:0,

        errors:{
            product_name:null,
            cost_price:null,
            sale_price:null,
        }
    }
    ]);

    const { loading:addLoading,success:addSuccess,addError} = useSelector((state) => state.addInventoryAdjustment);
    const { products, error, loading} = useSelector((state) => state.products);
    const {register,formState: { errors },handleSubmit} = useForm();


    if(addSuccess){
        dispatch(addInventoryAdjustmentComplete());
        history.push('/dashboard/inventory-adjustment/all');
        notify("success","Inventory Adjusted Successfully");
      }

    const submit = (data)=>{
        console.log(data);
        const adjustedProducts = [];
        form.map(item=>{
          adjustedProducts.push({
            "current_value":item.current_value,
            "changed_value":item.changed_value,
            "adjustment_value":item.adjustment_value,
            "quantity_available":item.opening_stock,
            "quantity_on_hand":Number(item.new_stock_in_hand),
            "adjusted_quantity_value":item.quantity_adjusted,
            "purchase_price":item.sale_price,
            "cost_price":item.cost_price,

          })
        })
        const params = {};
        params.reference = data.reference;
        params.adjustment_type = adjustmentMode;
        params.account_id = data.account;
        params.description = data.description;
        params.reason = data.reason;
        params.products=adjustedProducts;
        console.log(params);
        console.log(data);
        dispatch(addInventoryAdjustment(params));
        
    }

   
    
const prevIsValid = ()=>{
  if (form.length === 0) {
      return true;
    }

    const someEmpty = form.some(
      (item) => item.product_id === "" || item.cost_price === ""
    );

    if (someEmpty) {
      form.map((item, index) => {
        const allPrev = [...form];

        if (form[index].product_id === "") {
          allPrev[index].errors.product_id = "Product Name is required";
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
        product_id:"",
        opening_stock:"",
        cost_price:0,
        sale_price:0,
        new_stock_in_hand:0,
        quantity_adjusted:0,
        current_value:0,
        changed_value:0,
        adjusted_value:0,
        adjustment_mode:"qauntity",

        errors:{
            product_id:null,
            cost_price:null,
            sale_price:null,
        }
    }

      if(prevIsValid()){
          setForm(prev=>[...prev,inputState]);
      }
  }




const updateInput = (index,product)=>{
  if(product){
  let data = [...form];
  console.log({index});
  data[index].cost_price = product.cost_price;
  data[index].opening_stock = product.opening_stock;
  data[index].sale_price=product.sale_price;
  data[index].current_value=product.sale_price;
  setForm(data);
  }

}
const handleQuantityonHande = (index,event)=>{
 
    let data = [...form];
    console.log({index});
    data[index].new_stock_in_hand =(Number(data[index].opening_stock) + Number(data[index].quantity_adjusted));
    setForm(data);
}

const handleChangeValue = (index,event)=>{
 
  let data = [...form];
  data[index].adjusted_value =Number(data[index].changed_value) - Number(data[index].current_value);
  setForm(data);
}

const handleQuantityAdjusted = (index,event)=>{
  let data = [...form];
  data[index].quantity_adjusted =(Number(data[index].new_stock_in_hand) - Number(data[index].opening_stock)); 
  setForm(data);
}

const handleValueAdjusted = (index,event)=>{
  let data = [...form];
  data[index].changed_value =(Number(data[index].current_value) + Number(data[index].adjusted_value)); 
  setForm(data);
}

  const handleChange = (index,event)=>{
    event.preventDefault();
    event.persist();
    
    if(event.target.name=="product_id"){
      const selectedProduct = products.find(record=>record.productID==event.target.value);
        updateInput(index,selectedProduct); 
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
  setForm(prev=>prev.filter((item)=>item!==prev[index]));
}

const handleAdjustmentMode = (e)=>{
  setAdjustmentMode(e.target.value);
}



    useEffect(()=>{
      dispatch(getProducts());
    },[])

   

    if(loading) return <Loader/>
    
    return(
        <div className="content-body">
            <h4 className="font-weight-bold">New Adjustment</h4>
           
            {error && <ErrorMessage message={error}/>}
            <form onSubmit={handleSubmit(submit)}>
            <div className="row mt-3">
            {addError && <ErrorMessage message={addError}/>}
                
  <div className="col-md-8">
<div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Mode of Adjustment</label>
    <div className="col-sm-9">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="adjustmentMode"
   value="quantity" checked={adjustmentMode==="quantity"} onChange={handleAdjustmentMode}
   />
  <label class="form-check-label">
    Quantity Adjustment
  </label>
</div>
<div class="form-check mt-1">
  <input class="form-check-input" value="value" type="radio" name="adjustmentMode"
  onChange={handleAdjustmentMode} checked={adjustmentMode==="value"}
   />
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
    <option value="Stock on fire">Stock on fire</option>
      <option value="Stolen goods">Stolen goods</option>
      <option value="Damaged goods">Damaged goods</option>
      <option value="Stock Writen off">Stock Writen off</option>
      <option value="Stocktaking results">Stocktaking results</option>
      <option value="Inventory Revaluation">Inventory Revaluation</option>


    </select>
        <span className="text-danger text-center">{errors.reason?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Description</label>
    <div className="col-sm-9">
      <textarea className="form-control" name="description"
       {...register("description", { required: "Description is required" })} rows={5} cols={4}
       ></textarea>
 <span className="text-danger text-center">{errors.description?.message}</span>
    </div>
  </div>
  </div>

  
  <table className="table group-table">
  <thead>
 {adjustmentMode==="quantity"?(

   <tr className="bg-main text-white">
   <th scope="col">Item Details</th>
   <th></th>
   <th scope="col">Quantity Available</th>
   <th scope="col">New Quantity on Hand</th>
   <th scope="col">Quantity Adjusted</th>
   <th scope="col">Purchase Price</th>
   <th scope="col">Cost Price</th>
   </tr>
 ):(
<tr className="bg-main text-white">
  <th>Item Details</th>
  <th></th>
  <th >Current Value</th>
  <th >Changed Value</th>
  <th >Adjusted Value</th>
 
  </tr>
 )
}
   
</thead>
<tbody>
  {form.map((item,index)=>(

    adjustmentMode==="quantity"?(
      <tr key={`item-${index}`}>
  <td colSpan={2}>
  <select className="custom-select" value={item.product_id} name="product_id"  onChange={(e)=>handleChange(index,e)}>
  <option >Select a product</option>
  {products && products.map(product=>(
    <option value={product.productID} key={product.productID}>{product.name}</option>
  ))}
  </select>
  </td>
  <td ><input type="text" className="form-control" value={item.opening_stock} name="opening_stock" onChange={(e)=>handleChange(index,e)}/ ></td>
  <td><input type="text" className="form-control" value={item.new_stock_in_hand} name="new_stock_in_hand" onChange={(e)=>handleChange(index,e)}  onBlur={(e)=>handleQuantityAdjusted(index,e)} /></td>
  <td><input type="text" className="form-control" value={item.quantity_adjusted} name="quantity_adjusted" onChange={(e)=>handleChange(index,e)} onBlur={(e)=>handleQuantityonHande(index,e)} /></td>
  <td><input type="text" className="form-control" value={item.sale_price} name="sale_price"  onChange={(e)=>handleChange(index,e)}/></td>
  <td><input type="text" className="form-control" value={item.cost_price} name="cost_price"  onChange={(e)=>handleChange(index,e)}/></td>
  <td><i className="feather icon-trash btn btn-danger" onClick={(e)=>handleRemove(e,index)}></i></td>
  
  </tr>

    ):(
      <tr key={`item-${index}`}>
  <td colSpan={2}>
  <select className="custom-select" value={item.product_id} name="product_id"  onChange={(e)=>handleChange(index,e)}>
  <option >Select a product</option>
  {products && products.map(product=>(
    <option value={product.productID} key={product.productID}>{product.name}</option>
  ))}
  </select>
  </td>

  <td><input type="text" className="form-control" value={item.current_value} name="current_value" onChange={(e)=>handleChange(index,e)} /></td>
  <td><input type="text" className="form-control" value={item.changed_value} name="changed_value" onChange={(e)=>handleChange(index,e)} onBlur={(e)=>handleChangeValue(index,e)} /></td>
  <td><input type="text" className="form-control" value={item.adjusted_value} name="adjusted_value"  onChange={(e)=>handleChange(index,e)} onBlur={(e)=>handleValueAdjusted(index,e)}  /></td>
  <td><i className="feather icon-trash btn btn-danger" onClick={(e)=>handleRemove(e,index)}></i></td>
  </tr>
    )



))}

</tbody>

</table>
  
    

</div>
<input className="btn btn-outline-main" onClick={handleAddMore}  value="Add another line" type="button"/>
  <div className="d-flex mt-3">
      <button className="btn btn-main mr-1">Save as Draft</button>
      {addLoading? (
        <ButtonProcessing message ="Convert to Adjusted"/>
      ):(
        <button className="btn btn-outline-main mr-1" type="submit">Convert to Adjusted</button>
      )}
    <button className="btn btn-outline-main">Cancel</button>
    </div>
                </form>
               
         

        </div>
    )
}

export default AddInventoryAdjustment;
