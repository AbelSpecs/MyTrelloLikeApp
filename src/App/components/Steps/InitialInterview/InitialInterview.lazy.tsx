import React, { lazy, Suspense } from 'react';

const LazyInitialInterview = lazy(() => import('./InitialInterview'));

const InitialInterview = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInitialInterview {...props} />
  </Suspense>
);

export default InitialInterview;
