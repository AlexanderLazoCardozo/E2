import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

 
const DOMAIN = "https://randomuser.me/api/"

const NombresR = () => {

    useEffect(() => {
        
    }, [])

    const history = useHistory()

    const getName = async () => {
        try {
            const response = await fetch (DOMAIN)
            const hero = await response.json()
            history.push(`/HeroDetail/firstname=${hero.results[0].name.first}?lastname=${hero.results[0].name.last}&gender=${hero.results[0].gender}?location=${hero.results[0].location.country}&email=${hero.results[0].email}?picture=${hero.results[0].picture.large} `)
            console.log("NameRandom",hero.results[0])
            console.log("NameRandom",hero.results[0].picture.large)
        } catch (error){
            console.log("error",error)
        }
    }
    

    return (
        
        <div>
            
            <button onClick={getName}>Generar (RANDOM) </button>
            
        </div>
    )
}


export default NombresR



