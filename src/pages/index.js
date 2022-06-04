import React from 'react';
import AddUserRole from "./profile/AddUserRole";
import Warehouse from "./Warehouse";
import ProductList from "./product/ProductList";
import AddProduct from "./product/AddProduct";
import InventoryAdjustmentList from "./inventoryAdjustment/IventoryAdjustmentList";
import AddManufacturer from "./manufacturer/AddManufacturer";
import UnitList from "./unit/UnitList";
import BrandList from "./brand/BrandList";
import ManufacturerList from "./manufacturer/ManufacturerList";
import OrganizationProfile from "./profile/OrganizationProfile";
import UserRoles from "./profile/UserRoles";
import ProductGroup from "./productGroup/ProductGroup";
import ProductGroupList from "./productGroup/ProductGroupList";
import AddProductGroup from "./productGroup/AddProductGroup";
import { Register } from './auth/Register';
import Dashboard from './Dashboard';
import Home from './home/Home';
import Confirm from './auth/Confirm';
import AdminDashboard from './AdminDashboard';
import PageNotFound from './PageNotFound';
import EmailConfirmation from './auth/EmailConfirmation';
import EditManufacturer from "./manufacturer/EditManufacturer";
import EditBrand from "./brand/EditBrand";
import EditUnit from './unit/EditUnit';
import TaxList from './tax/TaxList';
import EditTax from './tax/EditTax';
import EditProduct from './product/EditProduct';
import PriceList from './priceList/PriceList';
import AddPriceList from './priceList/AddPriceList';
import AddInventoryAdjustment from './inventoryAdjustment/AddInventoryAdjustment';
import EditPriceList from './priceList/EditPriceList';
import Form from './Form';
import Tag from './Tag';
import EditInventoryAdjustment from './inventoryAdjustment/EditInventoryAdjustment';
import EditProductGroup from './productGroup/EditProductGroup';
import AddProductCategory from './productCategory/AddProductCategory';
import ProductCategoryList from './productCategory/ProductCategoryList';
import CustomerList from './customer/CustomerList';
import AddCustomer from './customer/AddCustomer';
import EditCustomer from './customer/EditCustomer';
import AddSalesOrder from './salesOrder/AddSalesOrder';
import SalesOrderList from './salesOrder/SalesOrderList';
import EditSalesOrder from './salesOrder/EditSalesOrder';
import EditProductCategory from './productCategory/EditProductCategory';
import Till from './till/Till';


const Login = React.lazy(() => import("./auth/Login"));



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
EditSalesOrder,
EditProductCategory,
Till
}