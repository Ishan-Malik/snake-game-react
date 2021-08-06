import React,{Component} from 'react';
import './App.css';
class Food extends Component{
    render()
    {
        const Style={
         left:`${this.props.fooding[0]}%`,
         top:`${this.props.fooding[1]}%`,
        }
        return(
            <div className="snake-food" style={Style}></div>
        )
    }
}
export default Food;