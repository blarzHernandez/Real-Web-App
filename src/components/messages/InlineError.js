import React from "react";
import propTypes from "prop-types";
import { Message } from "semantic-ui-react";

const InlineError = ({text}) => (
    <Message negative>
        <Message.Header>{text}</Message.Header>
    </Message>
   
);

InlineError.propTypes = {
    text:propTypes.string.isRequired
};
export default InlineError;