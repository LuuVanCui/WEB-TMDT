import Search from './Search/Search';
import Features from './Features/Features';
export default function Home({products}) {
    return(
        <>
            <Search />
            <Features products={products} />
        </>
    );
}