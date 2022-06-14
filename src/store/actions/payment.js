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
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addCashPaymentFail(message));

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


export const getCashPaymentsStart = () => {
    return {
        type: actionTypes.GET_CASH_PAYMENT_START
    };
};

export const getCashPaymentsSuccess = (payments) => {
    return {
        type: actionTypes.GET_CASH_PAYMENT_SUCCESS,
        payments
    };
};

export const getCashPaymentsFail = (error) => {
    return {
        type: actionTypes.GET_CASH_PAYMENT_FAIL,
        error: error
    };
};

export const getCashPayments = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getCashPaymentsStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/payment/all",{headers})
                .then(response => {
                    const {payments} = response.data;
                    dispatch(getCashPaymentsSuccess(payments));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getCashPaymentsFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getCashPaymentsFail("Connection failure! Try Again"));

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

export const deleteCashPaymentStart = () => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_START
    };
};

export const deleteCashPaymentSuccess = () => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_SUCCESS,
    };
};

export const deleteCashPaymentFail = (error) => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_FAIL,
        error: error
    };
};

export const deleteCashPaymentComplete = () => {
    return {
        type: actionTypes.DELETE_CASH_PAYMENT_COMPLETE,
    };
};


export const deleteCashPayment = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteCashPaymentStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/payment/remove?paymentID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteCashPaymentSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteCashPaymentFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteCashPaymentFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
