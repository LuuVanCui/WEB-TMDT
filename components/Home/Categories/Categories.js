import CategoryItem from './CategoryItem';

export default function Categories() {
    return(
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <CategoryItem name="Fresh Fruit" href="#section" img="/img/categories/cat-1.jpg" />
                        <CategoryItem name="Fresh Fruit" href="#section" img="/img/categories/cat-1.jpg" />
                        <CategoryItem name="Fresh Fruit" href="#section" img="/img/categories/cat-1.jpg" />
                        <CategoryItem name="Fresh Fruit" href="#section" img="/img/categories/cat-1.jpg" />
                        <CategoryItem name="Fresh Fruit" href="#section" img="/img/categories/cat-1.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
}