import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Layout from './Layout.tsx';

// Pages
import Character from '../pages/Character.tsx';
import ErrorPageNoFound from '../pages/ErrorPageNoFound.tsx';

export default function RouteApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Character />}></Route>
          <Route path='/character/:id' element={<Character />}></Route>
          <Route path='*' element={<ErrorPageNoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
