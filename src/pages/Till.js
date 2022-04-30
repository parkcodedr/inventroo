import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useTitle } from 'components/hooks/useTitle';
import { useSelector, useDispatch } from 'react-redux';
import {addManufacturer,addManufacturerComplete} from '../store/actions/manufacturer';
import ImageModal from 'components/ImageModal';

const Till = ()=>{
  useTitle("Inventroo | Till Type");
  const history = useHistory();

    return(
        <div className="content-body">
            <h4 className="font-weight-bold">Select Till Format</h4>
            <div className="row">
                <div className="col-md-10">
            <form>
         <p className="font-weight-bold">TYPE A: Suitable for heavy inventory type operations. e.g grocery, store, supermarket, e.t.c</p>
         <div class="form-check">
            <input class="form-check-input" type="checkbox" value="retaurant" />
            <label class="form-check-label ml-4">
                <img src="/app-assets/images/tillA.png" alt="till A"/>
                
            </label>
  
</div>
<div className="mt-1">
<a href="#" data-toggle="modal" data-target="#retaurantTillModal">click till image for a quick Preview</a>
<ImageModal src="/app-assets/images/tillA.png" name={'retaurantTill'} link={'/till/resturant'} />
</div>

<p className="font-weight-bold mt-4">TYPE B: Suitable for picture rich inventory type operation. e.g restaurant, foodmart, bistrols,cafe, fashion store e.t.c</p>
         <div class="form-check">
            <input class="form-check-input" type="checkbox" value="glocery" />
            <label class="form-check-label ml-4">
                <img src="/app-assets/images/tillB.png" alt="till B"/>
                
            </label>
  
</div>
<div className="mt-1">
<a href="#" data-toggle="modal" data-target="#gloceryTillModal">click till image for a quick Preview</a>
</div>

                <button type="submit" className="btn btn-main mr-1 float-right">
				LOAD TILL
				</button>

                </form>
                </div>
         </div>

        </div>
    )
}

export default Till;