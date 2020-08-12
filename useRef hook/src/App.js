import React, { useRef } from 'react'

const App = () => {
	const inputRef = useRef(null);
	
	console.log(inputRef)
	React.useEffect(() => {
		console.log("rendering only once")
		inputRef.current.focus();
		inputRef.current.value = "chethan";
		inputRef.current.style.color = 'red';
	})

	return (
		<div>	
			<input ref={inputRef} type="text" placeholder="Enter the text" />
		</div>
	)

}

export default App
