import logo from './images/logo_white_words.png'; // 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pre-order now
        </p>
        <a
          className="App-link"
          href="https://github.com/Earthbreak-Games"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
