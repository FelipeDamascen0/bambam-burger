import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home';
import { PageNotFound } from '../pages/PageNotFound';


export const PagesRoute = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />}  />
    </Routes>
  );
}