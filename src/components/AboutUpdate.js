import kimtokki from '../assets/images/kimtokkis/증명사진.jpeg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const About = () => {
  const { setRefreshKey } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [introduction, setIntroduction] = useState('');

  useEffect(() => {
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
      });
  }, []);

  return (
    <article className='child:m-10'>
      <h2 className='font-hanna text-center text-xl'>김토끼's 수정</h2>
      <form
        className='grid grid-cols-2 gap-4'
        action='http://localhost:3002/about/update'
        method='post'
      >
        <div>
          {'이름 : '}
          <input
            className='border-2 ml-4 border-black'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          {'생년월일 : '}
          <input
            className='border-2 border-black'
            type='text'
            name='birthday'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div>
          {'연락처 : '}
          <input
            className='border-2 border-black'
            type='text'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          {'이메일 : '}
          <input
            className='border-2 border-black ml-4'
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='col-span-2 flex flex-col justify-center child:mt-2'>
          <h6>자기소개</h6>
          <img src={kimtokki} width='250' alt='증명사진' />
          <textarea
            rows={20}
            cols={30}
            className='border-2 border-black'
            name='introduction'
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </div>
        <input
          className='flex'
          type='submit'
          value='저장'
          onClick={async (event) => {
            event.preventDefault();

            const formData = { name, birthday, phone, email, introduction };

            fetch('http://localhost:3002/about/update', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                setRefreshKey((current) => current + 1);
              })
              .catch((error) => console.error(error))
              .finally(navigate('/about'));
          }}
        />
        <div id='resume'>이력서</div>
      </form>
    </article>
  );
};

export default About;
