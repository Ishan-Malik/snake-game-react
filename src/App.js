import React,{Component} from 'react';
import './App.css';
import Snake from './snake';
import Food from './food';
const createfunc=()=>{
let min=1;
let max=98;
let x=Math.floor((Math.random() *(max-min+1)+min)/2)*2;
let y=Math.floor((Math.random() *(max-min+1)+min)/2)*2;
return [x,y];
}
class App extends Component{
  state={
    food:createfunc(),
    speed:200,
    direction:"RIGHT",
    snakeDote:[
      [0,0],
      [2,0]
    ]
  }
  componentDidUpdate()
  {
    this.checkboundary();
    this.checkcollapse();
    this.checkeat();
  }
  componentDidMount(){
    setInterval(this.movesnake,this.state.speed);
    document.onkeydown=this.onkeydown;
  }
  onkeydown=(e)=>{
  e=e||window.event;
  switch(e.keyCode)
  {
      case 38:
      this.setState({direction:"UP"});
      break;
      case 40:
      this.setState({direction:"DOWN"});
      break;
      case 37:
      this.setState({direction:"LEFT"});
      break;
      case 39:
      this.setState({direction:"RIGHT"});
      break;
      default:
  }
  }
  movesnake=()=>{
    let dots=[...this.state.snakeDote];
    let head=dots[dots.length-1];
    switch(this.state.direction)
    {
        case 'RIGHT':
        head=[head[0]+2,head[1]];
        break;
        case 'UP':
        head=[head[0],head[1]-2];
        break;
        case 'LEFT':
        head=[head[0]-2,head[1]];
        break;
        case 'DOWN':
        head=[head[0],head[1]+2];
        break;
        default:
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDote:dots
    })
  }
  checkboundary=()=>{
    let head=this.state.snakeDote[this.state.snakeDote.length-1];
    if(head[0]>=100 || head[1]>=100 || head[0]<0 || head[1]<0)
    {
      this.gameover();
    }
  }
  checkcollapse=()=>{
    let snake=[...this.state.snakeDote];
    let head=snake[snake.length-1];
    snake.pop();
    snake.forEach(data=>{
      if(data[0]===head[0] && data[1]===head[1])
      {
        this.gameover();
      }
    })
  }
  checkeat=()=>{
    let head=this.state.snakeDote[this.state.snakeDote.length-1];
    let food=this.state.food;
    if(head[0]===food[0] && head[1]===food[1])
    {
      this.setState({
        food:createfunc()
      })
      this.enlargeit();
      this.incspeed();
    }
  }
  enlargeit=()=>{
    let newsnake=[...this.state.snakeDote];
    newsnake.unshift([]);
    this.setState({
      snakeDote:newsnake
    })
  }
  incspeed=()=>{
    if(this.state.speed>10)
    {
      this.setState({
        speed:this.state.speed-10
      })
    }
  }
  gameover=()=>{
  alert("your game is over");
  this.setState({
    food:createfunc(),
    speed:200,
    direction:"RIGHT",
    snakeDote:[
      [0,0],
      [2,0]
    ]
  })
  }
  render(){
  return (
    <div className="snake-box">
    <Snake snakeDote={this.state.snakeDote}/>
    <Food fooding={this.state.food}/>
    </div>
  );
}
}
export default App;
