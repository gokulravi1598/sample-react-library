import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button",() =>{
    test("Custom Rendering Mode Button",()=>{
    render(
        <Button 
        outline="primary"
        size="lg"
        label="Model Sample Button"
        ></Button>
    )
    });
});