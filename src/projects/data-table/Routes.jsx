import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import UsersTable from "./pages/UsersTable.jsx";
import TodosTable from "./pages/TodosTable.jsx";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<UsersTable />} />
        <Route path="todos" element={<TodosTable />} />
        <Route path="*" element={<div className="container py-4">Page not found.</div>} />
      </Route>
    </Routes>
  );
}
