import { useRouteError } from "react-router-dom"

const Error = ({ error }) => {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error?.message || "An unknown error occurred."}</p>
      </div>
    );
  };

export default Error