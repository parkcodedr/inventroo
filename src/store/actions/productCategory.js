import { actionTypes } from '../constants/ActionTypes';
import {ApiService} from '../constants/ApiService';


export const addProductCategoryStart = () => {
    return {
        type: actionTypes.ADD_PRODUCT_CATEGORY_START
    };
};

export const addProductCategorySuccess = () => {
    return {
        type: actionTypes.ADD_PRODUCT_CATEGORY_SUCCESS,
    };
};

export const addProductCategoryFail = (error) => {
    return {
        type: actionTypes.ADD_PRODUCT_CATEGORY_FAIL,
        error: error
    };
};
export const addProductCategoryComplete = () => {
    return {
        type: actionTypes.ADD_PRODUCT_CATEGORY_COMPLETE,
    };
};


export const addProductCategory = (productCategory) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(addProductCategoryStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/category/add", productCategory,{headers})
                .then(response => {
                    dispatch(addProductCategorySuccess());
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(addProductCategoryFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(addProductCategoryFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getProductCategoriesStart = () => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORIES_START
    };
};

export const getProductCategoriesSuccess = (categories) => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
        categories
    };
};

export const getProductCategoriesFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORIES_FAIL,
        error: error
    };
};

export const getProductCategories = () => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getProductCategoriesStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get("/category/all",{headers})
                .then(response => {
                    const {categories} = response.data;
                    console.log(response.data);
                    dispatch(getProductCategoriesSuccess(categories));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getProductCategoriesFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getProductCategoriesFail("Connection to Server fail! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const getProductCategoryDetailStart = () => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORY_DETAIL_START
    };
};

export const getProductCategoryDetailSuccess = (category) => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORY_DETAIL_SUCCESS,
        category,
        
    };
};

export const getProductCategoryDetailFail = (error) => {
    return {
        type: actionTypes.GET_PRODUCT_CATEGORY_DETAIL_FAIL,
        error: error
    };
};

export const getProductCategoryDetail = (id) => {

    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(getProductCategoryDetailStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/category/find?categoryID=${id}`,{headers})
                .then(response => {
                    console.log(response.data);
                    const {category} = response.data;
                    dispatch(getProductCategoryDetailSuccess(category));
                }).catch(error => {
                    if (error.response) {
                        const { message } = error.response.data;
                        console.log(error.response.data);
                        dispatch(getProductCategoryDetailFail(message));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(getProductCategoryDetailFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}


export const updateProductCategoryStart = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_CATEGORY_START
    };
};

export const updateProductCategorySuccess = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_CATEGORY_SUCCESS,
    };
};

export const updateProductCategoryFail = (error) => {
    return {
        type: actionTypes.UPDATE_PRODUCT_CATEGORY_FAIL,
        error: error
    };
};

export const updateProductCategoryComplete = () => {
    return {
        type: actionTypes.UPDATE_PRODUCT_CATEGORY_COMPLETE,
    };
};


export const updateProductCategory = (productCategory) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(updateProductCategoryStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.post("/category/modify",productCategory,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(updateProductCategorySuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(updateProductCategoryFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(updateProductCategoryFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteProductCategoryStart = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_CATEGORY_START
    };
};

export const deleteProductCategorySuccess = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_CATEGORY_SUCCESS,
    };
};

export const deleteProductCategoryFail = (error) => {
    return {
        type: actionTypes.DELETE_PRODUCT_CATEGORY_FAIL,
        error: error
    };
};

export const deleteProductCategoryComplete = () => {
    return {
        type: actionTypes.DELETE_PRODUCT_CATEGORY_COMPLETE,
    };
};


export const deleteProductCategory = (id) => {
    return (dispatch,getState) => {
        const {auth:{token}} = getState();
        dispatch(deleteProductCategoryStart());
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
            ApiService.get(`/category/remove?categoryID=${id}`,{headers})
                .then(response => {
                    //const {manufacturers} = response.data;
                    dispatch(deleteProductCategorySuccess());
                }).catch(error => {
                    if (error.response) {
                        const { ResponseMessage } = error.response.data;
                        console.log(error.response.data);
                        dispatch(deleteProductCategoryFail(ResponseMessage));

                    } else if (error.request) {
                        console.log(error);
                        dispatch(deleteProductCategoryFail("Connection failure! Try Again"));

                    }
                    console.log(error.response);
                })
        } catch (e) {
            console.log(e);
        }
    }
}
