import React,{useContext} from 'react'
import {productContext} from '../../App'
import { useParams } from 'react-router-dom'



const Shoe = () => {
const shoes = useContext(productContext)
const { shoeID } = useParams()
const shoe = shoes[shoeID]
const {name, img} = shoe
    return (
    <div>
    <h3>{name}</h3>
    <img src={img} alt={name}/>
      
    </div>
  )
}

export default Shoe
