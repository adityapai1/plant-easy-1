import React from "react";
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToInfo = () => {
        navigate("/info");
    };

    const navigateToQna = () => {
        navigate("/qna");
    };

    return (
        <>
            <div className="flex flex-row w-screen h-16 bg-emerald-600 justify-between items-center">
                <div className="flex items-start ml-4">
                    <h1 className="text-2xl text-white font-cedarville">PlantEasy</h1>
                </div>
                <div className="flex justify-end items-center  text-green-100 text-lg">
                    
                    <button className="py-4 px-12 hover:bg-emerald-700" onClick={navigateToHome}>Home</button>
                    <button className="py-4 px-12 hover:bg-emerald-700" onClick={navigateToInfo}>Info</button>
                    <button className="py-4 px-12 hover:bg-emerald-700" onClick={navigateToQna}>QnA</button>
                </div>
            </div>
    
        </>

    );
};

export default Header;