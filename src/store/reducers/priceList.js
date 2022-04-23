import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    priceLists:[],
    error: ""
}
export const addPriceListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRICE_LIST_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_PRICE_LIST_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_PRICE_LIST_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_PRICE_LIST_FAIL:
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


export const getPriceListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRICE_LISTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRICE_LISTS_SUCCESS:
            return {
                loading: false,
                priceLists:action.priceLists,
                error: ""
            }
        
        case actionTypes.GET_PRICE_LISTS_FAIL:
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

export const getPriceListDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_PRICE_LIST_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRICE_LIST_DETAIL_SUCCESS:
            return {
                loading: false,
                priceList:action.priceList,
                error: ""
            }
        
        case actionTypes.GET_PRICE_LIST_DETAIL_FAIL:
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

export const updatePriceListReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PRICE_LIST_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_PRICE_LIST_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_PRICE_LIST_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_PRICE_LIST_FAIL:
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

export const deletePriceListReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_PRICE_LIST_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_PRICE_LIST_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_PRICE_LIST_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_PRICE_LIST_FAIL:
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
