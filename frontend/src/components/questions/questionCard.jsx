import React from 'react'
import "./questionCard.css"


export default function Card(props) {
    return (
      <div className='cardcontainer'>
        <div className='card'>
        <div className="question">{props.title}</div>
          <div className='tag-container'>
            <p className='tag'>Tags : {props.tag}</p>
          </div>
        <p>Last update : {props.lastModified}</p>
        <p>Views : {props.view_count}</p>
        <p>Answers : {props.answers_count}</p>
        </div>
        </div>
    )
}