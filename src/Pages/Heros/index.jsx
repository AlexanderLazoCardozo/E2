import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./index.css"


const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'

const Hero = () => {
  const [id, setId] = useState(null)

  const history = useHistory()

  const getHeros = async () => {

    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`)
      
      const hero = await response.json()
      
      history.push(`/HeroDetail/${hero.id}?name=${hero.name}&image=${hero.image.url}`)
      console.log('response', hero)
    } catch (error) {
      console.log('error', error)
    }
    
  }

  const handleChange = (e) => {
    const { target : { value } } = e
    setId(value)
  }
  
  
  return (
    <div className="buscador">
      <input type="text" onChange={handleChange} /><br />
      <button onClick={getHeros} >Buscar</button> <br />
      Ingrese un dígito para buscar al respectivo héroe.
    </div>
    
  )
}



export default Hero
