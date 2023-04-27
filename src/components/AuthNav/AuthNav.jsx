import React from "react";
import { Link, Box } from "./AuthNav.styled";

export default function AuthNav() {
    return(
        <Box>
        <Link  to='/register'>
            Register
        </Link>

       <Link to='/login'>
            Login
       </Link>

       <Link to='/home'>
            Home
       </Link>
        </Box>
    );
}