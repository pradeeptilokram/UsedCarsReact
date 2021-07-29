import React, {useRef, useEffect} from 'react';

const { tableau } = window; 

 export default function TableauEmbed1(){
    
    const ref =useRef(null);
    const url ='https://public.tableau.com/views/EDAofcars-sample/EDAofcars-sample';

    //const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
    const  options = {
        device : "desktop",
    };

    function initviz(){
        new tableau.Viz(ref.current,url,options);
        }

    useEffect(() => {
        initviz();
    },[])
    

    return (
    <div><p align='left'>Visual Analytics</p>
    <div ref={ref}></div>
    
    </div>);
}

export  function TableauEmbed2(){
    
    const ref2 =useRef(null);
    const url2='https://public.tableau.com/shared/HX6FRFBHG';

    //const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
    const  options = {
        device : "desktop",
    };

    function initviz(){
        new tableau.Viz(ref2.current,url2,options);
    }

    useEffect(() => {
        initviz();
    },[])
    

    return (
    <div><p align='left'>Visual Analytics</p>
    <div ref= {ref2}></div>
    </div>);
}


//export default {TableauEmbed2,TableauEmbed1}; 
