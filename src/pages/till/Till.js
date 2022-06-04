
import { useHistory} from 'react-router-dom';
import { useTitle } from 'components/hooks/useTitle';
import ImageModal from 'components/ImageModal';
import {useState} from 'react';

const Till = ()=>{
  useTitle("Inventroo | Till Type");
  const history = useHistory();
  const [selectedTill,setSelectedTill] = useState("");

  const loadTill = (link)=>{
      history.push(link)
  }

    return(
        <div className="content-body" >
            <h4 className="font-weight-bold">Select Till Format</h4>
            <div className="row m-1">
                <div className="col-md-12">
            <form onSubmit={()=>loadTill(`/till/${selectedTill}`)}>
            <p className="font-weight-bold">TYPE A: Suitable for heavy inventory type operations. e.g grocery, store, supermarket, e.t.c</p>
            <div className="form-group row">
            <label  className="col-sm-1 col-form-label">
            <input className="form-check-input" type="radio" value="restaurant"  name="till-type" onChange={(e)=>setSelectedTill(e.target.value)} />
            </label>
    <div className="col-sm-8">
    <img src="/app-assets/images/tillB.png" className="image-responsive till-image" alt="till A" data-toggle="modal" data-target="#retaurantTillModal" />
    </div>
  </div>
  <div className="mt-1">
<i>click till image for a quick Preview</i>
<ImageModal src="/app-assets/images/tillB.png" name={'retaurantTill'} link={'/till/restaurant'} alt="tillA" />
</div>
<p className="font-weight-bold mt-4">TYPE B: Suitable for picture rich inventory type operation. e.g restaurant, foodmart, bistrols,cafe, fashion store e.t.c</p>
  <div className="form-group row">
            <label  className="col-sm-1 col-form-label">
            <input className="form-check-input" type="radio" value="glocery" name="till-type"
            onChange={(e)=>setSelectedTill(e.target.value)}
            />
            </label>
    <div className="col-sm-8">
    <img src="/app-assets/images/tillA.png" className="image-responsive till-image" alt="till B" data-toggle="modal" data-target="#gloceryTillModal" />
    </div>
  </div>
  <div className="mt-1">
<i  data-toggle="modal" data-target="#gloceryTillModal">click till image for a quick Preview</i>
<ImageModal src="/app-assets/images/tillA.png" name={'gloceryTill'} link={'/till/glocery'} alt="tillB" />
</div>


                <button type="submit" className="btn btn-main mr-1 float-right" >
				LOAD TILL
				</button>

                </form>
                </div>
         </div>

        </div>
    )
}

export default Till;