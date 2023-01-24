import React from "react";

import { useRouteError } from "react-router-dom";

const NotFound: React.FC = () => {
  const error = useRouteError() as any;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
};

export { NotFound };
