import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import "../Step1/index.css";

function ComponentA(){
    return (
        <div>
            <ComponentB />
            <ComponentC />
        </div>
    );
};

export default ComponentA;