import React from "react"
import Message from './components/presentational/Message';
import {format} from "date-fns";

import './App.css';

function App() {
  const userName = "Harshit Chauhan";
  const [messages, setMessages]  = React.useState([]);
  const [currentMessage, setCurrentMessage] = React.useState("")

  const handleInput = e => {
    setCurrentMessage(e.target.value)
  }

  const handleSubmit = e => {
    if(e.keyCode === 13){
      let temp = [...messages];
      temp.push({message: currentMessage, time: format(new Date(), "hh:mm")});
      setMessages(temp);
      setCurrentMessage("");
    }    
  }

  return (
    <div className="App">
      <div className="chatbox">
       <div className="message-section-container">
          <div>In Call Messages</div>
          <div className="message-section">
            {
            messages.map((item, index) => <Message key={index + item.message} 
                                                  userName={userName}
                                                  message = {item.message}
                                                  time = {item.time}/>)                                                      
            }
          </div>
        </div>
        <div className="bottom-section">
          <div className="inputcontainer">
            <input type="text" 
                  onChange={handleInput} 
                  placeholder="Send a message to everyone"
                  onKeyDown={handleSubmit}/>
          </div>
        </div>
    </div>
  </div>
  );
}

export default App;
