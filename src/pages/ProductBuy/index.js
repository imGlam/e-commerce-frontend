import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetail from '../../components/ProductDetail';

export const idContext = createContext();

function ProductBuy() {
    let { id } = useParams();

    return (
        <idContext.Provider value={id}>
            <div>
                <ProductDetail></ProductDetail>
            </div>
        </idContext.Provider>
    );
}

export default ProductBuy;
