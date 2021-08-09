import ProductTemplate from '../src/components/Product';
import productsData from '../src/data/vschoolProducts';

const productsPage = () => {
    const allProducts = productsData.map( pro => <ProductTemplate product={pro} />);
    return (
        <div>
            { allProducts }
        </div>
    )
}

export default productsPage;