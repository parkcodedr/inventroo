import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    payments:[],
    error: ""
}
export const addCashPaymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CASH_PAYMENT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_CASH_PAYMENT_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_CASH_PAYMENT_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_CASH_PAYMENT_FAIL:
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


export const getCashPaymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CASH_PAYMENT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_CASH_PAYMENT_SUCCESS:
            return {
                loading: false,
                payments:action.payments,
                error: ""
            }
        
        case actionTypes.GET_CASH_PAYMENT_FAIL:
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

export const getCashPaymentDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_CASH_PAYMENT_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_CASH_PAYMENT_DETAIL_SUCCESS:
            return {
                loading: false,
                payment:action.payment,
                error: ""
            }
        
        case actionTypes.GET_CASH_PAYMENT_DETAIL_FAIL:
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

export const updateCashPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CASH_PAYMENT_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_CASH_PAYMENT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_CASH_PAYMENT_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_CASH_PAYMENT_FAIL:
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

export const deleteCashPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_CASH_PAYMENT_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_CASH_PAYMENT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_CASH_PAYMENT_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_CASH_PAYMENT_FAIL:
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
