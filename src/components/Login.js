import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLogin = () => {
  return (
    <GoogleOAuthProvider clientId='838162187794-p7kppij836rqbt3q23uc6m21mn792b60.apps.googleusercontent.com'>
      <Login></Login>
    </GoogleOAuthProvider>
  );
};

const Login = () => {
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
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error) => console.log(error),
  });
  return <button onClick={() => login()}>Login with Google</button>;
};

export default GoogleLogin;
