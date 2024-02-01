// import { useState } from "react";



// export function ReusableCard({ card }) {


//   return <div>
//     {card.map((card) => {
//       return <div style={
//         {
  
//           background: "#8686f5",
//           padding: 30,
//           margin: 4,
//           alignContent: "start",
//           borderRadius: 10,
//           width: 500,
//           height: 285
//         }}>
//         <h2 id="string" style={{
//           margin: 10
//         }}>{card.name}</h2>

//         <h4 style={{
//           margin: 10
//         }} id="string">{card.description}</h4>

//         <h4 style={{
//           margin: 10,
//           fontWeight: "bold"
//         }}>Interests:</h4>
//         <ul style={{
//           margin: 10
//         }} id="string">{card.interests}</ul>
//         {/* <ul style={{
//           margin: 10
//         }} id="string">dancing</ul>
//         <ul style={{
//           margin: 10
//         }} id="string">coding</ul> */}
//         <br />
//         <button onClick={() =>{
//           window.location.href = `${card.socials}`
//         }} style={{
//           background: "#0068e7",
//           margin: 10
//         }}>Linkdin</button>
//         <button onClick={()=>{
//           fetch("http://localhost:3000/remove",{
//             method: "DELETE",
//             body:JSON.stringify({
//                 id: card._id
//             }),
//             headers:{
//                 "Content-type" : "application/json"
//             }

//         })
// .then(async function(res){
// const json = await res.json();
// card = [...card,json]
// //   alert("todo is added")

// })
//         }} style={{
//           background: "#0068e7"
//           , margin: 10
//         }} >DELETE</button>

// <button onClick={} style={{
//           background: "#0068e7"
//           , margin: 10
//         }} >Download</button>
        
//       </div>
//     })}


//   </div>
// }

import React from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export function ReusableCard({ card }) {
  const handleDownload = (cardId) => {
    const targetElement = document.getElementById(`card-${cardId}`);

    html2canvas(targetElement).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/jpeg");
      saveAs(dataUrl, `card_${cardId}.jpg`);
    });
  };

  return (
    <div>
      {card.map((card) => {
        return (
          <div
            key={card._id}
            id={`card-${card._id}`}
            style={{
              background: "#8686f5",
              padding: 30,
              margin: 4,
              alignContent: "start",
              borderRadius: 10,
              width: 500,
              height: 285,
            }}
          >
            <h2 style={{ margin: 10 }}>{card.name}</h2>
            <h4 style={{ margin: 10 }}>{card.description}</h4>
            <h4 style={{ margin: 10, fontWeight: "bold" }}>Interests:</h4>

            <ul>
  {card.interests.map((interest, index) => (
    <li key={index} style={{ margin: 10 }}>{interest}</li>
  ))}
</ul>

        
            <br />
            <button
              onClick={() => {
                window.location.href = `${card.socials[0]}`;
              }}
              style={{ background: "#0068e7", margin: 10 }}
            >
              LinkedIn
            </button>
            <button
              onClick={() => {
                window.location.href = `${card.socials[1]}`;
              }}
              style={{ background: "#0068e7", margin: 10 }}
            >
              Github
            </button>
            <button
              onClick={() => {
                fetch("http://localhost:3000/remove", {
                  method: "DELETE",
                  body: JSON.stringify({
                    id: card._id,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                })
                  .then(async function (res) {
                    const json = await res.json();
                    card = [...card, json];
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              }}
              style={{ background: "#0068e7", margin: 10 }}
            >
              DELETE
            </button>
            <button
           onMouseEnter={() => {
            buttonStyle.background = "#37ff00"; // Change color on hover
          }}
              onClick={() => handleDownload(card._id)}
              style={{ background: "#0068e7", margin: 10, 
             }}
            >
              Download
            </button>
          </div>
        );
      })}
    </div>
  );
}

 