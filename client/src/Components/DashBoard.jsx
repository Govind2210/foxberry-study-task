import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./DashBoard.css";

function DashBoard() {
  const array = [
    {
      name: "maths",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1635960771phpkbs5dH.jpeg",
      timer: "01 : 00 : 00",
    },
    {
      name: "history",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1635960771phpkbs5dH.jpeg",
      timer: "01 : 00 : 00",
    },
    {
      name: "computer",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1635960771phpkbs5dH.jpeg",
      timer: "01 : 00 : 00",
    },
    {
      name: "Science",
      image:
        "https://images.shiksha.com/mediadata/images/articles/1635960771phpkbs5dH.jpeg",
      timer: "01 : 00 : 00",
    },
  ];

  return (
    <>
      <Header  />
      <h1 className="my-5">Study Material </h1>
      <section className="main-content">
        {array.map((item, i) => {
          return (
            <div className="maine-conatin-notes">
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <img src={item.image} className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                          <br></br>
                          <b>Time to read : {item.timer}</b>
                        </p>
                        <a href="/study" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
export default DashBoard;
