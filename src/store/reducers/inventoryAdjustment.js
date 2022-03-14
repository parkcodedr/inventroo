import { actionTypes } from '../constants/ActionTypes';

const initialState = {
    loading: false,
    success: false,
    inventoryAdjustments:[],
    error: ""
}
export const addInventoryAdjustmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INVENTORY_ADJUSTMENT_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ADD_INVENTORY_ADJUSTMENT_SUCCESS:
            return {
                loading: false,
                success: true,
                error: ""
            }
        case actionTypes.ADD_INVENTORY_ADJUSTMENT_COMPLETE:
                return {
                    success: false,
                }
        case actionTypes.ADD_INVENTORY_ADJUSTMENT_FAIL:
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


export const getInventoryAdjustmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INVENTORY_ADJUSTMENTS_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_INVENTORY_ADJUSTMENTS_SUCCESS:
            return {
                loading: false,
                inventoryAdjustments:action.inventoryAdjustments,
                error: ""
            }
        
        case actionTypes.GET_INVENTORY_ADJUSTMENTS_FAIL:
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

export const getInventoryAdjustmentDetailReducer = (state = {
    loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_INVENTORY_ADJUSTMENT_DETAIL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_INVENTORY_ADJUSTMENT_DETAIL_SUCCESS:
            return {
                loading: false,
                inventoryAdjustment:action.inventoryAdjustment,
                
                error: ""
            }
        
        case actionTypes.GET_INVENTORY_ADJUSTMENT_DETAIL_FAIL:
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

export const updateInventoryAdjustmentReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_INVENTORY_ADJUSTMENT_START:
            return {
                loading: true,
            }
        case actionTypes.UPDATE_INVENTORY_ADJUSTMENT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.UPDATE_INVENTORY_ADJUSTMENT_COMPLETE:
            return {
                        }
        
        case actionTypes.UPDATE_INVENTORY_ADJUSTMENT_FAIL:
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

export const deleteInventoryAdjustmentReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_INVENTORY_ADJUSTMENT_START:
            return {
                loading: true,
            }
        case actionTypes.DELETE_INVENTORY_ADJUSTMENT_SUCCESS:
            return {
                loading: false,
                success:true,
                error: ""
            }
        case actionTypes.DELETE_INVENTORY_ADJUSTMENT_COMPLETE:
            return {
            }
        
        case actionTypes.DELETE_INVENTORY_ADJUSTMENT_FAIL:
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
