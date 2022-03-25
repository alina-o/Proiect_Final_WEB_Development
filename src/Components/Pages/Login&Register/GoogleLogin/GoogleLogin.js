import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../GoogleLogin/RefreshToken';
import  "../Login.css";

const clientId =
  '288845753777-gk8fq1044opjtm5rpqf542n3kan4rmee.apps.googleusercontent.com';

function LoginGoogle() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
    <div>
      <GoogleLogin
        className='google'
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;