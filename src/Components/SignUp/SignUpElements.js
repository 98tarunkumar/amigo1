import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container=styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    // background: linear-gradient(
    // rgba(1,147,86,1) 0%,
    // rgba(10,201,122,1) 100%
    // );
    background: rgb(2,0,36);
background: -moz-linear-gradient(0deg, rgba(2,0,36,1) 9%, rgba(38,132,175,1) 84%, rgba(0,212,255,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(2,0,36,1) 9%, rgba(38,132,175,1) 84%, rgba(0,212,255,1) 100%);
background: linear-gradient(0deg, rgba(2,0,36,1) 9%, rgba(38,132,175,1) 84%, rgba(0,212,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
` 
export const FromWrap=styled.div`
    height:100%;
    dispay:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:400px){
        height:80%;
    }
`
export const Icon=styled(Link)`
    margin-left:32px;
    margin-top:32px;
    position:absolute;
    text-decoration:none;
    color:#fff;
    font-weight:700;
    font-size:32px;

    @media screen and (max-width:480px){
        margin-left:16px;
        margin-top:8px;
    }
`
