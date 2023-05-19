import React, { lazy, Suspense } from 'react';

const LazyRejection = lazy(() => import('./Rejection'));

const Rejection = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRejection {...props} />
  </Suspense>
);

export default Rejection;
