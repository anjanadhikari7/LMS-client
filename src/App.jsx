import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./Pages/AuthPage";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import BooksPage from "./Pages/BooksPage";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public Routes */}
        <Route path="/auth" element={<AuthPage />} />
        {/* Admin Routes - Private Routes */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminLayout />
            </AdminPrivateRoute>
          }
        >
          <Route path="dashboard" element={<p>Dashboard Page</p>} />
          <Route path="books" element={<BooksPage />} />
          <Route path="users" element={<p>Users Page</p>} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
