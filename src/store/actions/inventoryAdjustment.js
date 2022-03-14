import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addInventoryAdjustmentStart = () => {
    return {
        type: actionTypes.ADD_INVENTORY_ADJUSTMENT_START
    };
};

export const addInventoryAdjustmentSuccess = () => {
    return {
        type: actionTypes.ADD_INVENTORY_ADJUSTMENT_SUCCESS,
    };
};

export const addInventoryAdjustmentFail = (error) => {
    return {
        type: actionTypes.ADD_INVENTORY_ADJUSTMENT_FAIL,
        error: error
    };
};
export const addInventoryAdjustmentComplete = () => {
    return {
        type: actionTypes.ADD_INVENTORY_ADJUSTMENT_COMPLETE,
    };
};


export const addInventoryAdjustment = (inventoryAdjustment) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addInventoryAdjustmentStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/inventoryAdjustment/add", inventoryAdjustment,{headers})
                .then(response => {
                    dispatch(addInventoryAdjustmentSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addInventoryAdjustmentFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addInventoryAdjustmentFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getInventoryAdjustmentsStart = () => {
    return {
        type: actionTypes.GET_INVENTORY_ADJUSTMENTS_START
    };
};

export const getInventoryAdjustmentsSuccess = (inventoryAdjustments) => {
    return {
        type: actionTypes.GET_INVENTORY_ADJUSTMENTS_SUCCESS,
        inventoryAdjustments
    };
};

export const getInventoryAdjustmentsFail = (error) => {
    return {
        type: actionTypes.GET_INVENTORY_ADJUSTMENTS_FAIL,
        error: error
    };
};

export const getInventoryAdjustments = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getInventoryAdjustmentsStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/inventoryAdjustment/all",{headers})
                .then(response => {
                    const {inventoryAdjustments} = response.data;
                    dispatch(getInventoryAdjustmentsSuccess(inventoryAdjustments));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getInventoryAdjustmentsFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getInventoryAdjustmentsFail("Connection failure! Try Again"));
                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getInventoryAdjustmentDetailStart = () => {
    return {
        type: actionTypes.GET_INVENTORY_ADJUSTMENT_DETAIL_START
    };
};

export const getInventoryAdjustmentDetailSuccess = (inventoryAdjustment) => {
    return {
        type: actionTypes.GET_INVENTORY_ADJUSTMENT_DETAIL_SUCCESS,
        inventoryAdjustment,
        
    };
};

export const getInventoryAdjustmentDetailFail = (error) => {
    return {
        type: actionTypes.GET_INVENTORY_ADJUSTMENT_DETAIL_FAIL,
        error: error
    };
};

export const getInventoryAdjustmentDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getInventoryAdjustmentDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/inventoryAdjustment/find?inventoryAdjustmentID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {inventoryAdjustment} = response.data;
                    dispatch(getInventoryAdjustmentDetailSuccess(inventoryAdjustment));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getInventoryAdjustmentDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getInventoryAdjustmentDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateInventoryAdjustmentStart = () => {
    return {
        type: actionTypes.UPDATE_INVENTORY_ADJUSTMENT_START
    };
};

export const updateInventoryAdjustmentSuccess = () => {
    return {
        type: actionTypes.UPDATE_INVENTORY_ADJUSTMENT_SUCCESS,
    };
};

export const updateInventoryAdjustmentFail = (error) => {
    return {
        type: actionTypes.UPDATE_INVENTORY_ADJUSTMENT_FAIL,
        error: error
    };
};

export const updateInventoryAdjustmentComplete = () => {
    return {
        type: actionTypes.UPDATE_INVENTORY_ADJUSTMENT_COMPLETE,
    };
};


export const updateInventoryAdjustment = (inventoryAdjustment) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateInventoryAdjustmentStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/inventoryAdjustment/modify",inventoryAdjustment,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateInventoryAdjustmentSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateInventoryAdjustmentFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateInventoryAdjustmentFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteInventoryAdjustmentStart = () => {
    return {
        type: actionTypes.DELETE_INVENTORY_ADJUSTMENT_START
    };
};

export const deleteInventoryAdjustmentSuccess = () => {
    return {
        type: actionTypes.DELETE_INVENTORY_ADJUSTMENT_SUCCESS,
    };
};

export const deleteInventoryAdjustmentFail = (error) => {
    return {
        type: actionTypes.DELETE_INVENTORY_ADJUSTMENT_FAIL,
        error: error
    };
};

export const deleteInventoryAdjustmentComplete = () => {
    return {
        type: actionTypes.DELETE_INVENTORY_ADJUSTMENT_COMPLETE,
    };
};


export const deleteInventoryAdjustment = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteInventoryAdjustmentStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/inventoryAdjustment/remove?inventoryAdjustmentID=${id}`,{headers})
                .then(response => {
                    dispatch(deleteInventoryAdjustmentSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteInventoryAdjustmentFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteInventoryAdjustmentFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
