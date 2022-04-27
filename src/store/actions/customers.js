import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addCustomerStart = () => {
    return {
        type: actionTypes.ADD_CUSTOMER_START
    };
};

export const addCustomerSuccess = () => {
    return {
        type: actionTypes.ADD_CUSTOMER_SUCCESS,
    };
};

export const addCustomerFail = (error) => {
    return {
        type: actionTypes.ADD_CUSTOMER_FAIL,
        error: error
    };
};
export const addCustomerComplete = () => {
    return {
        type: actionTypes.ADD_CUSTOMER_COMPLETE,
    };
};


export const addCustomer = (customer) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addCustomerStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/customer/add", customer,{headers})
                .then(response => {
                    dispatch(addCustomerSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addCustomerFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addCustomerFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getCustomersStart = () => {
    return {
        type: actionTypes.GET_CUSTOMERS_START
    };
};

export const getCustomersSuccess = (customers) => {
    return {
        type: actionTypes.GET_CUSTOMERS_SUCCESS,
        customers
    };
};

export const getCustomersFail = (error) => {
    return {
        type: actionTypes.GET_CUSTOMERS_FAIL,
        error: error
    };
};

export const getCustomers = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getCustomersStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/customer/all",{headers})
                .then(response => {
                    const {customers} = response.data;
                    dispatch(getCustomersSuccess(customers));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getCustomersFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getCustomersFail("Connection to Server fail! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getCustomerDetailStart = () => {
    return {
        type: actionTypes.GET_CUSTOMER_DETAIL_START
    };
};

export const getCustomerDetailSuccess = (customer) => {
    return {
        type: actionTypes.GET_CUSTOMER_DETAIL_SUCCESS,
        customer,
        
    };
};

export const getCustomerDetailFail = (error) => {
    return {
        type: actionTypes.GET_CUSTOMER_DETAIL_FAIL,
        error: error
    };
};

export const getCustomerDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getCustomerDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/customer/find?customerID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {customer} = response.data;
                    dispatch(getCustomerDetailSuccess(customer));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getCustomerDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getCustomerDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateCustomerStart = () => {
    return {
        type: actionTypes.UPDATE_CUSTOMER_START
    };
};

export const updateCustomerSuccess = () => {
    return {
        type: actionTypes.UPDATE_CUSTOMER_SUCCESS,
    };
};

export const updateCustomerFail = (error) => {
    return {
        type: actionTypes.UPDATE_CUSTOMER_FAIL,
        error: error
    };
};

export const updateCustomerComplete = () => {
    return {
        type: actionTypes.UPDATE_CUSTOMER_COMPLETE,
    };
};


export const updateCustomer = (customer) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateCustomerStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/customer/modify",customer,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateCustomerSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateCustomerFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateCustomerFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteCustomerStart = () => {
    return {
        type: actionTypes.DELETE_CUSTOMER_START
    };
};

export const deleteCustomerSuccess = () => {
    return {
        type: actionTypes.DELETE_CUSTOMER_SUCCESS,
    };
};

export const deleteCustomerFail = (error) => {
    return {
        type: actionTypes.DELETE_CUSTOMER_FAIL,
        error: error
    };
};

export const deleteCustomerComplete = () => {
    return {
        type: actionTypes.DELETE_CUSTOMER_COMPLETE,
    };
};


export const deleteCustomer = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteCustomerStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/customer/remove?customerID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteCustomerSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteCustomerFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteCustomerFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
