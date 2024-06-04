import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageInput, TypingIndicator, Message } from '@chatscope/chat-ui-kit-react'

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello I am Jarvis !",
      sender: "Jarvis",
      direction: "incoming",
    }
  ])

  const handleSend = async(message)=>{
    const newMessage = {
      message: message,
      sender: "user",
    }

    const newMessages = [...messages,newMessage];

    setMessages(newMessages);
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "620px", width: "600px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message,i)=>{
                return <Message key={i} model={message}/>
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend}>

            </MessageInput>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App
