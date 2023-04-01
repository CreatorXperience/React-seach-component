import React from 'react'

export default class ImageCard extends React.Component{
constructor(props){
    super(props)
this.state = {
    spans: 0
}
this.myRef = React.createRef()
}

componentDidMount(){
this.myRef.current.addEventListener('load' , this.setSpans)
}

setSpans = ()=> {
const  height = this.myRef.current.clientHeight

const spans = Math.ceil(height / 10+1)

this.setState({spans})

}
    render(){
        const {urls, description} = this.props.image
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}} > 
<img  ref = {this.myRef} src = {urls.regular} alt = {description} />

                </div> 
        )
    }}