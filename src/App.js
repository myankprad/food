import React from 'react';
import './App.css';
import Meal from './components/Meal';
import "./components/style.css"
import { Route, Routes } from 'react-router-dom';
import Recipeinfo from './components/Recipeinfo';

function App() {
  return (
  <>
   <Routes>
   <Route path='/' element={ <Meal />}/>
   <Route path='/:MealId' element={ <Recipeinfo />}/>
   </Routes>
  </>
  );
}

export default App;
