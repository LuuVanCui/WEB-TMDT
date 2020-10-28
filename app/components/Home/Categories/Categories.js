import CategoryItem from './CategoryItem';

export default function Categories() {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <CategoryItem img="img/categories/cat-1.jpg" href="#section" name="Fresh Fruit" />
                        <CategoryItem img="img/categories/cat-2.jpg" href="#section" name="Dried Fruit" />
                        <CategoryItem img="img/categories/cat-2.jpg" href="#section" name="Dried Fruit" />
                        <CategoryItem img="img/categories/cat-2.jpg" href="#section" name="Dried Fruit" />
                        <CategoryItem img="img/categories/cat-2.jpg" href="#section" name="Dried Fruit" />
                    </div>
                </div>
            </div>
        </section>
        
    );
}