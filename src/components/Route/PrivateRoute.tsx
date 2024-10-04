import React, { PropsWithChildren, useEffect } from "react";

interface PrivateRouteProps {
  title: string;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>) {
  const { title, children } = props;

  useEffect(() => {
    document.title = title;
  }, []);

  return <>{children}</>;
}

export default PrivateRoute;
