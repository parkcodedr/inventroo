import {Link} from 'react-router-dom';


const ScreenCard = ({cardDetail})=>{
    return (
    <div class="card">
  <img src={`app-assets/images/backgrounds/${cardDetail.image}`} class="card-img-top" alt={cardDetail.title}/>
  <div class="card-body" style={{background:"aliceblue"}}>
    <h5 class="card-title color-main">{cardDetail.title}</h5>
    <p class="card-text">
        <ul>
            {cardDetail.items.map(item=>(
                <li key={cardDetail.title}>
                {item}
                </li>
            ))}
        </ul>
    </p>
    <Link to={"/shop"} class="btn btn-main text-center">Shop Now</Link>
  </div>
</div>
    )
}

export default ScreenCard;