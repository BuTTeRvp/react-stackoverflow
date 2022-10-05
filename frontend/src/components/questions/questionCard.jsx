import React from "react";
import "./questionCard.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="question">
      <a href={props.link} style={{height:"100%"}}>{props.title}</a>
      </div>
      <div className="tag-container">
        <p className="tag">Tags : {props.tag}</p>
      </div>
      <p>Last update : {props.lastModified}</p>
      <div style={{display:"flex", marginBottom:"5px" }}>
        <p>Views : {props.view_count}</p>
        <p>Answers : {props.answers_count}</p>
      </div>
    </div>
  );
}
