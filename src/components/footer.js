import React from "react";

function Footer(){

    return (
        <>
            <div className="flex flex-col w-screen h-auto items-center" style = {{backgroundColor:'#0b736c'}} >
                <div className="flex items-start ml-4">
                    <h1 className="text-2xl text-white font-cedarville pt-4">PlantEasy</h1>
                </div>

                <div className="flex justify-end items-center  text-green-100 text-lg">
                    
                    <h2 className="p-4">
                    "nurture, nourish, thrive..." 
                    </h2>
                    
                </div>
            </div>
    
        </>

    );
};


export default Footer;