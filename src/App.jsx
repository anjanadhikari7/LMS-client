import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./Pages/AuthPage";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public Routes */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
