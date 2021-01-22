import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ResetPasswordScreen(props) {

  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [matchedPassword, setMatchedPassword] = useState(true);

  const resetPass = useSelector(state => state.resetPass);
  const { status, loading, error } = resetPass;

  const fogotPass = useSelector(state => state.userFogotPassword);
  const { userInfo } = fogotPass;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (newPassword === rePassword) {
      setMatchedPassword(true);
      dispatch(resetPassword(userInfo.email, newPassword));
    } else {
      setMatchedPassword(false);
    }
  };

  useEffect(() => {
    if (status) {
      alert('Đổi mật khẩu thành công. Đăng nhập để mua sắm nào!');
      props.history.push('/signin');
    }
  }, [status]);

  return (
    <div className="form mt-4" onSubmit={submitHandler}>
      <form>
        <ul className="form-container">
          <li>
            <h2>Đặt lại mật khẩu</h2>
          </li>
          {loading && <LoadingBox />}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          {(!matchedPassword) && <MessageBox variant="danger">Mật khẩu không khớp!</MessageBox>}
          <li>
            <label htmlFor="password">
              Mật khẩu mới
          </label>
            <input type="password" name="password" id="password"
              placeholder="Nhập vào mật khẩu"
              title="Mật khẩu phải chứa ít nhất một số và một chữ cái viết hoa và viết thường và ít nhất 8 ký tự trở lên"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required onChange={e => setNewPassword(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="password">Xác nhận mật khẩu</label>
            <input type="password" id="repassword" name="password"
              placeholder="Nhập vào mật khẩu"
              title="Mật khẩu phải chứa ít nhất một số và một chữ cái viết hoa và viết thường và ít nhất 8 ký tự trở lên"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required onChange={e => setRePassword(e.target.value)}>
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
