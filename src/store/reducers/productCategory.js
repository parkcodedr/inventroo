import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    priceLists:[],
    error: ""
}
export const addPriceListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_CATEGORY_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_PRODUCT_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_PRODUCT_CATEGORY_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_PRODUCT_CATEGORY_FAIL:
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
        case actionTypes.GET_PRODUCT_CATEGORIES_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
            return {
                loading: false,
                productCategories:action.productCategories,
                error: ""
            }
        
        case actionTypes.GET_PRODUCT_CATEGORIES_FAIL:
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
        case actionTypes.GET_PRODUCT_CATEGORY_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PRODUCT_CATEGORY_DETAIL_SUCCESS:
            return {
                loading: false,
                productCategory:action.productCategory,
                
                error: ""
            }
        
        case actionTypes.GET_PRODUCT_CATEGORY_DETAIL_FAIL:
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
        case actionTypes.UPDATE_PRODUCT_CATEGORY_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_PRODUCT_CATEGORY_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_PRODUCT_CATEGORY_COMPLETE:
            return {
            }
        
        case actionTypes.UPDATE_PRODUCT_CATEGORY_FAIL:
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
        case actionTypes.DELETE_PRODUCT_CATEGORY_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_PRODUCT_CATEGORY_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_PRODUCT_CATEGORY_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_PRODUCT_CATEGORY_FAIL:
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
