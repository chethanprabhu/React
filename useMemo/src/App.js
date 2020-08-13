import React, { useMemo } from 'react'

const App = () => {

	const [name, setName]  = React.useState("");
	const [ toggle, setToggle ] = React.useState(false);
	const loop = () => {
		var count = 0;
		for(var i = 0; i <= 1000000000; i++) {
			count+=1;
		}
		return count;
	}

	const loopCount = useMemo(() => {
		return loop();
	}, [toggle])

	return (
		<div >
			<h1 style={toggle ? { color: 'red' }: { color: 'blue' }}>Toggle Color</h1>
			<h2>Name is: {name}</h2>
			<button onClick={() => setToggle(!toggle)}>toggle</button>
			<input onChange={(e) => setName(e.target.value)} />
			<h4>looped: {loopCount} times</h4>

		</div>
	)
}

export default App
