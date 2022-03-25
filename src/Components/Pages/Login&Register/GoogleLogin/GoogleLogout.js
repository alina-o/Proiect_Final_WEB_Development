import React from 'react';
import { GoogleLogout } from 'react-google-login';
import "../Login.css";

const clientId =
  '288845753777-gk8fq1044opjtm5rpqf542n3kan4rmee.apps.googleusercontent.com';

function LogoutGoogle() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
      className='google'
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default LogoutGoogle;