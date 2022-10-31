import "../assets/styles/fallback.css";

// create a Fallback component
const ErrorFallback = ({ error }) => {
  return (
    <div role="alert" className="fallback">
      <h2 className="error__message">Ooops😔 Something went wrong</h2>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;
