import { createContext } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetail from '../../components/ProductDetail';

export const nameContext = createContext();

function ProductBuy() {
    let { name } = useParams();

    return (
        <nameContext.Provider value={name}>
            <div>
                <ProductDetail></ProductDetail>
            </div>
        </nameContext.Provider>
    );
}

export default ProductBuy;
