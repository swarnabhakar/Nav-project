import React from 'react'
import HeaderBmi from './HeaderBMI/HeaderBmi';
import MainBmi from './MainBMI/MainBmi';
const Bmi = () => {
  return (
    <>
        <div>
            <div>
                <HeaderBmi/>
            </div>
            <div>
                <MainBmi/>
            </div>
        </div>
    </>
  );
};

export default Bmi;