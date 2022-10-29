import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/Fallback";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Users from "./pages/Users";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/Page404";

// create a root component
const App = () => {
  return (
    <div className="main__content">
      <ErrorBoundary FallbackComponent={Fallback}>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":id" element={<SignUp />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
