import { Routes, Route } from 'react-router-dom';

import { IntroductionComponent } from '../pages/intro/Intro';
import { Main } from '../pages/main/Main';
import { AuthComponent } from '../pages/auth/Auth';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <IntroductionComponent /> } />
      <Route path='/main' element={ <Main /> } />
      <Route path='/sign-up' element={ <AuthComponent /> } />
    </Routes>
  )
}