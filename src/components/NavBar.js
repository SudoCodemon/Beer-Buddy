import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react"

function NavBar(){
    return (
        <Menu fluid widths={5} size='massive'>
            <MenuItem>
                <NavLink exact to='/' className="button" activeStyle={{color: "red"}} >Home</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/beers' className="button" activeStyle={{color: "red"}}>Beers</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/addbeer'className="button" activeStyle={{color: "red"}}>Add New Beer</NavLink>
            </MenuItem>
            <MenuItem>
             <NavLink to='/checkout'className="button" activeStyle={{color: "red"}}>Checkout</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/closetab'className="button" activeStyle={{color: "red"}}>Close Tab</NavLink>
            </MenuItem>
        </Menu> 
    )
}

export default NavBar;