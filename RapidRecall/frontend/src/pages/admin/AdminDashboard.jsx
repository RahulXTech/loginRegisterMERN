import React from "react";
import Navbar from "../../components/common/Navbar";
import AddQuestionForm from "../../components/admin/AddQuestionForm";
import QuestionTable from "../../components/admin/QuestionTable";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Admin Dashboard ⚙️
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            <AddQuestionForm />
            <QuestionTable />
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminDashboard;