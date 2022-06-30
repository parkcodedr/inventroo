import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    categories:[],
    error: ""
}
export const addProductCategoryReducer = (state = initialState, action) => {
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


export const getProductCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_CATEGORIES_START:
            return {
                
                loading: true,
            }
        case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories:action.categories,
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

export const getProductCategoryDetailReducer = (state = {
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
                category:action.category,
                
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

export const updateProductCategoryReducer = (state = {}, action) => {
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

export const deleteProductCategoryReducer = (state = {}, action) => {
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
