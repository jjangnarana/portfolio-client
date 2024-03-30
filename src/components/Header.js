import { Link } from 'react-router-dom';
import logo from '../assets/images/favicon.png';
const Header = () => {
  return (
    <header className='grid grid-cols-2 grid-rows-2 justify-center items-center font-inter'>
      <div className='row-start-1 row-end-3 mt-4'>
        <div className='flex justify-start'>
          <Link to='/'>
            <div className='flex justify-center'>
              <img src={logo} width='50' alt='토끼를 상징하는 심볼로고' />
            </div>
            <span className='font-hanna text-2xl'>김토끼 포트폴리오</span>
          </Link>
        </div>
      </div>
      <div className='flex justify-end'>
        <Link
          className='text-black font-inter text-sm py-2 3xl mt-10 '
          to='/login'
        >
          로그인
        </Link>
      </div>
      <nav className='grid grid-rows-2'>
        <div id='nav' className='flex justify-end gap-x-8'>
          <Link to='/about'>김토끼's</Link>
          <Link to='/projects'>프로젝트</Link>
          <Link to='/utils'>유틸모음</Link>
          <Link to='/communication'>커뮤니케이션</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
