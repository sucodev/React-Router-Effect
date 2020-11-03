import React from 'react';
import { Route, useLocation } from 'react-router-dom';

const RouterEffect = ({ path, element, time, end, children }) => {
  const [component, setComponent] = React.useState(null);
  const [router, setRouter] = React.useState(null);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setRouter(pathname);
    if (router === null) return '/';
  }, [pathname, router]);

  React.useEffect(() => {
    setTimeout(() => {
      setComponent(element);
    }, time);
  }, [element, path, time, end]);

  return (
    <Route path={path} element={component} {...end}>
      {children}
    </Route>
  );
};

export default RouterEffect;
