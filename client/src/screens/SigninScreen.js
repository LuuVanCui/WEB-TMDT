import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { account } from '../actions/orderAction';
import Header from '../components/Header';

export default function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    document.title = 'Đăng nhập - NS3AE';
    if (userInfo) {
      switch (userInfo.role) {
        case 'user':
          dispatch(account("get", userInfo._id));
          props.history.push(redirect);
          break;
        case 'admin':
          props.history.push('/admin/manage-order');
          break;
        case 'shipper':
          props.history.push('/shipper/order-new');
          break;
      }
    }
  }, [userInfo]);
  return (
    <>
      <Header />
      <div className="form" onSubmit={submitHandler}>
        <form>
          <ul className="form-container">
            <li>
              <h2>Đăng nhập</h2>
            </li>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
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
              <button type="submit" className="button primary">Đăng nhập</button>
            </li>
            <li><Link to="/register" className="link">Tạo tài khoản mới?</Link></li>
            <li><Link to="/fogot_password" className="link">Quên mật khẩu</Link></li>
          </ul>
        </form>
      </div>
    </>
  )
}
