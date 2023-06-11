import React, { Suspense, lazy } from 'react'

import Loader from '../../Shared/Loader';

const Newheader = () => {
  const Newnavbar=lazy(()=>import("../NewNavbar/Newnavbar"));
  return (
    <>
        <Suspense fallback={<Loader/>}>
         <Newnavbar/>
        </Suspense>
    </>
  );
};

export default Newheader;