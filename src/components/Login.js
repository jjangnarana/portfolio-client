import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import google from '../assets/images/login/google-SI.svg';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
const GoogleLogin = () => {
  return (
    <GoogleOAuthProvider clientId='838162187794-p7kppij836rqbt3q23uc6m21mn792b60.apps.googleusercontent.com'>
      <Login></Login>
    </GoogleOAuthProvider>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useAuth();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(
          'http://localhost:3002/auth/google/token',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_token: tokenResponse.access_token,
            }),
            credentials: 'include',
          }
        );
        const data = await response.json();
        setUser(data);
        setIsLoggedIn(true);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error) => console.log(error),
  });
  return (
    <div className='flex flex-col justify-center items-center child:m-2 text-sm'>
      <p>회원가입 없이 간편하게 로그인</p>
      <button onClick={() => login()}>
        <img src={google} alt='google oauth' />
      </button>
    </div>
  );
};

export default GoogleLogin;
