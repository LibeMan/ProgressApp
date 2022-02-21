import React, {useEffect} from 'react'
import { initializeCards } from './reducers/cardReducer'
import { useDispatch } from 'react-redux'
import GoalCardList from './components/GoalCardList'
import CardForm from './components/CardForm'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeCards()) 
  },[dispatch]) 

  return (
    <div>
      <h1>PlantApp</h1>
      <GoalCardList/>
      <CardForm/>
    </div>
    
  )
}

export default App;
