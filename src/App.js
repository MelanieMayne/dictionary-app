import Dictionary from "./Dictionary.js";

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultSearchedWord="Novel"/>
        </main>
        <footer>
          <p>
            This app is <a href="https://github.com/MelanieMayne/dictionary-app" target="_blank" rel="noreferrer">Open-Source Coded</a> by <a href="https://cosmic-daffodil-494003.netlify.app/" target="_blank" rel="noreferrer">Melanie Richardson</a> and hosted on <a href="https://app.netlify.com/sites/starlit-duckanoo-6a3aa1/deploys" target="_blank" rel="noreferrer">Netlify</a>
          </p>
        </footer>
      </div>  
    </div>
  );
}


