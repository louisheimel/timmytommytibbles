# Lifting State Up
Timmy and Tommy Tibbles are two young brothers who are fighting with each other.  Mrs. Tibbles put Timmy and Tommy in time-out chairs in opposite sides of the house.  Timmy wants to talk to Tommy, but Mrs. Tibbles says he needs to calm down and sit in his time-out chair.  

Mrs. Tibbles tells Timmy that neither he nor Tommy are allowed to talk to each other directly.  Tommy and Timmy are also disallowed from speaking to Mrs. Tibbles directly.  However, Mrs. Tibbles gives Timmy a walkie talkie which he can use to talk to Mrs. Tibbles, who may or may not decide to pass the message on to Tommy on Timmy's behalf.

This is an analogy for following React application:

```
class Timmy extends Component {                                                         
  sendMessage = e => {                                                                  
    this.props.walkieTalkie(e.target.value);                                            
  };                                                                                    
                                                                                        
  render() {                                                                            
    return <input onChange={this.sendMessage} />;                                       
  }                                                                                     
}                                                                                       
                                                                                        
class Tommy extends Component {                                                         
  render() {                                                                            
    return (                                                                            
      <p>Hey Timmy, I heard your message: "{this.props.messageFromTimmy}"</p>           
    );                                                                                  
  }                                                                                     
}                                                                                       
                                                                                        
class MrsTibble extends Component {                                                     
  state = {messageToTommy: ''};                                                         
  walkieTalkie = message => {                                                           
    console.log(message);                                                               
    this.setState({messageToTommy: message});                                           
  };                                                                                    
  render() {                                                                            
    return (                                                                            
      <div className="App">                                                             
        <Timmy walkieTalkie={this.walkieTalkie} />                                      
        <Tommy messageFromTimmy={this.state.messageToTommy} />                          
      </div>                                                                            
    );                                                                                  
  }                                                                                     
}  
```

Timmy and Tommy Tibbles are two young brothers who are fighting with each other.  Mrs. Tibbles put Timmy and Tommy in time-out chairs in opposite sides of the house.  Timmy wants to talk to Tommy, but Mrs. Tibbles says he needs to calm down and sit in his time-out chair.  

Mrs. Tibbles tells Timmy that neither he nor Tommy are allowed to talk to each other face to face.  Tommy and Timmy are also disallowed from talking to Mrs. Tibbles face to face.

**"talking face to face" in this example is equivalent to "passing props" from component to component in a React application.  Props can only be passed from a *Parent* component to a *Child* component.**

However, Mrs. Tibbles gives Timmy a walkie talkie which he can use to talk to Mrs. Tibbles, who may or may not decide to pass the message on to Tommy on Timmy's behalf.

**A *Parent* component can pass *functions* to it's children as props.  This allows communication between a child component and it's parent.  It can also allow a child component to indirectly change the state of it's parent.**

For more on this, check out the React documentation: [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)

Bonus: Here's another example of the same concept:
[https://github.com/louisheimel/lifting-state-up](https://github.com/louisheimel/lifting-state-up)