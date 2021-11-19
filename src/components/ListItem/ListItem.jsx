import React from "react";
import { ListItemContainer } from "./ListItem.styles";

const ListItem = ({ children, ...otherProps }) => {
    return <ListItemContainer {...otherProps}>{children}</ListItemContainer>;
};

export default ListItem;
