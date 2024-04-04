import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import AboutUpdate from './components/AboutUpdate';
import Projects from './components/Projects';
import Utils from './components/Utils';
import Communication from './components/Communication';
import NotFound from './components/NotFound';
import Login from './components/Login';
import { AuthProvider } from './components/AuthContext';
import ProjectForm from './components/ProjectForm';

function App() {
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LayoutWithHeader />}>
              <Route index element={<Main />}></Route>
              <Route path='about' element={<About />}></Route>
              <Route path='about/update' element={<AboutUpdate />}></Route>
              <Route path='projects' element={<Projects />}></Route>
              <Route path='projects/create' element={<ProjectForm />}></Route>
              <Route path='utils' element={<Utils />}></Route>
              <Route path='communication' element={<Communication />}></Route>
              <Route path='login' element={<Login />}></Route>
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </AuthProvider>
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
