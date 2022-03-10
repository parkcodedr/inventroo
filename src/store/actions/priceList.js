import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addPriceListStart = () => {
    return {
        type: actionTypes.ADD_PRICE_LIST_START
    };
};

export const addPriceListSuccess = () => {
    return {
        type: actionTypes.ADD_PRICE_LIST_SUCCESS,
    };
};

export const addPriceListFail = (error) => {
    return {
        type: actionTypes.ADD_PRICE_LIST_FAIL,
        error: error
    };
};
export const addPriceListComplete = () => {
    return {
        type: actionTypes.ADD_PRICE_LIST_COMPLETE,
    };
};


export const addPriceList = (priceList) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addPriceListStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/priceList/add", priceList,{headers})
                .then(response => {
                    dispatch(addPriceListSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addPriceListFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addPriceListFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getPriceListsStart = () => {
    return {
        type: actionTypes.GET_PRICE_LISTS_START
    };
};

export const getPriceListsSuccess = (priceLists) => {
    return {
        type: actionTypes.GET_PRICE_LISTS_SUCCESS,
        priceLists
    };
};

export const getPriceListsFail = (error) => {
    return {
        type: actionTypes.GET_PRICE_LISTS_FAIL,
        error: error
    };
};

export const getPriceLists = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getPriceListsStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/priceList/all",{headers})
                .then(response => {
                    const {priceLists} = response.data;
                    dispatch(getPriceListsSuccess(priceLists));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getPriceListsFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getPriceListsFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getPriceListDetailStart = () => {
    return {
        type: actionTypes.GET_PRICE_LIST_DETAIL_START
    };
};

export const getPriceListDetailSuccess = (priceList) => {
    return {
        type: actionTypes.GET_PRICE_LIST_DETAIL_SUCCESS,
        priceList,
        
    };
};

export const getPriceListDetailFail = (error) => {
    return {
        type: actionTypes.GET_PRICE_LIST_DETAIL_FAIL,
        error: error
    };
};

export const getPriceListDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getPriceListDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/priceList/find?priceListID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {priceList} = response.data;
                    dispatch(getPriceListDetailSuccess(priceList));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getPriceListDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getPriceListDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updatePriceListStart = () => {
    return {
        type: actionTypes.UPDATE_PRICE_LIST_START
    };
};

export const updatePriceListSuccess = () => {
    return {
        type: actionTypes.UPDATE_PRICE_LIST_SUCCESS,
    };
};

export const updatePriceListFail = (error) => {
    return {
        type: actionTypes.UPDATE_PRICE_LIST_FAIL,
        error: error
    };
};

export const updatePriceListComplete = () => {
    return {
        type: actionTypes.UPDATE_PRICE_LIST_COMPLETE,
    };
};


export const updatePriceList = (priceList) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updatePriceListStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/priceList/modify",priceList,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updatePriceListSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updatePriceListFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updatePriceListFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deletePriceListStart = () => {
    return {
        type: actionTypes.DELETE_PRICE_LIST_START
    };
};

export const deletePriceListSuccess = () => {
    return {
        type: actionTypes.DELETE_PRICE_LIST_SUCCESS,
    };
};

export const deletePriceListFail = (error) => {
    return {
        type: actionTypes.DELETE_PRICE_LIST_FAIL,
        error: error
    };
};

export const deletePriceListComplete = () => {
    return {
        type: actionTypes.DELETE_PRICE_LIST_COMPLETE,
    };
};


export const deletePriceList = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deletePriceListStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/priceList/remove?priceListID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deletePriceListSuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deletePriceListFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deletePriceListFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
