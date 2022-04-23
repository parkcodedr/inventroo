import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    customers:[],
    error: ""
}
export const addCustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CUSTOMER_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_CUSTOMER_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_CUSTOMER_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_CUSTOMER_FAIL:
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


export const getCustomersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CUSTOMERS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                loading: false,
                customers:action.customers,
                error: ""
            }
        
        case actionTypes.GET_CUSTOMERS_FAIL:
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

export const getCustomerDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_CUSTOMER_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_CUSTOMER_DETAIL_SUCCESS:
            return {
                loading: false,
                customer:action.customer,
                error: ""
            }
        
        case actionTypes.GET_CUSTOMER_DETAIL_FAIL:
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

export const updateCustomerReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CUSTOMER_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_CUSTOMER_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_CUSTOMER_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_CUSTOMER_FAIL:
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

export const deleteCustomerReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_CUSTOMER_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_CUSTOMER_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_CUSTOMER_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_CUSTOMER_FAIL:
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
