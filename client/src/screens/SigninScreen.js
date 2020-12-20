import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';

export default function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const rediect = props.location.search ? props.location.search.split('=')[1] : '/';

  const { userSignin } = useSelector((state) => state.userSignin);
  //const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(rediect);
  //   }
  // }, [rediect]);
  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <ul className="form-container">
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>
            <label htmlFor="email">
              Email
          </label>
            <input type="email" name="email" id="email"
              placeholder="Nhập vào email" required onChange={e => setEmail(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"
              placeholder="Nhập vào password" required onChange={e => setPassword(e.target.value)}>
            </input>
          </li>
          <li>
            <button type="submit" className="button primary">Đăng nhập</button>
          </li>
          <li><Link to="/register">Tạo tài khoản mới?</Link></li>
        </ul>
      </form>
    </div>
  )
}
