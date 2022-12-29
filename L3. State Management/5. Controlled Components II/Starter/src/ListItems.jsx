import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
export default function ListItems({ items}) {
    const listItems = items.map((item,index) => (
        <Item key={index} item={item} />
    ));
    return <ul>{listItems}</ul>;
}