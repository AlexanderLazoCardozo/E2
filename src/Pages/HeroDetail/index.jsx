import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import "./index.css"

const HeroDetail = () => {

    const params = useParams()
    const location = useLocation()
    console.log('params', params)
    console.log("location", location)

    const {searchParams} = new URL(window.location.href);
    const name = searchParams.get("name")
    const image = searchParams.get("image")
    const firstname = searchParams.get("firstname")

    console.log("firstname",firstname)
    return (
        <div>
            <h3>{name}</h3>
            <h3>{firstname}</h3>
            <img classame="imagen" src={image} alt="img"></img>
        </div>
    )
}

export default HeroDetail
