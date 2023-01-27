import { useEffect, useState } from 'react';

export default function useLocalStorage(key, value) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem(key));
        if (items) {
            setItems((prev) => [...prev, items]);
        }
    }, []);
    console.log('re-render');
}
