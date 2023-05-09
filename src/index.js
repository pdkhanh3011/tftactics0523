import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/Root";
import Champions from "./views/Database/Contents/Champions";
import ChampionsStats from "./views/Database/Contents/ChampionsStats";
import Origins from "./views/Database/Contents/Origins";
import Classes from "./views/Database/Contents/Classes";
import { AuthProvider } from "contexts/AuthContext";
import PrivateRoute from "components/auth/PrivateRoute";
import { loader as teamLoader } from "views/TeamBuilder";
import { MetaReportProvider } from "contexts/MetaReportContext";
import ChampionDetail from "views/ChampionDetail";
import ScrollToTop from "components/common/ScrollToTop";
import { Provider } from "react-redux";
import store from "./store/store";
import CmsLayout from "layouts/CmsLayout";

const DatabaseLayout = lazy(() => import("./views/Database/DatabaseLayout"));
const TeamComps = lazy(() => import("views/TeamComps"));
const MetaReport = lazy(() => import("views/MetaReport"));
const TeamBuilder = lazy(() => import("views/TeamBuilder"));
const ItemBuilder = lazy(() => import("./views/ItemBuilder"));
const AllChampions = lazy(() => import("views/Champions"));

const AddItems = lazy(() => import("views/Cms/AddItems"));
const AddSynergys = lazy(() => import("views/Cms/AddSynergys"));
const SignUp = lazy(() => import("components/auth/SignUp"));
const AddTeamComps = lazy(() => import("views/Cms/AddTeamComps"));
const AddChampions = lazy(() => import("views/Cms/AddChampions"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/manager",
    element: <CmsLayout />,
    children: [
      {
        path: "/manager/origins",
        element: (
          <PrivateRoute>
            <Suspense>
              <AddSynergys />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/manager/teamcomps",
        element: (
          <PrivateRoute>
            <Suspense>
              <AddTeamComps />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/manager/items",
        element: (
          <PrivateRoute>
            <Suspense>
              <AddItems />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/manager/champions",
        element: (
          <PrivateRoute>
            <Suspense>
              <AddChampions />
            </Suspense>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "teambuilder",
        element: (
          <Suspense>
            <TeamBuilder />
          </Suspense>
        ),
      },
      {
        path: "/metareport",
        element: (
          <MetaReportProvider>
            <Suspense>
              <MetaReport />
            </Suspense>
          </MetaReportProvider>
        ),
      },
      {
        path: "teambuilder/:teamId",
        element: (
          <Suspense>
            <TeamBuilder />
          </Suspense>
        ),
        loader: teamLoader,
      },
      {
        path: "database/*",
        element: (
          <Suspense>
            <DatabaseLayout />
          </Suspense>
        ),
        children: [
          {
            name: "champion",
            path: "champions",
            element: <Champions />,
          },
          {
            path: "championstats",
            element: <ChampionsStats />,
          },
          {
            path: "origins",
            element: <Origins />,
          },
          {
            path: "classes",
            element: <Classes />,
          },
          {
            path: "rolling",
            element: <div>rolling</div>,
          },
          {
            path: "augments",
            element: <div>augments</div>,
          },
        ],
      },
      {
        path: "itembuilder",
        element: (
          <ScrollToTop>
            <Suspense>
              <ItemBuilder />
            </Suspense>
          </ScrollToTop>
        ),
        errorElement: <div>item not found</div>,
      },
      {
        path: "teamcomps",
        element: (
          <Suspense>
            <TeamComps />
          </Suspense>
        ),
      },
      {
        path: "champions",
        element: (
          <Suspense>
            <AllChampions />
          </Suspense>
        ),
      },
      {
        path: "champions/:name",
        element: (
          <ScrollToTop>
            <ChampionDetail />
          </ScrollToTop>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
