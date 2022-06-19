
import {combineReducers } from "redux";
import authReducer from "./auth";
import registerReducer from './register';
import {updateOrganizationReducer,inviteUserReducer,
    addRoleReducer,getRoleAndModulesReducer
} from './organizationProfile';
import getModules from './modules';
import {getUsersReducer} from './users';
import {addManufacturerReducer,getManufacturersReducer,
    getManufacturerDetailReducer,updateManufacturerReducer,
    deleteManufacturerReducer
} from './manufacturer';
import { addBrandsReducer, deleteBrandReducer, getBrandDetailReducer, getBrandsReducer, updateBrandReducer } from "./brands";
import { addUnitsReducer, deleteUnitReducer, getUnitsReducer, updateUnitReducer,getUnitDetailReducer } from "./unit";
import { addTaxReducer, deleteTaxReducer, getTaxDetailReducer, getTaxesReducer, updateTaxReducer } from "./tax";
import { addProductReducer, deleteProductReducer, getProductDetailReducer, getProductsReducer, updateProductReducer } from "./product";
import {addProductGroupReducer,getProductGroupsReducer,updateProductGroupReducer,deleteProductGroupReducer,getProductGroupDetailReducer} from './productGroup';
import { addPriceListReducer,getPriceListsReducer, getPriceListDetailReducer,updatePriceListReducer,deletePriceListReducer } from "./priceList";
import { addInventoryAdjustmentReducer,getInventoryAdjustmentsReducer,getInventoryAdjustmentDetailReducer,updateInventoryAdjustmentReducer,deleteInventoryAdjustmentReducer } from "./inventoryAdjustment";
import {addCustomerReducer,getCustomersReducer,getCustomerDetailReducer,updateCustomerReducer,deleteCustomerReducer} from './customers';
import {addProductCategoryReducer,getProductCategoriesReducer,getProductCategoryDetailReducer,updateProductCategoryReducer,deleteProductCategoryReducer} from './productCategory';
import { addSalesOrderReducer, deleteSalesOrderReducer, getSalesOrderDetailReducer, getSalesOrderReducer, updateSalesOrderReducer } from "./salesOrder";
import { addCashPaymentReducer, deleteCashPaymentReducer, getCashPaymentDetailReducer, getCashPaymentReducer, updateCashPaymentReducer } from "./payment";

const rootReducer = combineReducers({
    auth: authReducer,
    register:registerReducer,
    updateorganization:updateOrganizationReducer,
    inviteUser:inviteUserReducer,
    addUserRole:addRoleReducer,
    RolesAndModules:getRoleAndModulesReducer,
    modules:getModules,
    users:getUsersReducer,
    addManufacturer:addManufacturerReducer,
    manufacturers:getManufacturersReducer,
    brands:getBrandsReducer,
    addBrands:addBrandsReducer,
    addUnit:addUnitsReducer,
    units:getUnitsReducer,
    manufacturerDetail:getManufacturerDetailReducer,
    updateManufacturer:updateManufacturerReducer,
    deleteManufacturer:deleteManufacturerReducer,
    brandDetail:getBrandDetailReducer,
    updateBrand:updateBrandReducer,
    deleteBrand:deleteBrandReducer,
    unitDetail:getUnitDetailReducer,
    updateUnit:updateUnitReducer,
    deleteUnit:deleteUnitReducer,
    taxes:getTaxesReducer,
    addTax:addTaxReducer,
    updateTax:updateTaxReducer,
    deleteTax:deleteTaxReducer,
    taxDetail:getTaxDetailReducer,
    addProduct:addProductReducer,
    products:getProductsReducer,
    updateProduct:updateProductReducer,
    deleteProduct:deleteProductReducer,
    productDetail:getProductDetailReducer,
    addProductGroup:addProductGroupReducer,
    productGroups:getProductGroupsReducer,
    updateProductGroup:updateProductGroupReducer,
    deleteProductGroup:deleteProductGroupReducer,
    productGroupDetail:getProductGroupDetailReducer,
    addPriceList:addPriceListReducer,
    priceLists:getPriceListsReducer,
    priceListDetail:getPriceListDetailReducer,
    updatePriceList:updatePriceListReducer,
    deletePriceList:deletePriceListReducer,
    addInventoryAdjustment:addInventoryAdjustmentReducer,
    inventoryAdjustment:getInventoryAdjustmentsReducer,
    inventoryAdjustmentDetail:getInventoryAdjustmentDetailReducer,
    updateInventoryAdjustment:updateInventoryAdjustmentReducer,
    deleteInventoryAdjustment:deleteInventoryAdjustmentReducer,
    addProductCategory:addProductCategoryReducer,
    productCategories:getProductCategoriesReducer,
    productCategoryDetail:getProductCategoryDetailReducer,
    updateProductCategory:updateProductCategoryReducer,
    deleteProductCategory:deleteProductCategoryReducer,
    addCustomer:addCustomerReducer,
    customers:getCustomersReducer,
    customerDetail:getCustomerDetailReducer,
    updateCustomer:updateCustomerReducer,
    deleteCustomer:deleteCustomerReducer,
    addSalesOrder:addSalesOrderReducer,
    salesOrder:getSalesOrderReducer,
    salesOrderDetail:getSalesOrderDetailReducer,
    updateSalesOrder:updateSalesOrderReducer,
    deleteSalesOrder:deleteSalesOrderReducer,
    addPayment:addCashPaymentReducer,
    payments:getCashPaymentReducer,
    paymentDetail:getCashPaymentDetailReducer,
    updatePayment:updateCashPaymentReducer,
    deletePayment:deleteCashPaymentReducer
});

export default rootReducer;