import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from '../App'

const store = createStore((state = 0, action) => { // es un reducer!
  switch (action.type) {
    case 'incrementar': {
      return state + 1
    }
    case 'decrementar': {
      return state - 1
    }
    case 'set': {
      return action.payload
    }
    default:
      return state
  }
})

console.log(store.getState())
store.dispatch({ type: 'lala' })
console.log(store.getState())
store.dispatch({ type: 'incrementar' })
console.log(store.getState())
store.dispatch({ type: 'decrementar' })
console.log(store.getState())
store.dispatch({ type: 'set', payload: 15 })
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
