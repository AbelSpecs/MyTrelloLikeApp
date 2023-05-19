import React, { lazy, Suspense } from 'react';

const LazyOffer = lazy(() => import('./Offer'));

const Offer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOffer {...props} />
  </Suspense>
);

export default Offer;
