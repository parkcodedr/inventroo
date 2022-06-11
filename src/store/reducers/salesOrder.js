import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: true,
    success: false,
    salesOrders:[],
    error: ""
}
export const addSalesOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_SALES_ORDER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_SALES_ORDER_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_SALES_ORDER_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_SALES_ORDER_FAIL:
            return {
                loading: false,
                success: false,
                error: action.error
            }
        default:
            return {
                state
            }
    }
}


export const getSalesOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SALES_ORDER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_SALES_ORDER_SUCCESS:
            return {
                loading: false,
                salesOrders:action.salesOrders,
                error: ""
            }
        
        case actionTypes.GET_SALES_ORDER_FAIL:
            return {
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export const getSalesOrderDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_SALES_ORDER_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_SALES_ORDER_DETAIL_SUCCESS:
            return {
                loading: false,
                salesOrder:action.salesOrder,
                
                error: ""
            }
        
        case actionTypes.GET_SALES_ORDER_DETAIL_FAIL:
            return {
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export const updateSalesOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SALES_ORDER_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_SALES_ORDER_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_SALES_ORDER_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_SALES_ORDER_FAIL:
            return {
                loading: false,
                error: action.error
            }
        
        default:
            return {
                state
            }
    }
}

export const deleteSalesOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_SALES_ORDER_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_SALES_ORDER_SUCCESS:
            return {
                loading: false,
                success:true,
                message:action.message,
                error: ""
            }
        case actionTypes.DELETE_SALES_ORDER_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_SALES_ORDER_FAIL:
            return {
                loading: false,
                error: action.error
            }
        
        default:
            return {
                state
            }
    }
}
