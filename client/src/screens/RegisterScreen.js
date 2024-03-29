import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { register } from '../actions/userActions';
import Header from '../components/Header';

export default function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isMatchedPass, setIsMatchedPass] = useState(true);

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === rePassword) {
      setIsMatchedPass(true);
      dispatch(register(name, email, password));
    } else {
      setIsMatchedPass(false);
    }
  };

  useEffect(() => {
    document.title = 'Đăng ký - NS3AE';
    if (userInfo) {
      props.history.push('/confirm-email');
    }
  }, [userInfo]);

  return (
    <>
      <Header />
      <div className="form" onSubmit={submitHandler}>
        <form>
          <ul className="form-container">
            <li>
              <h2>Tạo tài khoản</h2>
            </li>
            {loading && <LoadingBox></LoadingBox>}
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
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <li>
              <label htmlFor="password">Mật khẩu</label>
              <input type="password" id="password" name="password"
                placeholder="Nhập vào mật khẩu"
                title="Mật khẩu phải chứa ít nhất một số và một chữ cái viết hoa và viết thường và ít nhất 8 ký tự trở lên"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required onChange={e => setPassword(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Xác nhận mật khẩu</label>
              <input type="password" id="password" name="password"
                placeholder="Nhập vào mật khẩu"
                title="Mật khẩu phải chứa ít nhất một số và một chữ cái viết hoa và viết thường và ít nhất 8 ký tự trở lên"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required onChange={e => setRePassword(e.target.value)} >
              </input>
            </li>
            {isMatchedPass === false && <MessageBox variant="danger">Mật khẩu không khớp!</MessageBox>}
            <li>
              <button type="submit" className="button primary">Tạo tài khoản</button>
            </li>
            <li><Link to="/signin" className="link">Tôi đã có tài khoản.</Link></li>
          </ul>
        </form>
      </div >
    </>
  )
}
