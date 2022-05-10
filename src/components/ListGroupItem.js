const { Link } = require("react-router-dom")

const ListGroupItem = ({link,title})=>{
    return(
        <>
        <Link to={link} className="list-group-item list-group-item-action bg-main text-white list-menu-item">{title}</Link>
        </>
    )
}
export default ListGroupItem;