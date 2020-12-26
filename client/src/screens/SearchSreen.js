
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
                            <form action="#" onSubmit={handleSearch}>
                                <div className="hero__search__categories">
                                    All Categories
                                <span className="arrow_carrot-down" />
                                </div>
                                <input type="text" placeholder="What do yo u need?" onChange={(e) => setSearchKey({ key: e.target.value })} />
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
                    </div>
                </div>
            </div>
        </div>
    </section>
}