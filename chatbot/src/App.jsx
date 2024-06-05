import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageInput, TypingIndicator, Message } from '@chatscope/chat-ui-kit-react'

const API_KEY = "sk-proj-jxnN9fZex1Obp3ej5wNET3BlbkFJfeugdXofEWQfIpMGgfIz";

function App() {
  const [typing,setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello I am Jarvis! How can I help you ??",
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

    setTyping(true);

    await processMessageToJarvis(newMessages);

  }

  async function processMessageToJarvis(chatMessages){

    let apiMessage = chatMessages.map((messageObject)=>{
      let role = "";
      if(messageObject.sender === "Jarvis"){
        role = "assistant"
      }
      else{
        role = "user"
      }
      return {role:role,content:messageObject.message}
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I new to that concepts."
    }

    const apiRequestBody = {
      "model" : "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessage
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",{
      method: "POST",
      headers:{
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json();
    }).then((data)=>{
      // console.log(data.choices[0].message.content);
      try {
        setMessages(
          [...chatMessages,{
            message: data.choices[0].message.content,
            sender: "Jarvis",
            direction: "incoming",
          }]
        )
      } catch (error) {
        setMessages(
          [...chatMessages,{
            message: data.error.message,
            sender: "Jarvis",
            direction: "incoming",
          }]
        )
      }
      setTyping(false);
    })

  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "620px", width: "600px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
            scrollBehavior='smooth'
            typingIndicator={typing ? <TypingIndicator content="Jarvis is typing..."/> : null}
            >
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
