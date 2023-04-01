import React from  'react'
import Search from './Search'
import unsplash  from '../api/unsplash'
import ImageList from './ImageList'


export default class App extends React.Component{

       state = {
            listOfImages: []
        }
       

onSearchTerm =  async (data) =>  {

       const   response = await  unsplash.get('/search/photos', {
            params:{query: data}
            })
this.setState({listOfImages:response.data.results})
}


    render(){
        return(
            <div><Search  onSubmit = {this.onSearchTerm}/>
            Found: {this.state.listOfImages.length} images
            <ImageList images = {this.state.listOfImages}/>
             </div> 
        )
    }
}