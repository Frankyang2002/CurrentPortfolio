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
import ScreenBorder from './Components/ScreenBorder';
import { ThemeProvider } from './Components/ThemeContext';

import './index.css'

function App() {
  return (
    <ThemeProvider>
        <ScreenBorder></ScreenBorder>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Projects></Projects>
        <Contact></Contact>
        <Logo></Logo>
    </ThemeProvider>
  );
}

export default App;
