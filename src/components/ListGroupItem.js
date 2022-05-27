const { Link } = require("react-router-dom")

const ListGroupItem = ({link,title,onclick})=>{
    return(
        <>
        <Link to={link} className="list-group-item list-group-item-action bg-main text-white list-menu-item" onClick={onclick}>{title}</Link>
        </>
    )
}
export default ListGroupItem;