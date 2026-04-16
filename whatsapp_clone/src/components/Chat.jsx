import React from 'react'
import { useParams } from 'react-router-dom'

const ChatScreen = () => {
  const param = useParams();
  console.log(param.chatId); //This will log the URL parameters
  //chatId is the dynamic part provided during Routing
  return (
    <div>Chat</div>
  )
}

export default ChatScreen