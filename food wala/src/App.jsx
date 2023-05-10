import { useEffect, useState } from 'react'

import './App.css'

function App() {

    useEffect(()=>{
        Getdata()
    },[])

    async function Getdata(){
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING")
     const json = await data.json()
     console.log(json)
    }

  
}

export default App
