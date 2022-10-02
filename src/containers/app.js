import React from "react";
import Cardlist from "../components/cardlist";
import Seachbox from '../components/searchbox';
import Scroll from '../components/scroll';

class App extends React.Component {
 constructor(){
    super()
    this.state={
        robots:[],
        Searchfield:''
    }
 }
 onSearchchange=(event)=>{
    this.setState({Searchfield:event.target.value})
   
    
 }
 componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users')
    .then(response =>  response.json())

   .then(user=> this.setState({robots:user}));
 }
   render (){
    const filteredarray=this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
    })
   if(this.state.robots.length===0){
return (
    <div>
        <img src="loading.png" alt="loading"></img>
    </div>
)
   }
   else{
    return ( 
       <div className="tc ">
        <img className="ma4" src="FRIENDS.png" alt="friends"></img>
        <Seachbox Searchchange={this.onSearchchange}/>
        <Scroll>
        <Cardlist robots={filteredarray}/>
        </Scroll>
    </div>
   );
   }
   } 

}
export default App;