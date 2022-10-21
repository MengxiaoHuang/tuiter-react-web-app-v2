import React from "react";
import {Link} from "react-router-dom";

const A6 = () => {
    return (
        <>
            <h2>Assignment 6</h2>
            <Link to="/a6/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a6">
                Lab
            </Link> | &nbsp;
            <Link to="/a6/tuiter/explore">
                Tuiter
            </Link> | &nbsp;
            <Link to="/a6/twitter/home">
                Challenge
            </Link> | &nbsp;
        </>
    )
};

export default A6;