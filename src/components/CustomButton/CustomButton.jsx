import React from "react";
import { CustomButtonContainer } from "./customButton_styled";
// import './CustomButton.scss';

function CustomButton({ children, ...props }) {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;