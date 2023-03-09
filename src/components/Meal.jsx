import React from 'react'
import MealItem from './MealItem'
import Recepieindex from './Recepieindex'

const Meal = () => {
  return (
    <>
        <div className="main">
            <div className="heading">
                <h1>Search Food Recipe</h1>
                <h4>Food is something that bring us all together.</h4>
            </div>
            <div className="searchBox">
                <input type="text" className='search-bar' />

            </div>
            <div className="container">
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />

            </div>
            <div className="indexContainer">
                <Recepieindex />
            </div>
        </div>
    </>
  )
}

export default Meal