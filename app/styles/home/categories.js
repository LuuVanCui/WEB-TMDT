import css from 'styled-jsx/css';

export const category = css.global `
.categories__slider .col-lg-3 {
	max-width: 100%;
}

.categories__slider.owl-carousel .owl-nav button {
	font-size: 18px;
	color: #1c1c1c;
	height: 70px;
	width: 30px;
	line-height: 70px;
	text-align: center;
	border: 1px solid #ebebeb;
	position: absolute;
	left: -35px;
	top: 50%;
	-webkit-transform: translateY(-35px);
	background: #ffffff;
}

.categories__slider.owl-carousel .owl-nav button.owl-next {
	left: auto;
	right: -35px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.hero__categories {
		margin-bottom: 30px;
	}
	.hero__search__form {
		width: 485px;
	}
	.categories__slider.owl-carousel .owl-nav button {
		left: -20px;
	}
	.categories__slider.owl-carousel .owl-nav button.owl-next {
		right: -20px;
	}
	.filter__sort .nice-select {
		padding-left: 5px;
		padding-right: 28px;
	}
	.product__details__quantity {
		margin-bottom: 10px;
	}
	.product__details__text .primary-btn {
		margin-bottom: 10px;
	}
	.product__details__tab .nav-tabs:before {
		width: 150px;
	}
	.product__details__tab .nav-tabs:after {
		width: 150px;
	}
	.blog__details__author {
		overflow: hidden;
		margin-bottom: 25px;
	}
	.humberger__open {
		display: block;
		font-size: 22px;
		color: #1c1c1c;
		height: 35px;
		width: 35px;
		line-height: 33px;
		text-align: center;
		border: 1px solid #1c1c1c;
		cursor: pointer;
		position: absolute;
		right: 15px;
		top: 22px;
	}
	.header .container {
		position: relative;
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
	.humberger__menu__logo {
		margin-bottom: 30px;
	}
	.humberger__menu__logo a {
		display: inline-block;
	}
	.humberger__menu__contact {
		padding: 10px 0 13px;
	}
	.humberger__menu__contact ul li {
		font-size: 14px;
		color: #1c1c1c;
		position: relative;
		line-height: 30px;
		list-style: none;
	}
	.humberger__menu__contact ul li i {
		color: #252525;
		margin-right: 5px;
	}
	.humberger__menu__cart ul {
		display: inline-block;
		margin-right: 25px;
	}
	.humberger__menu__cart ul li {
		list-style: none;
		display: inline-block;
		margin-right: 15px;
	}
	.humberger__menu__cart ul li:last-child {
		margin-right: 0;
	}
	.humberger__menu__cart ul li a {
		position: relative;
	}
	.humberger__menu__cart ul li a i {
		font-size: 18px;
		color: #1c1c1c;
	}
	.humberger__menu__cart ul li a span {
		height: 13px;
		width: 13px;
		background: #7fad39;
		font-size: 10px;
		color: #ffffff;
		line-height: 13px;
		text-align: center;
		font-weight: 700;
		display: inline-block;
		border-radius: 50%;
		position: absolute;
		top: 0;
		right: -12px;
	}
	.humberger__menu__cart .header__cart__price {
		font-size: 14px;
		color: #6f6f6f;
		display: inline-block;
	}
	.humberger__menu__cart .header__cart__price span {
		color: #252525;
		font-weight: 700;
	}
	.humberger__menu__cart {
		margin-bottom: 25px;
	}
	.humberger__menu__widget {
		margin-bottom: 20px;
	}
	.humberger__menu__widget .header__top__right__language {
		margin-right: 20px;
	}
	.humberger__menu__nav {
		display: none;
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
	.header__top {
		display: none;
	}
	.header__menu {
		display: none;
	}
	.header__cart {
		text-align: center;
		padding: 10px 0 24px;
	}
	.over_hid {
		overflow: hidden;
	}
}

.categories__slider.owl-carousel .owl-nav {
    text-align: center;
    margin-top: 40px;
}
.categories__slider.owl-carousel .owl-nav button {
    position: relative;
    left: 0;
    top: 0;
    -webkit-transform: translateY(0);
}
.categories__slider.owl-carousel .owl-nav button.owl-next {
    right: -10px;
}

.sidebar__item .latest-product__text .owl-carousel .owl-nav {
	right: 0;
}

.product__discount__slider.owl-carousel .owl-dots {
	text-align: center;
	margin-top: 30px;
}

.product__discount__slider.owl-carousel .owl-dots button {
	height: 12px;
	width: 12px;
	border: 1px solid #b2b2b2;
	border-radius: 50%;
	margin-right: 12px;
}

.product__discount__slider.owl-carousel .owl-dots button.active {
	background: #707070;
	border-color: #6f6f6f;
}

.product__discount__slider.owl-carousel .owl-dots button:last-child {
	margin-right: 0;
}

.product__details__pic__slider.owl-carousel .owl-item img {
	width: auto;
}

.latest-product__slider.owl-carousel .owl-nav {
    right: 0;
}


`

export const categoryItem = css `
.categories__item {
	height: 270px;
	position: relative;
}

.categories__item h5 {
	position: absolute;
	left: 0;
	width: 100%;
	padding: 0 20px;
	bottom: 20px;
	text-align: center;
}

.categories__item h5 a {
	font-size: 18px;
	color: #1c1c1c;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 12px 0 10px;
	background: #ffffff;
	display: block;
}

.set-bg {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
}
`