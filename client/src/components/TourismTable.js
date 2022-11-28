import React, {Component} from "react"
import TourismRow from "./TourismRow"



export default class TourismTable extends Component 
{
    render() 
    {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Telephone</th>
                        <th>Region</th>
                        <th>Location</th>
                        <th> </th>
                    </tr>
                </thead>
                  
                <tbody>
                    {this.props.tourism.map((tourism) => <TourismRow key={tourism._id} tourism={tourism}/>)}
                </tbody>
            </table>      
        )
    }
}