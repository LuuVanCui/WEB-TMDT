import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmEmail } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ConfirmEmailScreen(props) {

  const [code, setCode] = useState(null);

  const userConfirmEmail = useSelector(state => state.userConfirmEmail);
  const { userInfo, loading, error } = userConfirmEmail;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(confirmEmail(code));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
  }, []);

  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <ul className="form-container">
          <li>
            <h2>Nhập mã từ email</h2>
          </li>
          <p>NS3AE đã gửi 1 mã đến email của bạn. Nhập mã để kích hoạt tài khoản nhé!</p>
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
          <Link to="" className="link">Gửi lại email</Link>
          <li>
            <button type="submit" className="button primary">Tiếp tục</button>
          </li>
          <li><Link to="/signin" className="link">Bạn đã có tài khoản? Đăng nhập nào!</Link></li>
        </ul>
      </form>
    </div>
  )
}
