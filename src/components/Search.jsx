import React from "react"
import './Search.css'
class Search extends React.Component{

      state= {
            change: ""
                }
 handleSearchChange =   (e) => {
this.setState({change: e.target.value})
    }

    handleFormSubmit = (e) => {
 e.preventDefault()

 this.props.onSubmit(this.state.change)
    }

    render(){
  
        return(
            <form onSubmit = {this.handleFormSubmit}> 
            <div className="ui search">
  <div className="ui icon input">
    <input className="prompt" type="text" placeholder="Search countries..." onChange={this.handleSearchChange}/>   
    <i className="search icon"></i>
  </div>
  <div className="results"></div>
</div>

</form>
        )
    }
}
export default Search