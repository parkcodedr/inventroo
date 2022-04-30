import { usePageSetup } from "components/hooks/usePageSetup";
import {tillMenu} from 'components/utils'

const TillA = ()=>{
    usePageSetup();
return(
    <div className="">
      <div className="content-wrapper bg-main text-white">
        <section className="d-flex justify-content-between pt-1">
        
            <div className="nav-menu">
                
                    <ul class="nav">
                    <li class="nav-item">
                            <a class="nav-link active" href="#">
                            <img src="/app-assets/images/logo/troo-logo-white.png"
                  alt="branding logo" className="logo-image"/>
                            </a>
                        </li>
                        <li class="nav-item pl-3">
                            <a class="nav-link active text-white" href="#">Till</a>
                        </li>
                        <li class="nav-item pl-3">
                            <a class="nav-link text-white" href="#">KDS</a>
                        </li>
                    </ul>

            </div>
      
        <nav>
        <ul class="nav">
  
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Logout</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#"><i className="feather icon-settings"></i> Settings</a>
  </li>
</ul>
        </nav>
        </section>

        <div className="d-flex">
        <div className="col-md-8">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tillMenu.map((item,index)=>(
            <li class="nav-item" role="presentation" key={`${index}-${item}`}>
            <a class={index===0?`nav-link text-white active`:`nav-link text-white`} id={`pills-${item}-tab`} data-toggle="pill" href={`#pills-${item}`} role="tab" aria-controls={`pills-${item}`} aria-selected={index===0?`true`:``}>{item}</a>
        </li>
        ))}
  
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-Rice" role="tabpanel" aria-labelledby="pills-Rice-tab">Rice</div>
  <div class="tab-pane fade" id="pills-Pasta" role="tabpanel" aria-labelledby="pills-Pasta-tab">Pasta</div>
  <div class="tab-pane fade" id="pills-Swallow" role="tabpanel" aria-labelledby="pills-Swallow-tab">Swallow</div>
</div>

        </div>

        <section className="col-md-3">
            <h1>Eat in</h1>

        </section>
        </div>
      </div>
      </div>
)
}

export default TillA;