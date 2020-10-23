import css from 'styled-jsx/css';

export default css `
#preloder {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 999999;
	background: #000;
}

.loader {
	width: 40px;
	height: 40px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -13px;
	margin-left: -13px;
	border-radius: 60px;
	animation: loader 0.8s linear infinite;
	-webkit-animation: loader 0.8s linear infinite;
}

@keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
	50% {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
		border: 4px solid #673ab7;
		border-left-color: transparent;
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
}

@-webkit-keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
	50% {
		-webkit-transform: rotate(180deg);
		border: 4px solid #673ab7;
		border-left-color: transparent;
	}
	100% {
		-webkit-transform: rotate(360deg);
		border: 4px solid #f44336;
		border-left-color: transparent;
	}
}

.humberger__menu__overlay {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    content: "";
    z-index: 98;
    visibility: hidden;
    -webkit-transition: all, 0.6s;
    -moz-transition: all, 0.6s;
    -ms-transition: all, 0.6s;
    -o-transition: all, 0.6s;
    transition: all, 0.6s;
}
.humberger__menu__overlay.active {
    visibility: visible;
}

.humberger__menu__wrapper {
	display: none;
}

.humberger__menu__wrapper {
    width: 300px;
    background: #ffffff;
    position: fixed;
    left: -300px;
    top: 0;
    height: 100%;
    overflow-y: auto;
    z-index: 99;
    padding: 30px;
    padding-top: 50px;
    opacity: 0;
    display: block;
    -webkit-transition: all, 0.6s;
    -moz-transition: all, 0.6s;
    -ms-transition: all, 0.6s;
    -o-transition: all, 0.6s;
    transition: all, 0.6s;
}
.humberger__menu__wrapper.show__humberger__menu__wrapper {
    opacity: 1;
    left: 0;
}

.humberger__menu__wrapper .header__top__right__social {
    display: block;
    margin-right: 0;
    margin-bottom: 20px;
}
.humberger__menu__wrapper .slicknav_btn {
    display: none;
}
.humberger__menu__wrapper .slicknav_nav .slicknav_item a {
    border-bottom: none !important;
}
.humberger__menu__wrapper .slicknav_nav {
    display: block !important;
}
.humberger__menu__wrapper .slicknav_menu {
    background: transparent;
    padding: 0;
    margin-bottom: 30px;
}
.humberger__menu__wrapper .slicknav_nav ul {
    margin: 0;
}
.humberger__menu__wrapper .slicknav_nav a {
    color: #1c1c1c;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    border-bottom: 1px solid #e1e1e1;
}
.humberger__menu__wrapper .slicknav_nav a:hover {
    -webkit-border-radius: 0;
    border-radius: 0;
    background: transparent;
    color: #7fad39;
}
.humberger__menu__wrapper .slicknav_nav .slicknav_row,
.humberger__menu__wrapper .slicknav_nav a {
    padding: 8px 0;
}

.humberger__menu__wrapper {
    width: 300px;
    background: #ffffff;
    position: fixed;
    left: -300px;
    top: 0;
    height: 100%;
    overflow-y: auto;
    z-index: 99;
    padding: 30px;
    padding-top: 50px;
    opacity: 0;
    display: block;
    -webkit-transition: all, 0.6s;
    -moz-transition: all, 0.6s;
    -ms-transition: all, 0.6s;
    -o-transition: all, 0.6s;
    transition: all, 0.6s;
}
.humberger__menu__wrapper.show__humberger__menu__wrapper {
    opacity: 1;
    left: 0;
}

.humberger__menu__wrapper .header__top__right__social {
    display: block;
    margin-right: 0;
    margin-bottom: 20px;
}
.humberger__menu__wrapper .slicknav_btn {
    display: none;
}
.humberger__menu__wrapper .slicknav_nav .slicknav_item a {
    border-bottom: none !important;
}
.humberger__menu__wrapper .slicknav_nav {
    display: block !important;
}
.humberger__menu__wrapper .slicknav_menu {
    background: transparent;
    padding: 0;
    margin-bottom: 30px;
}
.humberger__menu__wrapper .slicknav_nav ul {
    margin: 0;
}
.humberger__menu__wrapper .slicknav_nav a {
    color: #1c1c1c;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    border-bottom: 1px solid #e1e1e1;
}
.humberger__menu__wrapper .slicknav_nav a:hover {
    -webkit-border-radius: 0;
    border-radius: 0;
    background: transparent;
    color: #7fad39;
}
.humberger__menu__wrapper .slicknav_nav .slicknav_row,
.humberger__menu__wrapper .slicknav_nav a {
    padding: 8px 0;
}

.humberger__menu__logo {
    margin-bottom: 30px;
}
.humberger__menu__logo a {
    display: inline-block;
}

.humberger__menu__logo {
    margin-bottom: 30px;
}
.humberger__menu__logo a {
    display: inline-block;
}


`