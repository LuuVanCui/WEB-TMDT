import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  // const userRegister = useSelector((state) => state.userRegister);
  // const { userInfo, loading, error } = userRegister;

  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(register(name, email, password, rePassword));
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  // }, [userInfo]);

  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <ul className="form-container">
          <li>
            <h2>Tạo tài khoản</h2>
          </li>
          {/* {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>} */}

          <li>
            <label htmlFor="name">
              Tên
          </label>
            <input type="name" name="name" id="name"
              placeholder="Nhập vào tên của bạn" required onChange={e => setName(e.target.value)}>
            </input>
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
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" name="password"
              placeholder="Nhập vào mật khẩu" required onChange={e => setPassword(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="password">Xác nhận mật khẩu</label>
            <input type="password" id="password" name="password"
              placeholder="Nhập vào mật khẩu" required onChange={e => setRePassword(e.target.value)}>
            </input>
          </li>
          <li>
            <button type="submit" className="button primary">Tạo tài khoản</button>
          </li>
          <li><Link to="/signin">Tôi đã có tài khoản.</Link></li>
        </ul>
      </form>
    </div>
  )
}
