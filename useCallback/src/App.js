import React, { useCallback } from 'react'
import Comp from "./Comp";

const App = () => {
	const [ name, setName ] = React.useState('');

	const handleChange = (event) => {
		setName(event.target.value);
	}

	const handleChild = useCallback(() => {
		console.log("running in a child component")
	}, [])
	return (
		<div>
			<h2>Name : {name}</h2>
			<input onChange={handleChange} />	
			<Comp handleChild={handleChild} />
		</div>
	)
}

export default App
