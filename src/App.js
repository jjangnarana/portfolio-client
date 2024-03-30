import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Utils from './components/Utils';
import Communication from './components/Communication';
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutWithHeader />}>
            <Route index element={<Main />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='utils' element={<Utils />}></Route>
            <Route path='communication' element={<Communication />}></Route>
            <Route path='login' element={<Login />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const LayoutWithHeader = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};
export default App;
