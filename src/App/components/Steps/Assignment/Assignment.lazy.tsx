import React, { lazy, Suspense } from 'react';

const LazyAssignment = lazy(() => import('./Assignment'));

const Assignment = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAssignment {...props} />
  </Suspense>
);

export default Assignment;
