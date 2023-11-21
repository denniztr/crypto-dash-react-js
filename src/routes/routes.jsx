import { Routes, Route } from 'react-router-dom';

import { IntroductionComponent } from '../pages/intro/Intro';
import { Main } from '../pages/main/Main';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <IntroductionComponent /> } />
      <Route  path='/main' element={ <Main /> } />
    </Routes>
  )
}