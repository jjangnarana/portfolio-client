import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  // const clientId =
  //   '838162187794-p7kppij836rqbt3q23uc6m21mn792b60.apps.googleusercontent.com';

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.log(error),
  });
  return <button onClick={() => login()}>Login with Google</button>;
};
export default Login;
