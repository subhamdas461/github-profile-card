import React, { Component } from 'react';
import Main from './Components/Main'
import  './index.css'
// import Users from './UserAPI'

class App extends Component{
    constructor(){
        super();
        this.state={
            res : [],
            isLoading: true
        }
       
    }
    componentDidMount(){
        this.getData();  
    }
    getData = () =>{
        // this.setState({
        //     isLoading : false,
        //     res : Users,
           
        // })
        fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(data=>this.setState({
            res : data,
            isLoading : false
        })) 


      
    }
    render() { 
        const {res} = this.state
        console.log(res.length,res)
        let limit = res.message ? <> {res.message} </> : "";
        if(limit !== ""){
            return (<p style = {{color:"#fff"}}>{limit}</p>)
        }
        var name = res.map(e=>{
          
            var show= (this.state.isLoading) ? <h2>Loading...</h2> :
                   <Main 
                        key={e.id} 
                        name={e.login} 
                        src={e.avatar_url}
                        url={e.html_url}
                        apiUrl={e.url}
                   />
            return show
        })     
        return ( 
            <>
               {name}
            </>
         );
    }
}
 
export default App;