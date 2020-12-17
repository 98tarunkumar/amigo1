import { useEffect } from "react"
import react,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function scrollToTop(){
    const {pathName} =useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])

    return null;
}