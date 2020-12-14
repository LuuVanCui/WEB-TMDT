import React, { useEffect } from 'react';

function SigninScreen(props) {
  useEffect(() => {
    document.title = "Đăng nhập - NS3AE";
  }, []);

  return <div className="form">
    <form>
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email">
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password">
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
      </ul>
    </form>
  </div>
}

export default SigninScreen;