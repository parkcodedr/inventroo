import React from 'react';
import AddUserRole from "./AddUserRole";
import Warehouse from "./Warehouse";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import InventoryAdjustmentList from "./IventoryAdjustmentList";
import AddManufacturer from "./AddManufacturer";
import UnitList from "./UnitList";
import BrandList from "./BrandList";
import ManufacturerList from "./ManufacturerList";
import OrganizationProfile from "./OrganizationProfile";
import UserRoles from "./UserRoles";
import ProductGroup from "./ProductGroup";
import ProductGroupList from "./ProductGroupList";
import AddProductGroup from "./AddProductGroup";
import { Register } from './Register';
import Dashboard from './Dashboard';
import Home from './Home';
import Confirm from './Confirm';
import AdminDashboard from './AdminDashboard';
import PageNotFound from './PageNotFound';
import EmailConfirmation from './EmailConfirmation';
import EditManufacturer from "./EditManufacturer";
import EditBrand from "./EditBrand";
import EditUnit from './EditUnit';
import TaxList from './TaxList';
import EditTax from './EditTax';
import EditProduct from './EditProduct';
import PriceList from './PriceList';
import AddPriceList from './AddPriceList';
import AddInventoryAdjustment from './AddInventoryAdjustment';
import EditPriceList from './EditPriceList';
import Form from './Form';
import Tag from './Tag';
import EditInventoryAdjustment from './EditInventoryAdjustment';
import EditProductGroup from './EditProductGroup';
import AddProductCategory from './AddProductCategory';
import ProductCategoryList from './ProductCategoryList';
import CustomerList from './CustomerList';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddSalesOrder from './AddSalesOrder';
import SalesOrderList from './SalesOrderList';
import EditProductCategory from './EditProductCategory';


const Login = React.lazy(() => import("./Login"));


export{
    Warehouse,
ProductList,
AddProduct,
InventoryAdjustmentList,
AddManufacturer,
UnitList,
BrandList,
ManufacturerList,
OrganizationProfile,
UserRoles,
ProductGroup,
AddProductGroup,
AddUserRole,
Register,
Dashboard,
Home,
Confirm,
AdminDashboard,
Login,
PageNotFound,
EmailConfirmation,
EditManufacturer,
EditBrand,
EditUnit,
TaxList,
EditTax,
EditProduct,
PriceList,
AddPriceList,
AddInventoryAdjustment,
EditPriceList,
Form,
Tag,
EditInventoryAdjustment,
ProductGroupList,
EditProductGroup,
AddProductCategory,
ProductCategoryList,
CustomerList,
AddCustomer,
EditCustomer,
AddSalesOrder,
SalesOrderList,
EditProductCategory
}