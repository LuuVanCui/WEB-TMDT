import css from 'styled-jsx/css';

export default css`
    .main-wrapper {
        padding-bottom: 105px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px),
        only screen and (max-width: 767.98px) {
        .main-wrapper {
            padding-bottom: 10px;
            margin-bottom: 60px;
        }
    }

    .timeline-logo-area {
        padding: 0 30px;
    }

    @media only screen and (min-width: 1600px) {
        .timeline-logo-area {
            padding: 0 107px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px),
        only screen and (max-width: 767.98px) {
        .timeline-logo-area {
            padding: 10px 30px;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }
    }

    @media only screen and (max-width: 575.98px) {
        .timeline-logo-area .timeline-logo {
            width: 70px;
        }
    }

    .timeline-logo-area .tagline {
        color: #333333;
        font-size: 16px;
        font-weight: 500;
        padding-left: 70px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1499.98px) {
        .timeline-logo-area .tagline {
            padding-left: 50px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px),
        only screen and (max-width: 767.98px) {
        .timeline-logo-area .tagline {
            padding-left: 0;
        }
    }

    @media only screen and (max-width: 575.98px) {
        .timeline-logo-area .tagline {
            padding-left: 70px;
        }
    }

    @media only screen and (max-width: 479.98px) {
        .timeline-logo-area .tagline {
            padding-left: 20px;
        }
    }

    .timeline-logo-area .tagline {
        color: #333333;
        font-size: 16px;
        font-weight: 500;
        padding-left: 70px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1499.98px) {
        .timeline-logo-area .tagline {
            padding-left: 50px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px),
        only screen and (max-width: 767.98px) {
        .timeline-logo-area .tagline {
            padding-left: 0;
        }
    }

    @media only screen and (max-width: 575.98px) {
        .timeline-logo-area .tagline {
            padding-left: 70px;
        }
    }

    @media only screen and (max-width: 479.98px) {
        .timeline-logo-area .tagline {
            padding-left: 20px;
        }
    }

    .login-area {
        background-color: #dc4734;
        padding: 15px 30px;
    }

    @media only screen and (min-width: 1600px) {
        .login-area {
            padding: 15px 110px;
        }
    }

    .login-area .single-field {
        width: 100%;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #ddd;
        padding: 5px 10px;
        color: #fff;
    }

    @media only screen and (max-width: 575.98px) {
        .login-area .single-field {
            margin-bottom: 30px;
        }
    }

    .login-area .login-btn {
        font-size: 14px;
        font-weight: 500;
        color: #dc4734;
        line-height: 1;
        padding: 12px 32px;
        display: inline-block;
        border: 1px solid transparent;
        background-color: #fff;
    }

    .login-area .login-btn:hover {
        background-color: #333333;
    }

    @media only screen and (max-width: 575.98px) {
        .login-area .login-btn {
            width: 100%;
        }
    }

    .login-area ::-webkit-input-placeholder {
        /* Edge */
        color: #ddd;
    }

    .login-area :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #ddd;
    }

    .login-area ::-moz-placeholder {
        color: #ddd;
    }

    .login-area ::-ms-input-placeholder {
        color: #ddd;
    }

    .login-area ::placeholder {
        color: #ddd;
    }

    .signup-inner--form .single-field {
        width: 100%;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #999;
        padding: 5px 10px;
        margin-bottom: 28px;
    }

    .timeline-bg-content {
        width: 100%;
        height: calc(100vh - 70px);
        position: relative;
        padding: 0 30px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px),
        only screen and (max-width: 767.98px) {
        .timeline-bg-content {
            height: 400px;
        }
    }

    @media only screen and (max-width: 575.98px) {
        .timeline-bg-content {
            height: 300px;
        }
    }

    .timeline-bg-content .timeline-bg-title {
        top: 50%;
        left: 50%;
        width: 610px;
        position: absolute;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #fff;
        text-align: center;
        font-size: 36px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1499.98px) {
        .timeline-bg-content .timeline-bg-title {
            width: 540px;
            font-size: 32px;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1199.98px),
        only screen and (max-width: 767.98px) {
        .timeline-bg-content .timeline-bg-title {
            width: 100%;
            padding: 0 30px;
            font-size: 26px;
        }
    }

    @media only screen and (max-width: 479.98px) {
        .timeline-bg-content .timeline-bg-title {
            width: 100%;
            font-size: 22px;
            padding: 0 30px;
        }
    }

    .bg-img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
        .signup-form-wrapper {
            padding: 0 30px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
        .signup-form-wrapper {
            margin-bottom: 30px;
        }
    }

    @media only screen and (min-width: 1200px) and (max-width: 1499.98px),
        only screen and (min-width: 992px) and (max-width: 1199.98px),
        only screen and (min-width: 768px) and (max-width: 991.98px),
        only screen and (max-width: 767.98px) {
        .signup-form-wrapper {
            padding: 47px 30px;
        }
    }

    .signup-form-wrapper .create-acc {
        color: #dc4734;
        font-size: 30px;
        font-weight: 800;
        padding-bottom: 47px;
    }

    @media only screen and (max-width: 575.98px) {
        .signup-form-wrapper .create-acc {
            font-size: 26px;
        }
    }

    .signup-inner {
        max-width: 572px;
        margin: auto;
        -webkit-box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
    }

    .signup-inner .title {
        color: #fff;
        font-size: 18px;
        background-color: #dc4734;
        padding: 23px 0;
    }

    .signup-inner--form {
        padding: 42px 100px 50px;
        background-color: #fff;
        position: relative;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199.98px),
        only screen and (min-width: 768px) and (max-width: 991.98px),
        only screen and (max-width: 767.98px) {
        .signup-inner--form {
            padding: 42px 50px 50px;
        }
    }

    @media only screen and (max-width: 479.98px) {
        .signup-inner--form {
            padding: 42px 30px 50px;
        }
    }

    .signup-inner--form:before {
        top: 50%;
        left: 50%;
        content: '';
        position: absolute;
        height: 170px;
        width: 174px;
        background-image: url('../images/icons/login.png');
        background-repeat: no-repeat;
        -webkit-transform: translate(-50%, -80%);
        -ms-transform: translate(-50%, -80%);
        transform: translate(-50%, -80%);
    }

    .signup-inner--form .nice-select {
        width: 100%;
        border: none;
        border-bottom: 1px solid #999;
        border-radius: 0;
        font-size: 13px;
        padding: 5px 10px;
        height: 34px;
        line-height: 30px;
        margin-bottom: 27px;
        background-color: transparent;
    }

    .signup-inner--form .nice-select span {
        color: #999;
    }

    .signup-inner--form .nice-select:after {
        height: 6px;
        width: 6px;
        border-bottom: 1px solid #999;
        border-right: 1px solid #999;
    }

    .signup-inner--form .nice-select .list {
        width: 100%;
    }

    .signup-inner .terms-condition {
        font-size: 16px;
        padding-top: 28px;
    }

    .signup-inner .terms-condition a {
        color: #dc4734;
    }

    .submit-btn {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        line-height: 1;
        padding: 15px 20px;
        display: block;
        border: 1px solid transparent;
        background-color: #dc4734;
        width: 100%;
        margin-top: 23px;
    }

    .submit-btn:hover {
        background-color: #333333;
    }
`;
