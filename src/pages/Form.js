import React,{useState} from 'react';
import TagsInput from 'pages/TagsInput';

const Form = ()=>{
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
    const [product,setProduct] = useState([]);
   

    const selectedTags = tags => {
      console.log(tags);
    };


    const prevProductIsValid = ()=>{
        if (product.length === 0) {
            return true;
          }
    
          const someEmpty = product.some(
            (item) => item.name === "" || item.costPrice === "" || item.salePrice===""
          );
    
          if (someEmpty) {
            product.map((item, index) => {
              const allPrev = [...product];
      
              if (product[index].name === "") {
                allPrev[index].errors.name = "Product Name is required";
              }
      
              if (product[index].salePrice === "") {
                allPrev[index].errors.salePrice = "Sale Price is required";
              }
              if (product[index].costPrice === "") {
                allPrev[index].errors.costPrice = "Cost Price is required";
              }
              setForm(allPrev);
            });
          }
      
          return !someEmpty;
        };

    const handleAddProduct = (e)=>{
        e.preventDefault();
        const productState = {
            productName:"",
            sku:"",
            costPrice:0,
            salePrice:0,
            upc:"",
            ean:"",
            isbn:"",
            reOrderPoin:"",

            errors:{
                productName:null,
                costPrice:null,
                salePrice:null,
            }
        }
            setProduct(prev=>[...prev,productState]);
       

    }



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

return(
    <div className="form">
        {JSON.stringify(form)}
        <div>
        {JSON.stringify(product)}
        </div>
        <form>

    {form.map((item,index)=>(
    <div className="form-row" key={`item-${index}`}>
        <div className="col-md-4 offset-md-1">
      <label>Attributes</label>
      <input type="text" className={item.errors.name?"form-control is-invalid":"form-control"} name="name" 
      value={item.name}
      onChange={(e)=>handleChange(index,e)}
       />
       <span className="invalid-feedback">
           {item.errors?.name}
       </span>
    </div>
    <div className="col-md-4 offset-md-1 ">
      <label >Options</label>

      <TagsInput selectedTags={selectedTags}
      onChange={(e)=>handleChange(index,e)}
      name="options" 
        tags={[]}/>

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
    <div className="col-md-2 mt-3">
    <i className="feather icon-trash" onClick={(e)=>handleRemove(e,index)}></i>
    </div>
        </div>
))}
            <button onClick={handleAddMore} className="btn btn-main" >Add More</button>
            <button onClick={handleAddProduct} className="btn btn-main" >More Product</button>
        </form>



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
        <textarea className="form-control" name="productName" rows={1}
        onChange={(e)=>handleProductChange(index,e)} 
        >{`${form[0].name}/${form[0].options}`}</textarea>
      </td>
      <td ><input type="text" className="form-control" name="sku" onChange={(e)=>handleProductChange(index,e)} /></td>
      <td ><input type="text" className="form-control"/></td>
      <td><input type="text" className="form-control" /></td>
      <td><input type="text" className="form-control" /></td>
      <td><input type="text" className="form-control" /></td>
      <td><input type="text" className="form-control" /></td>
      <td><input type="text" className="form-control" /></td>
    </tr>

  )}
  
  </tbody>
  </table>
    </div>
)
}
export default  Form;