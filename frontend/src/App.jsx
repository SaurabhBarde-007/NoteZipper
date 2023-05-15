import './App.css'
import './bootstrap.min.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter , Route ,Routes} from "react-router-dom"
import MyNotes from './screens/MyNotes/MyNotes';

const App= ()=> {

  return (
    <BrowserRouter>
      <Header/>
      <main >
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/mynotes' element={<MyNotes/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  ) 
}

export default App
