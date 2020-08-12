import React, { useRef } from 'react'

const App = () => {
	const inputRef = useRef(null);
	
	console.log(inputRef)
	React.useEffect(() => {
		inputRef.current = inputRef.current.value;
	})

	return (
		<div>	
			<input ref={inputRef} type="text" placeholder="Enter the text" />
		</div>
	)

}

export default App
