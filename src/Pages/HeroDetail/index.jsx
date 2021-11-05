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
    const fullname = searchParams.get("full-name")    
    const image = searchParams.get("image")

    const firstname =searchParams.get("firstname")
    const lastname =searchParams.get("lastname")
    const gender = searchParams.get("gender")
    const picture = searchParams.get("picture")
    const ubication = searchParams.get("location")

    console.log("genero",gender)

    if (gender === "male" || gender === "female") {
        return (
            <div className="nombresGenerador">
                <h3>Nombres : {firstname}</h3>
                <h3>Apellidos : {lastname}</h3>
                <h3>Genero : {gender}</h3>
                <h3>Ubicacion : {ubication}</h3>
                <img  src={picture} alt="img"/>

            </div>
        ) 
    } else {
        return (
            
            <div className="generacion">
            <div>
                
                <h2>Nombre de Heroe: {name}</h2>
                <h3>Nombre Real: {fullname}</h3>
                <img classame="imagen" src={image} alt="img"></img>
            </div>
            
        </div>
        )
    }

}

export default HeroDetail
