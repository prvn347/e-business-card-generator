

import { useState } from "react";

export function PersonsData(props){
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [interests,setInterests] = useState([])
    const [socials,setSocials] = useState("")

    return ( <div style={{
        // color: "#242424"
    }}>
<input style={{
            padding: 15,
            margin: 10,
            background: "#1a1a1a",
            borderRadius:8,
            border: 1 ,
            paddingRight: 6,
            margin:5
        }}  type="text" placeholder="Enter Your Name" onChange={function(e){
    const value  = e.target.value
    setName(e.target.value)
}} />
<br />
<input style={{
            padding: 15,
            margin: 10,
            background: "#1a1a1a",
            borderRadius:8,
            border: 1 ,
            paddingRight: 20,
            margin:5

        }}  type="text" placeholder="Tell me about yourself " onChange={function(e){
    const value  = e.target.value
    setDescription(e.target.value)
}} />
<br />
<input style={{
            padding: 15,
            margin: 10,
            background: "#1a1a1a",
            borderRadius:8,
            border: 1 ,
            paddingRight: 32,
            margin:5
        }}  type="text" placeholder="Enter interests separated by commas" onChange={function(e){
    const value  = e.target.value.trim();
    const arrayValue = value.split(',').map(item => item.trim());
    setInterests(arrayValue)
}} /> <br />
<input style={{
            padding: 15,
            margin: 10,
            background: "#1a1a1a",
            borderRadius:8,
            border: 1 ,
            paddingRight: 45,
            margin:5
        }}  type="text" placeholder="Enter Linkedin,Github Url" onChange={function(e){
    const value  = e.target.value.trim()
    const arrayValue = value.split(',').map(item => item.trim());
    setSocials(arrayValue)
}} />
<br />


<button style={{
   padding: 22,
   margin: 4
}} onClick={() => {
    fetch("http://localhost:3000/cards",{
        method: "POST",
        body:JSON.stringify({
            name: name,
            description: description,
            interests: interests,
            socials:socials
        }),
        headers:{
            "Content-type" : "application/json"
            

    }
})
.then(async function(res){
const json = await res.json();
props.card = [...props.card,json]
//   alert("catodo is added")

}).catch(error => {
    console.error('Error:', error);
  });
}}> Create Your business card</button>


<button style={{
   padding: 22,
   margin: 4,
}} onClick={() => {

    fetch("http://localhost:3000/cards")
    .then(async function(res){
      const json = await res.json();
        props.setCard(json.cards);
      
    }).catch(error => {
    console.error('Error:', error);
  });
}}> See Your cards</button>

    </div>
    )
}