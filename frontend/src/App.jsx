import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReusableCard } from './component/ReusableCard'
import { PersonsData } from './component/PersonsData'
import Header from './component/Header'

function App() {
  const [card, setCard] = useState([]);



    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
    // fetch("http://localhost:3000/cards")
    // .then(async function(res){
    //   const json = await res.json();
    //     setCard(json.cards);
      
    // })
 


  return (
    <div style={{
      margin: 40,
      padding: 30
    }}>
      <Header/>
      <PersonsData card ={card} setCard = {setCard}/>
<ReusableCard card ={card} />

    </div>
  )
}

export default App
