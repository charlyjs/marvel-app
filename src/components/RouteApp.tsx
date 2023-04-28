import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Layout from './Layout.tsx';

// Pages
import Character from '../pages/Character.tsx';
import ErrorNoFound from '../pages/ErrorNoFound.tsx';

export default function RouteApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Character />}></Route>
          <Route path='/character/:id' element={<Character />}></Route>
          <Route path='*' element={<ErrorNoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
