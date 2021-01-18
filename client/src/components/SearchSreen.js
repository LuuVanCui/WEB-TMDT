
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function Search(props) {
    const [searchKey, setSearchKey] = useState({ key: '' });
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(listProducts(1, searchKey.key));
    }
    useEffect(() => {
        return () => {
        };
    }, []);
    return <section className="hero hero-normal">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">

                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form onSubmit={handleSearch}>
                                <input type="text" placeholder="Bạn cần tìm gì?" onChange={(e) => setSearchKey({ key: e.target.value })} />
                                <button type="submit" className="site-btn">TÌM KIẾM</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone" />
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>0888 123 123</h5>
                                <span>Giao hàng tận nơi</span>
                            </div>
                        </div>

                        <div className="filter">
                            <div className="categories">
                                <label for="categories">Loại sản phẩm: </label>
                                <select id="categories" className="custom-select">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="price">
                                <label for="categories">Khoảng giá: </label>
                                <input placeholder="vnđ Từ" />
                                <span> - </span>
                                <input placeholder="vnđ Đến" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}