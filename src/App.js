import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';
import About from './components/About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
		}
	}

	return (
		<>
		<Router>
		<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
		<div className="container my-3">
			<Routes>
				<Route exact path="/" element={<Form heading="Enter the text to analyze below" mode={mode} />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
		</div>
		</Router>
		</>
	);
}

export default App;
