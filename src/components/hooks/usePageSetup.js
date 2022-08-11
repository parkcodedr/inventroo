import React,{useEffect} from 'react';
// import {useHistory}  from 'react-router-dom';
export const usePageSetup = ()=>{
    // const history =useHistory();
    useEffect(()=>{
        document.body.classList.remove("2-columns");
        document.body.classList.remove("fixed-navbar");
        document.body.classList.remove("vertical-layout");
        document.body.classList.remove("vertical-menu-modern");
        // return ()=>{
        //     document.body.classList.add("2-columns");
        //     document.body.classList.add("fixed-navbar");
        //     document.body.classList.add("vertical-layout");
        //     document.body.classList.add("vertical-menu-modern");
        // }
        },[])
}