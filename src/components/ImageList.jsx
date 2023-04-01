import React from  'react'
import ImageCard from './imageCard'
import './list.css'
 const ImageList = (props)=> {

const Images =  props.images.map((image) => {
    return <ImageCard key = {image.id} image= {image} /> 
})


    return (
<div className= "image-container"> {Images} </div>
    )
}
export default ImageList;