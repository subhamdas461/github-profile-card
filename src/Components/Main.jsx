import React, { Component } from 'react';

export default class Main extends Component{
    state={
        followers : 0,
        load: false,
        location : ""
    }
    componentDidMount(){
        this.setState({
            load : true
        })
       fetch(this.props.apiUrl)
       .then(res => res.json())
       .then(data => 
           this.setState({
            followers : data.followers,
            location : data.location ,
            load : false
           }) 
          
        ).catch(e=> console.log("error",e))
        
    }
    render(){
       
        return(
        this.state.load ? <div >Loading...</div>:
         
            <div>     
                    <div className="main">
                        <h2 className="name">{this.props.name}</h2>
                        <img  width="120px" className="img" src={this.props.src} alt="avatar" />
                        <a className="link" href={this.props.url}>Github Profile</a> 
                        <code>{this.state.followers>1000? `${(this.state.followers/1000).toFixed(1)}k`: this.state.followers} followers</code>
                        {this.state.location ? <code>{this.state.location}</code>: null}
                    </div>
               
            </div>
        )
    }
}