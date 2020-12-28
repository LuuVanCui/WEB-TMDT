import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmEmail, register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ConfirmEmailScreen(props) {

  const [code, setCode] = useState(null);
  const [clickSendAgain, setClickSendAgain] = useState(false);

  const userConfirmEmail = useSelector(state => state.userConfirmEmail);
  const { userInfo, loading, error } = userConfirmEmail;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(confirmEmail(code));
  };

  const sendMailAgain = () => {
    dispatch(register());
    setClickSendAgain(true);
  }

  useEffect(() => {
    if (userInfo) {
      if (window.confirm('Đã tạo tài khoản thành công. Đăng nhập ngay để mua sắm bạn nhé!')) {
        props.history.push('/signin');
      }
    }
  }, [userInfo]);

  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <ul className="form-container">
          <li>
            <h2>Nhập mã từ email</h2>
          </li>
          <p>NS3AE đã gửi 1 mã đến địa chỉ email của bạn. Nhập mã để kích hoạt tài khoản nhé!</p>
          {loading && <LoadingBox />}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <li>
            <label htmlFor="number">
              Code
          </label>
            <input type="number" name="number" id="number"
              placeholder="Nhập mã vào đây nè!" required onChange={e => setCode(e.target.value)}>
            </input>
          </li>
          {clickSendAgain && <MessageBox variant="success">NS3AE đã gửi lại mã cho bạn rồi đấy!</MessageBox>}
          <div onClick={sendMailAgain} className="link">Gửi lại mã</div>
          <li>
            <button type="submit" className="button primary">Tiếp tục</button>
          </li>
          <li><Link to="/signin" className="link">Bạn đã có tài khoản? Đăng nhập nào!</Link></li>
          <li><Link to="/register" className="link">{'<< Quay lại trang trước'}</Link></li>
        </ul>
      </form>
    </div>
  )
}
