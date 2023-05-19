import React, { lazy, Suspense } from 'react';

const LazyTechnicalInterview = lazy(() => import('./TechnicalInterview'));

const TechnicalInterview = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTechnicalInterview {...props} />
  </Suspense>
);

export default TechnicalInterview;
