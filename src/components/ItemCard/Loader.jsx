import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={452}
    viewBox="0 0 270 452"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="115" y="408" rx="10" ry="10" width="150" height="44" />
    <rect x="0" y="418" rx="5" ry="5" width="80" height="30" />
    <rect x="0" y="346" rx="10" ry="10" width="270" height="46" />
    <rect x="50" y="65" rx="5" ry="5" width="164" height="164" />
    <rect x="0" y="278" rx="5" ry="5" width="270" height="48" />
  </ContentLoader>
);
