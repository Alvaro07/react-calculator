import React from 'react';
import Calculator from '../Calculator/Calculator';

// app.js
// App component

class App extends React.Component {

	componentDidMount = () => {
		document.title = "Your React Calculator";
	}

	render(){
		return(
			<div className="app-wrap">
				<Calculator />
			</div>	
		)
	}
	
}

export default App;