import "./stylesheets/theme.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textelements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/common/Login";
import Office from "./pages/common/Office";
import Register from "./pages/common/Register";
import Contact from "./pages/common/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/common/Home";
import Exams from "./pages/admin/Exams";
import AddEditExam from "./pages/admin/Exams/AddEditExam";
import Loader from "./components/Loader";
import WriteExam from "./pages/user/WriteExam";
import { useSelector } from "react-redux";
import AdminReports from './pages/admin/AdminReports';
import UserReports from "./pages/user/UserReports";

function App() {
  const {loading} =useSelector(state => state.loader)
  return (
    <>
    { loading && <Loader/>}
    <BrowserRouter>
    <Routes>
      {/* Common routs */}
      <Route path="/office" element={<Login/>}/>
      <Route path="/login" element={<Office/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      {/* User Routes */}
      <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        <Route
            path="/user/write-exam/:id"
            element={
              <ProtectedRoute>
                <WriteExam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/reports"
            element={
              <ProtectedRoute>
                <UserReports />
              </ProtectedRoute>
            }
          />
          {/* Admin Routes */}
          <Route
            path="/admin/exams"
            element={
              <ProtectedRoute>
                <Exams/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams/add"
            element={
              <ProtectedRoute>
                <AddEditExam/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/exams/edit/:id"
            element={
              <ProtectedRoute>
                <AddEditExam/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute>
                <AdminReports/>
              </ProtectedRoute>
            }
          />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
