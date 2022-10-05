import React from "react";
import "./main.css";
import Card from "./questionCard";
import { useState } from "react";
import { useEffect } from "react";

export default function Main() {
  const [btnType, setBtnType] = useState("");
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    if (btnType === "interesting") {
      const url =
        "https://api.stackexchange.com/2.3/questions?pagesize=6&order=desc&sort=activity&site=stackoverflow";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => setResponseData(data.items));
    }
    if (btnType === "featured") {
      const url =
        "https://api.stackexchange.com/2.3/questions/featured?pagesize=6&order=desc&sort=activity&site=stackoverflow";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => setResponseData(data.items));
    }

    if (btnType === "hot") {
      const url =
        "https://api.stackexchange.com/2.3/questions?pagesize=6&order=desc&sort=hot&site=stackoverflow";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => setResponseData(data.items));
    }

    if (btnType === "week") {
      const url =
        "https://api.stackexchange.com/2.3/questions?pagesize=6&order=desc&sort=week&site=stackoverflow";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => setResponseData(data.items));
    }

    if (btnType === "month") {
      const url =
        "https://api.stackexchange.com/2.3/questions?pagesize=6&order=desc&sort=month&site=stackoverflow";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => setResponseData(data.items));
    }
  }, [btnType]);

  function createCard(item) {
    return (
      <Card
        key={item.question_id}
        title={item.title}
        tag={[...item.tags]}
        lastModified={item.last_activity_date}
        view_count={item.view_count}
        answers_count={item.answer_count}
        link = {item.link}
      />
    );
  }

  return (
    <div className="container">
      <div className="menu">
        <button onClick={() => setBtnType("interesting")} className="btn">
          Interesting
        </button>
        <button onClick={() => setBtnType("featured")} className="btn">
          featured
        </button>
        <button onClick={() => setBtnType("hot")} className="btn">
          hot
        </button>
        <button onClick={() => setBtnType("week")} className="btn">
          week
        </button>
        <button onClick={() => setBtnType("month")} className="btn">
          month
        </button>
      </div>
      <div className="midpanel">
        {responseData ? responseData.map(createCard) : null}
        {console.log(responseData)}
      </div>
    </div>
  );
}
