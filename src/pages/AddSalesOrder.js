import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from 'components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from 'components/Toast';
import { useTitle } from 'components/hooks/useTitle';
import LoadingButton from '../components/LoadingButton';
import { useSelector, useDispatch } from 'react-redux';
import {addPriceList,addPriceListComplete} from '../store/actions/priceList';

const AddSalesOrder = ()=>{
  useTitle("Inventroo | New Sales Order");
    const dispatch = useDispatch();
    const history = useHistory();

    const { success, error, loading} = useSelector((state) => state.addPriceList);
    const {register,formState: { errors },handleSubmit} = useForm();
    const { token} = useSelector((state) => state.auth);
    const [product,setProduct] = useState([
        {
            product_id:"",
            quantity:"",
            rate:0,
            discount:0,
            tax:0,
            amount:0,
        }
    ])

    if(success){
        dispatch(addPriceListComplete());
        history.push('/dashboard/sales-order/all');
        notify("success","Sales Order Added Successfully");
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

      const handleRemove = (e,index)=>{
        e.preventDefault();
        setProduct(prev=>prev.filter((item)=>item!==prev[index]));
      }

      const handleAddMore = (e)=>{
        e.preventDefault();
        const inputState = {
            product_id:"",
            quantity:"",
            rate:0,
            discount:0,
            tax:0,
            amount:0,
      }
  
            setProduct(prev=>[...prev,inputState]);
    }

    const submit = (data)=>{
        console.log(data);
        dispatch(addPriceList(data));
    }

    return(
        <div className="content-body">
            <h4 className="font-weight-bold">New Sales Order</h4>
            <div className="row mt-3">
              
            <form onSubmit={handleSubmit(submit)}>
            <div className="col-md-10">
                {error && <ErrorMessage message={error}/>}


    <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
       Customer's Name</label>
    <div className="col-sm-9">
    <div className="input-group">
  <select className="custom-select" {...register("customer_name", { required: "Customer's Name is required" })}>
    <option selected>Select Customer</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div className="input-group-append">
  <label className="input-group-text bg-main text-white" >
  <i className="feather icon-search"></i>
  </label>
    
  </div>
</div>
   
        <span className="text-danger text-center">{errors.customer_name?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Sales Order</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name="sales_order"
      {...register("sales_order", { required: "Sales Order is required" })}
       />
        <span className="text-danger text-center">{errors.sales_order?.message}</span>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-3 col-form-label">
        Reference</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name="reference"
      {...register("reference")}
       />
        <span className="text-danger text-center">{errors.reference?.message}</span>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-3 col-form-label text-danger">
        Sales Order Date</label>
    <div className="col-sm-5">
      <input type="date" className="form-control" name="sales_order_date"
      {...register("sales_order_date", { required: "Sales Order Date is required" })}
       />
        <span className="text-danger text-center">{errors.sales_order_date?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Expected Shipment Date </label>
    <div className="col-sm-4">
    <input type="date" className="form-control" name="shipment_date"
      {...register("shipment_date")}
       />
       
    </div>
    <label className="col-sm-1 col-form-label">
        Payment Term</label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="payment_term"
      {...register("payment_term")}
       />
       
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Delivery Method </label>
    <div className="col-sm-4">
    <select className="custom-select" name="delivery_method" {...register("delivery_method")}>
       <option>Select Delivery Method</option>
       <option value="1">1</option>
       <option value="2">2</option>
     </select>
    </div>
    </div>

    <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Sales Person </label>
    <div className="col-sm-4">
    <select className="custom-select" name="sales_person" {...register("sales_person")}>
       <option selected>Select Sales Person</option>
       <option value="1">1</option>
       <option value="2">2</option>
     </select>
    </div>
    </div>
    </div>
    <table className="table table-responsive group-table mt-5">
  <thead>
    <tr className="bg-main text-white">
      <th scope="col">Item Detail</th>
      <th scope="col">Quantity</th>
      <th scope="col">Rate</th>
      <th scope="col">Discount</th>
      <th scope="col">Tax</th>
      <th scope="col">Ampunt</th>
    </tr>

  </thead>

  <tbody>
  {product.map((item,index)=>
    <tr key={`${item}-${index}`}>
      <td>
        <select className="custom-select" name="product_id" rows={1}
        onChange={(e)=>handleProductChange(index,e)} 
        value={item.product_id}>
            <option>Select Item</option>
            <option>1</option>
        </select>
      </td>
      <td ><input type="text" className="form-control" name="quantity" onChange={(e)=>handleProductChange(index,e)} /></td>
      <td ><input type="text" className="form-control" name="rate" onChange={(e)=>handleProductChange(index,e)} /></td>
      <td><input type="text" className="form-control" name="discount"  onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td><input type="text" className="form-control" name="tax" onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td><input type="text" className="form-control" name="amount" onChange={(e)=>handleProductChange(index,e)}  /></td>
      <td><i className="feather icon-trash btn btn-danger" onClick={(e)=>handleRemove(e,index)}></i></td>
    </tr>

  )}
  </tbody>
  </table>
  
  <button className="btn btn-outline-main dotted" onClick={handleAddMore}>
  <span className="feather icon-plus color-main"></span> Add another line
  </button>
  <section className="row">
      <div className="col-md-5  align-self-end">
      <label >Customer Notes </label>
    <textarea class="form-control"  cols="5" id="exampleFormControlTextarea1" rows="3"></textarea>
      <p>Will be displayed on the invoice</p>
      </div>
      <div className="col-md-7 mt-2 bg-light-50 p-2">
          <div className="d-flex justify-content-between sub-total-container pr-1">
              <h5 className="sub-total">Subtotal</h5>
              <h5>786,574,086</h5>
          </div>
          <div className="d-flex justify-content-between shipping-charges pr-1">
            <p className="col-md-4">Shipping Charges <br/><a href="#">Apply Tax on Shipping Charges</a></p>
            <input type="text" className="form-control col-md-4" name="shipping_charge"/>
            <p >0.00</p>
          </div>

          <div className="d-flex justify-content-between adjustment pr-1">
            <p className="col-md-4">Adjustment</p>
            <input type="text" className="form-control col-md-4" name="adjustment"/>
            <p >0.00</p>
          </div>
          <div className="d-flex justify-content-between total  pr-1 mt-2">
            <h4 className="font-weight-bold">Total</h4>
            <h4 className="font-weight-bold">890,985,483</h4>
          </div>
      </div>
  </section>
 
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
    )
}

export default AddSalesOrder;
