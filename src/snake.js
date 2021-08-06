import React,{Component} from 'react';
import './App.css';
class Snake extends Component{
    render()
    {
   return(
    <div>
        {this.props.snakeDote.map((data,i)=>{
            const Style={
                left:`${data[0]}%`,
                top:`${data[1]}%`
            }
            return(
            <div className="snake-dot" style={Style} key={i}></div>
            )
        })}
    </div>
   );
    }
}
export default Snake;