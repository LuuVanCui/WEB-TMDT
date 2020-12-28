import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { fogotPassword } from '../actions/userActions';

export default function FogotPasswordScreen(props) {

    const [email, setEmail] = useState('');

    const userFogotPassword = useSelector((state) => state.userFogotPassword);
    const { userInfo, loading, error } = userFogotPassword;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fogotPassword(email));
    };

    useEffect(() => {
        if (userInfo) {
            props.history.push('/reset_password')
        }
    }, [userInfo]);
    return (
        <div className="form" onSubmit={submitHandler}>
            <form>
                <ul className="form-container">
                    <li>
                        <h2>Đặt lại mật khẩu</h2>
                    </li>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <li>
                        <input type="email" name="email" id="email"
                            placeholder="Nhập vào email" required onChange={e => setEmail(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Tiếp tục</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}
