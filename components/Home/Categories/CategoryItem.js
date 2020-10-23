import PropTypes from 'prop-types';

export default function CategoryItem(props) {
    return (
        <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg={props.img} >
                <h5><a href={props.href}>{props.name}</a></h5>
            </div>
        </div>
    );
}

CategoryItem.propTypes = {
    img: PropTypes.string,
    href: PropTypes.string,
    name: PropTypes.string
}