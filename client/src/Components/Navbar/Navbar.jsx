import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import './Navbar.scss'
import { mobile } from '../../responsive';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Language =  styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Logo =  styled.div`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
// placeholder will replace with actual user icon
const UserIcon = styled.div`
width: 25px;
height:25px;
border-radius: 50%;
border: 1px solid black;
`


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector(state => state.user.currentUser)
  return (
    <div className="container">
        <div className="wrapper">
            <div className="left">
                <Language>EN</Language>
                <div className="search-container">
                    <Input/>
                    <Search style={{color: "grey", fontSize: "16px"}}/>
                </div>
            </div>
            <div className="center">
                <Logo>
                    E-Com
                </Logo>
            </div>
            <div className="right">
            <MenuItem>{!user ? <Link to={`/login`}>Register </Link>: <></>} </MenuItem>
                <MenuItem>{!user ? <Link to={`/login`}>Sign In </Link>: <UserIcon/>} </MenuItem>
                <Link to={`/cart`}>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar