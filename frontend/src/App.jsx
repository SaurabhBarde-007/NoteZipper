import './App.css'
import './bootstrap.min.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import { BrowserRouter , Route ,Routes} from "react-router-dom"
import MyNotes from './screens/MyNotes/MyNotes';

const App= ()=> {

  return (
    <BrowserRouter>
      <Header/>
      <main >
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/mynotes' element={<MyNotes/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  ) 
}

export default App
