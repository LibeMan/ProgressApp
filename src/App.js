import React, {useEffect} from 'react'
import GoalCardList from './components/GoalCardList'
import { initializeCards } from './reducers/cardReducer'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeCards()) 
  },[dispatch]) 

  return (
    <div>
      <h1>yoyo</h1>
      <GoalCardList/>
    </div>
    
  )
}

export default App;
