import React, { useReducer } from 'react'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const reducer = (state, action) => {
	switch(action.type) {
		case 'increment': return state.count < action.limit ? { count: state.count + 1 } : {count: state.count};
		case 'decrement': return { count: state.count - 1 }
		default: return state
	}
}

const App = () => {
	const [ state, dispatch ] = useReducer(reducer, { count: 0 })
	return (
		<div>
			<h2>Count: {state.count}</h2>
			<button onClick= {() => dispatch({ type: 'increment', limit: 10 })}>Increment</button>
			<button onClick= {() => dispatch({ type: 'decrement' })} >Decrement</button>
		</div>
	)
}

export default App
