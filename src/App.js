import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Registerpage } from './Components/Register';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Loginpage } from './Components/Login';
import { Menu } from './Components/menu';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Menupage } from './Components/Menupage';
import { Orderpage } from './Components/Order';
import { Contact } from './Components/Contact';
import { Ownerpage } from './Components/Owner';
import { Details } from './Components/Details';
import { Update } from './Components/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<Home/>]}></Route>
    <Route path='/About' element={[<About/>]}></Route>
    <Route path='/Menupage' element={[<Menupage/>]}></Route>
    <Route path='/details' element={[<Details/>]}></Route>
    <Route path='/update/:fid' element={[<Update/>]}></Route>
    <Route path='/Orderpage' element={[<Orderpage/>]}></Route>
    <Route path='/Orderpage/:fid' element={[<Orderpage/>]}></Route>
    <Route path='/Ownerpage/:id' element={[<Ownerpage/>]}></Route>
    <Route path='/Contact' element={[<Contact/>]}></Route>
    <Route path='/Registerpage' element={[<Registerpage/>]}></Route>
    <Route path='/Loginpage' element={[<Loginpage/>]}></Route>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
