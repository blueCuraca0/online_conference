import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LazyLoadPage from "pages/LazyLoadPage/LazyLoadPage";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const WelcomePage = lazy(() => import("pages/WelcomePage"));
const SignUpPage = lazy(() => import("pages/SignUpPage"));
const CreateConferencePage = lazy(() => import("pages/CreateConferencePage"));
const ConferencePage = lazy(() => import("pages/ConferencePage"));
const UserProfilePage = lazy(() => import("pages/UserProfilePage"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/welcome`} />} />
      <Route path={`/home`} element={<LazyLoadPage children={<HomePage />} />} />
      <Route path={`/welcome`} element={<LazyLoadPage children={<WelcomePage />} />} />
      <Route path={`/sign-up`} element={<LazyLoadPage children={<SignUpPage />} />} />
      <Route path={`/conference/create`} element={<LazyLoadPage children={<CreateConferencePage />} />} />
      <Route path={`/conference/:id`} element={<LazyLoadPage children={<ConferencePage />} />} />
      <Route path={`/user/:userId`} element={<LazyLoadPage children={<UserProfilePage />} />} />
      <Route path={`*`} element={<LazyLoadPage children={<ErrorPage />} />} />
    </Routes>
  );
};

export default Routing;
