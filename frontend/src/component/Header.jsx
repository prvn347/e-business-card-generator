// Header.js

import React from 'react';

const Header = () => {
  return (
    <header style={{
        border:5,
        borderRadius:8
    }}>
      <h1 className='Title' style={{
         boxSizing: "border-box",
         width: 350,
         height:100,
         display: "flex",
         alignItems:"center",
         border:7,
         justifyContent: "center",
         alignContent: "baseline",
         padding: 1,
        margin: 2,
        fontSize:20,
       backgroundColor: "rgb(192, 45, 26)",
         color:"#ffffff"
      }}>Your e-business card generater</h1>
    </header>
  );
}

export default Header;