import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-3">
      <Form heading="Enter the text to analyze below" />
    </div>
    {/* <About /> */}
    </>
);
}

export default App;
