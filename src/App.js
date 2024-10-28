import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'

import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Logo from './Components/Logo'

import './index.css'

function App() {
  return (
    <div className="App bg-red-400">
      <Header></Header>

      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Resume></Resume>
      <Projects></Projects>
      <Contact></Contact>
      <Logo>  </Logo>
    </div>
  );
}

export default App;
