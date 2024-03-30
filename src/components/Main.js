import About from './About';
import Projects from './Projects';
import Communication from './Communication';
const Main = () => {
  return (
    <main className='font-inter flex flex-col justify-items-center m-10'>
      <About />
      <Projects />
      <Communication />
    </main>
  );
};

export default Main;
