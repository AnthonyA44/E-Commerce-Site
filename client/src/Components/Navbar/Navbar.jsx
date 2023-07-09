import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import './Navbar.scss'
import { mobile } from '../../responsive';

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


const Navbar = () => {
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
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </div>
        </div>
    </div>
  )
}

export default Navbar