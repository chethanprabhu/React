import React, { useRef } from 'react'

const App = () => {
	const inputRef = useRef(null);
	
	console.log(inputRef)
	React.useEffect(() => {
		console.log("rendering only once")
		inputRef.current.focus();
		inputRef.current.value = "chethan";//not recommended way. Just for example
		inputRef.current.style.color = 'red';//not recommended way. Just for example

		//can you see my screen
	})

	return (
		<div>	
			<input ref={inputRef} type="text" placeholder="Enter the text" />
		</div>
	)

}

export default App
