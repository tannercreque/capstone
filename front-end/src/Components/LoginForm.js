import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {

    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSignup= event => {
        event.preventDefault();

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: {
                username: signupUsername,
                password: signupPassword
            } 
        })
    })
    .then(response => response.json())
    .then(newUser => console.log(newUser))

    setSignupUsername('')
    setSignupPassword('')
}

const handleLogin= event => {
    event.preventDefault();

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: {
            username: loginUsername,
            password: loginPassword
        } 
    })
})
.then(response => response.json())
.then(result => {
  if (result.error) {
    console.error(result.error)
  } else {
    console.log('token', result.token)
    //Routes or something idfk
    localStorage.setItem('token', result.token)
  }
})

setSignupUsername('')
setSignupPassword('')
}

  const getProfile = _ => {
    fetch('hhtp://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        console.error(result.error)
      } else {
        console.log(result)
      }
    })
  }

    return(
        <div className="Login">
            <h2>Sign up!</h2>
            <form onSubmit={handleSignup} >
                <input type="text" name="username" placeholder="Username..." value={signupUsername} onChange={event => setSignupUsername(event.target.value)} />
                <input type="password" name="password" placeholder= "Password..." value={signupPassword} onChange={event => setSignupPassword(event.target.value)} />
                <input type="submit" value="signup" />
            </form>

            <h2>Login!</h2>
            <form onSubmit={handleLogin} >
                <input type="text" name="username" placeholder="Username..." value={loginUsername} onChange={event => setLoginUsername(event.target.value)} />
                <input type="password" name="password" placeholder= "Password..." value={loginPassword} onChange={event => setLoginPassword(event.target.value)} />
                <input type="submit" value="login" />
            </form>

          <button onClick={getProfile}>Profile</button>
        </div>
    )
}

export default LoginForm;