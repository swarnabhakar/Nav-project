import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Counter from '../Components/Counter';
import UseEffectHook from '../Components/UseEffectHook';
import PageNotFound from '../Components/Pagenotfound/PageNotFound';
import Bmi from '../BMI/Bmi';
import Weatheraplication from '../Components/WeatherAplication/Weatheraplication';
//import { useEffect } from 'react';
export const RouteModule = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<Counter />} />
       <Route path="useeffect" element={<UseEffectHook/>}/>
       <Route path="bmi" element={<Bmi/>}/>
       <Route path="weather" element={<Weatheraplication/>}/>
       <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </>  
  );
};
export default RouteModule;