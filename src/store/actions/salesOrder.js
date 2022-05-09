import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addSalesOrderStart = () => {
    return {
        type: actionTypes.ADD_SALES_ORDER_START
    };
};

export const addSalesOrderSuccess = () => {
    return {
        type: actionTypes.ADD_SALES_ORDER_SUCCESS,
    };
};

export const addSalesOrderFail = (error) => {
    return {
        type: actionTypes.ADD_SALES_ORDER_FAIL,
        error: error
    };
};
export const addSalesOrderComplete = () => {
    return {
        type: actionTypes.ADD_SALES_ORDER_COMPLETE,
    };
};


export const addSalesOrder = (salesOrder) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addSalesOrderStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/salesOrder/add", salesOrder,{headers})
                .then(response => {
                    dispatch(addSalesOrderSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addSalesOrderFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addSalesOrderFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getSalesOrderStart = () => {
    return {
        type: actionTypes.GET_SALES_ORDER_START
    };
};

export const getSalesOrderSuccess = (salesOrders) => {
    return {
        type: actionTypes.GET_SALES_ORDER_SUCCESS,
        salesOrders
    };
};

export const getSalesOrderFail = (error) => {
    return {
        type: actionTypes.GET_SALES_ORDER_FAIL,
        error: error
    };
};

export const getSalesOrder = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getSalesOrderStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/salesOrder/all",{headers})
                .then(response => {
                    const {salesOrders} = response.data;
                    console.log(response.data);
                    dispatch(getSalesOrderSuccess(salesOrders));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getSalesOrderFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getSalesOrderFail("Connection to Server fail! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getSalesOrderDetailStart = () => {
    return {
        type: actionTypes.GET_SALES_ORDER_DETAIL_START
    };
};

export const getSalesOrderDetailSuccess = (salesOrder) => {
    return {
        type: actionTypes.GET_SALES_ORDER_DETAIL_SUCCESS,
        salesOrder,
        
    };
};

export const getSalesOrderDetailFail = (error) => {
    return {
        type: actionTypes.GET_SALES_ORDER_DETAIL_FAIL,
        error: error
    };
};

export const getSalesOrderDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getSalesOrderDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/salesOrder/find?customerID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {salesOrder} = response.data;
                    dispatch(getSalesOrderDetailSuccess(salesOrder));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getSalesOrderDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getSalesOrderDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateSalesOrderStart = () => {
    return {
        type: actionTypes.UPDATE_SALES_ORDER_START
    };
};

export const updateSalesOrderSuccess = () => {
    return {
        type: actionTypes.UPDATE_SALES_ORDER_SUCCESS,
    };
};

export const updateSalesOrderFail = (error) => {
    return {
        type: actionTypes.UPDATE_SALES_ORDER_FAIL,
        error: error
    };
};

export const updateSalesOrderComplete = () => {
    return {
        type: actionTypes.UPDATE_SALES_ORDER_COMPLETE,
    };
};


export const updateSalesOrder = (salesOrder) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateSalesOrderStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/salesOrder/modify",salesOrder,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateSalesOrderSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateSalesOrderFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateSalesOrderFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteSalesOrderStart = () => {
    return {
        type: actionTypes.DELETE_SALES_ORDER_START
    };
};

export const deleteSalesOrderSuccess = (message) => {
    return {
        type: actionTypes.DELETE_SALES_ORDER_SUCCESS,
        message
    };
};

export const deleteSalesOrderFail = (error) => {
    return {
        type: actionTypes.DELETE_SALES_ORDER_FAIL,
        error: error
    };
};

export const deleteSalesOrderComplete = () => {
    return {
        type: actionTypes.DELETE_SALES_ORDER_COMPLETE,
    };
};


export const deleteSalesOrder = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteSalesOrderStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/salesOrder/remove?salesOrderID=${id}`,{headers})
                .then(response => {
                    const {ResponseMessage} = response.data;
                    dispatch(deleteSalesOrderSuccess(ResponseMessage));
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteSalesOrderFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteSalesOrderFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
