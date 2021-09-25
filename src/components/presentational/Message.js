import React from "react"
import "./Message.css"

export default function Message({userName, message, time}){
    return <div className="message">
            <div className="author">
                <div>{userName}</div>
                <div>{time}</div>
            </div>
                <div>{message}</div>
           </div>
}