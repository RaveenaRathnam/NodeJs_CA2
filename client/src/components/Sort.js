import axios from "axios"
import React, {Component} from "react"


export default class Sort extends Component 
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            redirectToDisplayAttractions:false
        }
    }
    
    
    componentDidMount() 
    {   
        axios.sort(`${SERVER_HOST}/tourism/${this.props.match.params.id}`)
        .then(res => 
        {
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else // success
                { 
                    console.log("Record sorted")
                }
                this.setState({redirectToDisplayAttractions:true})
            }
            else 
            {
                console.log("Record not deleted")
            }
        })
    }
  
  
    render() 
    {
        return (
            <div>   
                {this.state.redirectToDisplayAttractions ? <Redirect to="/DisplayAttractions"/> : null}                      
            </div>
        )
    }
}