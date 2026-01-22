 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Pages from './Pages.jsx';
 import Layout from './Layout.jsx';
 export default function App () {
    return (
        <div>
            <BrowserRouter>
                <Routes >
                    <Route element={<Layout />}>
                    {Pages.map(({ path, element }) => (
                        <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                    ))} 
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
 }