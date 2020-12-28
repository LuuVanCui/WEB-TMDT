import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { enterCodeResetPassword } from '../actions/userActions';

export default function EnterCodeResetPasswordScreen(props) {

  const [code, setCode] = useState(null);
  const [clickSendAgain, setClickSendAgain] = useState(false);

  const enterCodeResetPass = useSelector(state => state.enterCodeResetPass);
  const { loading, error, userInfo } = enterCodeResetPass;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(enterCodeResetPassword(code));
  };

  const sendCodeAgain = () => {
    // dispatch(register());
    setClickSendAgain(true);
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push('/reset_password');
    }
  }, [userInfo]);

  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <ul className="form-container">
          <li>
            <h2>Nhập mã từ email</h2>
          </li>
          <p>NS3AE đã gửi 1 mã đến địa chỉ email của bạn. Nhập mã để đặt lại mật khẩu bạn nhé!</p>
          {loading && <LoadingBox />}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <li>
            <input type="number" name="number" id="number"
              placeholder="Nhập mã vào đây nè!" required onChange={e => setCode(e.target.value)}>
            </input>
          </li>
          {clickSendAgain && <MessageBox variant="success">NS3AE đã gửi lại mã cho bạn rồi đấy!</MessageBox>}
          <div onClick={sendCodeAgain} className="link">Gửi lại mã</div>
          <li>
            <button type="submit" className="button primary">Tiếp tục</button>
          </li>
          <li><Link to="/signin" className="link">Bạn đã có tài khoản? Đăng nhập nào!</Link></li>
        </ul>
      </form>
    </div>
  )
}
