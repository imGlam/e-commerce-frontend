import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routers';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.layout>
                                    <route.component />
                                </route.layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
