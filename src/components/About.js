import kimtokki from '../assets/images/kimtokkis/증명사진.jpeg';
import favicon from '../assets/images/favicon.png';
import { useAuth } from './AuthContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn, userData, refreshKey } = useAuth();
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [introduction, setIntroduction] = useState('');

  useEffect(() => {
    console.log('render');
    setIsLoading(true);
    fetch('http://localhost:3002/about')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const aboutData = data[0];
          setName(aboutData.name || '');
          setBirthday(aboutData.birthday || '');
          setPhone(aboutData.phone || '');
          setEmail(aboutData.email || '');
          setIntroduction(aboutData.introduction || '');
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refreshKey]);

  const Loading = () => {
    return <span>Loading</span>;
  };
  return (
    <article className='child:m-10'>
      <h2 className='font-hanna text-center text-xl'>김토끼's</h2>
      {userData && userData.user.id === '104685302919524079142' ? (
        <>
          <Link to='/about/update'>수정</Link>
          <span>{refreshKey}</span>
        </>
      ) : (
        ''
      )}
      <div className='grid grid-cols-2 gap-4'>
        {isLoggedIn ? (
          <>
            <div id='name'>이름 : {!isLoading ? name : <Loading />}</div>
            <div id='birthday'>
              생년월일 : {!isLoading ? birthday : <Loading />}
            </div>
            <div id='phone'>연락처 : {!isLoading ? phone : <Loading />}</div>
            <div id='email'>이메일 : {!isLoading ? email : <Loading />}</div>
          </>
        ) : (
          <>
            <div id='name'>이름 : 비밀</div>
            <div id='birthday'>생년월일 : 비밀</div>
            <div id='phone'>연락처 : 비밀</div>
            <div id='email'>이메일 : 비밀</div>
          </>
        )}
      </div>
      <div className='flex flex-col justify-center'>
        <h6>자기소개</h6>
        {isLoggedIn ? (
          <img src={kimtokki} width='250' alt='증명사진' />
        ) : (
          <img src={favicon} width='250' alt='증명사진' />
        )}
        {isLoggedIn ? (
          <p id='introduction'>{introduction}</p>
        ) : (
          <p id='introduction'>로그인 후 정보를 확인 하세요!</p>
        )}
      </div>
      <div id='resume'>이력서</div>
    </article>
  );
};

export default About;
