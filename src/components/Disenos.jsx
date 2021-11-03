import styled from "styled-components";
import { Link } from "react-router-dom";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

export const Button= styled.button`
    background: #0ac763;
    cursor: pointer;
    font-size: 20px;
    margin: 3px;
    border: 1px solid #0ac763;
    border-radius: 10px;
    width:210px;
    height:44px;
    color:white;
    font-weight:lighter;
    transition: all .3s ease;
}
    
    
    &:hover{
        background : #0ac76296;
        border: 1px solid #07a14f;
    }
`   
export const LinkRuta= styled(Link)`
text-decoration: none;
color:black;
`

