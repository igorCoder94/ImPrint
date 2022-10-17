import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import * as Components from './components';
import * as Pages from './pages';
import React, { useState } from 'react';

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProtectedRoute = ({ isAuth, component }) => {
  return isAuth ? component : <Navigate to={'/login'} />;
};

const App: React.FC = () => {
  const [isAuthenticated] = useState<boolean>(true);
  const { pathname } = useLocation();

  const showHeader = (): boolean => {
    return isAuthenticated && pathname !== '/subscriptions';
  };

  return (
    <div
      className={`bg-black h-screen flex flex-col justify-start align-center overflow-hidden ${
        !isAuthenticated ? 'bg-[#111111]' : ''
      } ${
        pathname === '/subscriptions'
          ? 'absolute bg-[url("src/assets/images/bg_404.jpg")] bg-cover h-screen w-screen'
          : ''
      }`}
    >
      {showHeader() ? <Components.Header /> : <div className="flex flex-shrink-0 h-[122px]"></div>}
      <div
        className={`container lg mx-auto pl-[120px] h-[calc(100%_-_h-header)] text-base text-white overflow-hidden
       font-montserrat leading-6 ${!isAuthenticated ? 'pl-0' : ''}`}
      >
        {isAuthenticated && (
          <>
            <Components.Sidebar />
            <div></div>
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuth={isAuthenticated}
                component={<Pages.PageMain />}
              ></ProtectedRoute>
            }
          />
          <Route path="/test" element={<Pages.PageTest />} />
          <Route
            path="/watch"
            element={
              <ProtectedRoute
                isAuth={isAuthenticated}
                component={<Pages.PageWatch />}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <Pages.PageLogin /> : <Pages.PageMain />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAuth={isAuthenticated}
                component={<Pages.PageProfile />}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/repeat"
            element={
              <ProtectedRoute
                isAuth={isAuthenticated}
                component={<Pages.PageRepeat />}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/subscriptions"
            element={
              <ProtectedRoute
                isAuth={isAuthenticated}
                component={<Pages.PageSubscriptions />}
              ></ProtectedRoute>
            }
          />
          <Route path="*" element={<Pages.Page404 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
