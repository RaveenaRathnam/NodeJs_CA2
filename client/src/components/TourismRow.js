import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class TourismRow extends Component 
{    
    render() 
    {
        return (
            <tr>
                <td>{this.props.tourism.name}</td>
                <td>{this.props.tourism.telephone}</td>
                <td>{this.props.tourism.address.addressRegion}</td>
                <td>{this.props.tourism.address.addressLocality}</td>
   <td>
                    <Link className="green-button" to={"/Modify/" + this.props.tourism._id}>Modify</Link>                    
                    <Link className="red-button" to={"/Delete/" + this.props.tourism._id}>Delete</Link>   
                </td>
            </tr>
        )
    }
}