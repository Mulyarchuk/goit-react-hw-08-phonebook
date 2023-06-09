
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { deleteContacts } from "redux/operations";
import { Item, Button } from "./ContactListItem.styled";
import { BsXCircle } from "react-icons/bs";



export const ContactListItem = ({id, name, phone}) => {
    const dispatch = useDispatch();
    

    return(
        <Item>
            {name}:{phone} 
            <Button type="button" value={id} onClick = {() => dispatch(deleteContacts(id))}>
            <BsXCircle size="20px" />
            </Button>
            
            
        </Item>
            
    );
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};