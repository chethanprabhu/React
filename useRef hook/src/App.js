import React, { useState, useRef } from 'react'

const App = () => {
	const data = useRef(0);
	const [name, setName] = useState("");
	
	// console.log(inputRef)
	React.useEffect(() => {
		if(name[(name.length - 1)] === "a") {
			data.current = data.current + 1;
		}
	})

	return (
		<div>	
			<h3>'a' was repeated: {data.current - 1} times</h3>
			<input onChange={(e) => {
				setName(e.target.value)
				}} type="text" />
		</div>
	)

}

export default App
