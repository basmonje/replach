import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Loading from '../components/Loading';

import PhotoProvider from '../contexts/PhotoContext';
import PhotosProvider from '../contexts/PhotosContext';
import SearchPhotosProvider from '../contexts/SearchPhotosContext';
import CollectionProvider from '../contexts/CollectionContext';
import CollectionsProvider from '../contexts/CollectionsContext';
import SearchCollectionsProvider from '../contexts/SearchCollectionsContext';

import ErrorPage from '../pages/Error404';

const HomePage = lazy(() => import('../pages/Home'));
const PhotoPage = lazy(() => import('../pages/Photo'));
const SearchPhotosPage = lazy(() => import('../pages/SearchPhotos'));
const CollectionsPage = lazy(() => import('../pages/Collections'));
const CollectionPage = lazy(() => import('../pages/Collection'));
const SearchCollectionsPage = lazy(() => import('../pages/SearchCollections'));

const MyApp = () => (
  <Layout>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <PhotosProvider>
              <HomePage />
            </PhotosProvider>
          }
        />
        <Route
          path="/photo/:id"
          element={
            <PhotoProvider>
              <PhotoPage />
            </PhotoProvider>
          }
        />
        <Route
          path="/photos/search/:query"
          element={
            <SearchPhotosProvider>
              <SearchPhotosPage />
            </SearchPhotosProvider>
          }
        />
        <Route
          path="/collections"
          element={
            <CollectionsProvider>
              <CollectionsPage />
            </CollectionsProvider>
          }
        />
        <Route
          path="/collection/:id"
          element={
            <CollectionProvider>
              <CollectionPage />
            </CollectionProvider>
          }
        />
        <Route
          path="/collections/search/:query"
          element={
            <SearchCollectionsProvider>
              <SearchCollectionsPage />
            </SearchCollectionsProvider>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default MyApp;
