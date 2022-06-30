
import {Warehouse,
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
  EditManufacturer,
  EditBrand,
  EditUnit,
  TaxList,
  EditTax,
  EditProduct,
  PriceList,
  AddPriceList,
  AddInventoryAdjustment,
  Form,
  Tag,
  EditPriceList,
  Dashboard,
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
Till,
AddCreditNote,
CreditNoteList,
PaymentList
} from '../../pages';



export const routes = [
    {
        path: "/dashboard",
        exact: true,
        main: () =><Dashboard/>
      },
    {
      path: "/dashboard/organization-profile",
      exact: true,
      main: () =><OrganizationProfile/>
    },
    {
      path: "/dashboard/user-roles",
      exact: true,
      main: () => <UserRoles/>

    },
    {
      path: "/dashboard/user-roles/new",
      exact: true,
      main: () => <AddUserRole/>

    },
    {
      path: "/warehouse",
      exact: true,
      main: () => <Warehouse/>
    },
    {
      path: "/dashboard/product-group",
      exact: true,
      main: () => <ProductGroup/>
    }
    ,
    {
      path: "/dashboard/product-group/all",
      exact: true,
      main: () => <ProductGroupList/>
    }
    ,
    {
      path: "/dashboard/product-group/new",
      exact: true,
      main: () => <AddProductGroup/>
    },
    ,
    {
      path: "/dashboard/product-group/:productGroupId/edit",
      exact: true,
      main: () => <EditProductGroup/>
    },
    {
      path: "/dashboard/product/all",
      exact: true,
      main: () => <ProductList/>
    },
    {
      path: "/dashboard/product/new",
      exact: true,
      main: () => <AddProduct/>
    },
    {
      path: "/dashboard/inventory-adjustment",
      exact: true,
      main: () => <InventoryAdjustmentList/>
    }
    ,
    {
      path: "/dashboard/manufacturer/new",
      exact: true,
      main: () => <AddManufacturer/>
    }
    ,
    {
      path: "/dashboard/unit/all",
      exact: true,
      main: () => <UnitList/>
    }
    ,

    {
      path: "/dashboard/brand/all",
      exact: true,
      main: () => <BrandList/>
    }
    ,
    {
      path: "/dashboard/manufacturer/all",
      exact: true,
      main: () => <ManufacturerList/>
    }
    ,
    {
      path: "/dashboard/manufacturer/:manufacturerId/edit",
      exact: true,
      main: () => <EditManufacturer/>
    },
    {
      path: "/dashboard/brand/:brandId/edit",
      exact: true,
      main: () => <EditBrand/>
    },
    {
      path: "/dashboard/unit/:unitId/edit",
      exact: true,
      main: () => <EditUnit/>
    }
    ,
    {
      path: "/dashboard/tax/all",
      exact: true,
      main: () => <TaxList/>
    }
    ,
    {
      path: "/dashboard/tax/:taxId/edit",
      exact: true,
      main: () => <EditTax/>
    },
    {
      path: "/dashboard/product/:productId/edit",
      exact: true,
      main: () => <EditProduct/>
    },
    ,
    {
      path: "/dashboard/price-list/all",
      exact: true,
      main: () => <PriceList/>
    },
    ,
    {
      path: "/dashboard/price-list/new",
      exact: true,
      main: () => <AddPriceList/>
    },
    {
      path: "/dashboard/price-list/:priceListId/edit",
      exact: true,
      main: () => <EditPriceList/>
    },
    ,
    {
      path: "/dashboard/inventory-adjustment/new",
      exact: true,
      main: () => <AddInventoryAdjustment/>
    },
    {
      path: "/dashboard/inventory-adjustment/:inventoryAdjustmentId/edit",
      exact: true,
      main: () => <EditInventoryAdjustment/>
    },
    {
      path: "/dashboard/tags",
      exact: true,
      main: () => <Tag/>
    },
    {
      path: "/dashboard/packages",
      exact: true,
      main: () => <Form/>
    },
    {
      path: "/dashboard/product-category/new",
      exact: true,
      main: () => <AddProductCategory/>
    },
    {
      path: "/dashboard/product-category/all",
      exact: true,
      main: () => <ProductCategoryList/>
    },
    {
      path: "/dashboard/product-category/:productCategoryId/edit",
      exact: true,
      main: () => <EditProductCategory/>
    },
   
    {
      path: "/dashboard/customer/new",
      exact: true,
      main: () => <AddCustomer/>
    },
    {
      path: "/dashboard/customer/all",
      exact: true,
      main: () => <CustomerList/>
    },
    ,
    {
      path: "/dashboard/customer/:customerId/edit",
      exact: true,
      main: () => <EditCustomer/>
    },
    {
      path: "/dashboard/sales-order/all",
      exact: true,
      main: () => <SalesOrderList/>
    },
    {
      path: "/dashboard/sales-order/new",
      exact: true,
      main: () => <AddSalesOrder/>
    },
    {
      path: "/dashboard/sales-order/:salesOrderId/edit",
      exact: true,
      main: () => <EditSalesOrder/>
    },
    {
      path: "/dashboard/till/preview",
      exact: true,
      main: () => <Till/>
    },
    {
      path: "/dashboard/return/credit-note/all",
      exact: true,
      main: () => <CreditNoteList/>
    },
    {
      path: "/dashboard/return/credit-note/new",
      exact: true,
      main: () => <AddCreditNote/>
    },
    {
      path: "/dashboard/payment/all",
      exact: true,
      main: () => <PaymentList/>
    },

  ];
