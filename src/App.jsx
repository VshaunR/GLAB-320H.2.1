import { useState } from 'react'
import Header from './component/Header/Header';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
function App() {
 
  let styleObj=[{
    color:'blue',
    text:'Yooo jajajajajaja'
  },
  {
    color:'red',
    text:'Yooo jajajajajaja'
  },
  {
    color:'green',
    text:'Yooo jajajajajaja'
  }]

    let mapStyles= styleObj.map((obj)=>{

      return <Content color={obj.color} text={obj.text}/>
    })


  return (
    <>
    <Header />
    {mapStyles}
    <Footer />
    </>
  )
}

export default App
