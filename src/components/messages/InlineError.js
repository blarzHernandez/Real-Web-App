import React from "react";
import propTypes from "prop-types";

const InlineError = ({text}) => (
    <span style={{color:"#973A38"}} >{text}</span>
);

InlineError.propTypes = {
    text:propTypes.string.isRequired
};
export default InlineError;