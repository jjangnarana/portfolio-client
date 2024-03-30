import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import nfimg from '../assets/images/404notfound.webp';
import logo from '../assets/images/favicon.png';
const NotFound = () => {
  const param = useParams();
  console.log(param);
  return (
    <div className='flex-col justify-center items-center container mx-auto text-center child:m-10 font-inter'>
      <div>
        <img
          className='mx-auto'
          src={nfimg}
          alt='404 NOT FOUND symbol'
          width={300}
        />
      </div>
      <h1 className='text-2xl'>서버에서 입력하신 페이지를 찾을 수 없습니다.</h1>
      <p>아래 로고로 사이트로 돌아갈 수 있습니다.</p>
      <div className='grid grid-cols-3 justify-center font-hanna text-2xl'>
        <div className='col-start-2 col-end-3 flex justify-center items-center cursor-pointer'>
          <Link to='/'>
            <img
              className='border-2 p-2 animate-blink'
              src={logo}
              width='200'
              alt=''
            />
            <p>김토끼 포트폴리오</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
