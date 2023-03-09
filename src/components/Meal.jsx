import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import Recepieindex from './Recepieindex'

const Meal = () => {
   
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item, setItem] = useState()
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(()=>{
    fetch(url).then(res=> res.json()).then(data=>{
        console.log(data.meals)
        setItem(data.meals)
        setShow(true)

    })
    },[])


  const setIndex=(alpha)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }

  const searchRecipe=(evt)=>{
    if(evt.key == "Enter"){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
  }

  return (
    <>
        <div className="main">
            <div className="heading">
                <h1>Search Food Recipe</h1>
                <h4>Food is something that bring us all together.</h4>
            </div>
            <div className="searchBox">
                <input type="text" className='search-bar' onChange={e=>setSearch(e.target.value)} 
                onKeyPress={searchRecipe} />
                
            </div>
            <div className="container">
               
                 {
                    show ? <MealItem data={item} /> : "NOT FOUND"
                 }
            </div>
            <div className="indexContainer">
                <Recepieindex alphaIndex={(alpha)=>setIndex(alpha)} />
            </div>
        </div>
    </>
  )
}

export default Meal