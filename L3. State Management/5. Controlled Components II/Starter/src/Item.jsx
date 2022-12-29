import React from "react";
import PropTypes from "prop-types";
export default function Item({ item,key }) {
    return (
        <li key={key}>
            {item}
        </li>
    );
}

//add prop types and marque the item as required and of type string
PropTypes.Item = {
    item: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
}