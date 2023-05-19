import React, { lazy, Suspense } from 'react';

const LazyCardItem = lazy(() => import('./CardItem'));

const CardItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardItem {...props} />
  </Suspense>
);

export default CardItem;
