import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ResetPasswordScreen(props) {

  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(password));
  };

  // useEffect(() => {
  //   console.log(userInfo);
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  // }, [userInfo]);
  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <ul className="form-container">
          <li>
            <h2>Đặt lại mật khẩu</h2>
          </li>
          {/* {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>} */}
          <li>
            <label htmlFor="password">
              Mật khẩu mới
          </label>
            <input type="password" name="password" id="password"
              placeholder="Nhập vào mật khẩu" required onChange={e => setNewPassword(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="password">Xác nhận mật khẩu</label>
            <input type="password" id="repassword" name="password"
              placeholder="Nhập vào mật khẩu" required onChange={e => setRePassword(e.target.value)}>
            </input>
          </li>
          <li>
            <button type="submit" className="button primary">Cập nhật</button>
          </li>
        </ul>
      </form>
    </div>
  )
}
