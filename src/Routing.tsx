import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LazyLoadPage from "pages/LazyLoadPage/LazyLoadPage";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/HomePage"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/Home`} />} />
      <Route path={`*`} element={<LazyLoadPage children={<ErrorPage />} />} />
      <Route
        path={`/Home`}
        element={<LazyLoadPage children={<HomePage />} />}
      />
    </Routes>
  );
};

export default Routing;
