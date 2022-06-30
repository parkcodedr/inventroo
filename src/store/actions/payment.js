import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addCashPaymentStart = () => {
    return {
        type: actionTypes.ADD_CASH_PAYMENT_START
    };
};

export const addCashPaymentSuccess = () => {
    return {
        type: actionTypes.ADD_CASH_PAYMENT_SUCCESS,
    };
};

export const addCashPaymentFail = (error) => {
    return {
        type: actionTypes.ADD_CASH_PAYMENT_FAIL,
        error: error
    };
};
export const addCashPaymentComplete = () => {
    return {
        type: actionTypes.ADD_CASH_PAYMENT_COMPLETE,
    };
};


export const addCashPayment = (cashPayment) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addCashPaymentStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/payment/add", cashPayment,{headers})
                .then(response => {
                    dispatch(addCashPaymentSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addCashPaymentFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addCashPaymentFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getPaymentsStart = () => {
    return {
        type: actionTypes.GET_PAYMENTS_START
    };
};

export const getPaymentsSuccess = (payments) => {
    return {
        type: actionTypes.GET_PAYMENTS_SUCCESS,
        payments
    };
};

export const getPaymentsFail = (error) => {
    return {
        type: actionTypes.GET_PAYMENTS_FAIL,
        error: error
    };
};

export const getPayments = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getPaymentsStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/payment/all",{headers})
                .then(response => {
                    const {payments} = response.data;
                    dispatch(getPaymentsSuccess(payments));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getPaymentsFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getPaymentsFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getCashPaymentDetailStart = () => {
    return {
        type: actionTypes.GET_CASH_PAYMENT_DETAIL_START
    };
};

export const getCashPaymentDetailSuccess = (payment) => {
    return {
        type: actionTypes.GET_CASH_PAYMENT_DETAIL_SUCCESS,
        payment,
        
    };
};

export const getCashPaymentDetailFail = (error) => {
    return {
        type: actionTypes.GET_CASH_PAYMENT_DETAIL_FAIL,
        error: error
    };
};

export const getCashPaymentDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getCashPaymentDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/payment/find?paymentID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {payment} = response.data;
                    dispatch(getCashPaymentDetailSuccess(payment));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getCashPaymentDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getCashPaymentDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateCashPaymentStart = () => {
    return {
        type: actionTypes.UPDATE_CASH_PAYMENT_START
    };
};

export const updateCashPaymentSuccess = () => {
    return {
        type: actionTypes.UPDATE_CASH_PAYMENT_SUCCESS,
    };
};

export const updateCashPaymentFail = (error) => {
    return {
        type: actionTypes.UPDATE_CASH_PAYMENT_FAIL,
        error: error
    };
};

export const updateCashPaymentComplete = () => {
    return {
        type: actionTypes.UPDATE_CASH_PAYMENT_COMPLETE,
    };
};


export const updateCashPayment = (payment) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateCashPaymentStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/payment/modify",payment,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateCashPaymentSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateCashPaymentFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateCashPaymentFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deletePaymentStart = () => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_START
    };
};

export const deletePaymentSuccess = () => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_SUCCESS,
    };
};

export const deletePaymentFail = (error) => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_FAIL,
        error: error
    };
};

export const deletePaymentComplete = () => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_COMPLETE,
    };
};


export const deletePayment = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deletePaymentStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/payment/remove?paymentID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deletePaymentSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deletePaymentFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deletePaymentFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
