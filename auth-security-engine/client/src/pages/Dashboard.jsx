import Button from "../components/Button";
import API from "../services/api";

const Dashboard = () => {
  const logout = async () => {
    await API.post("/auth/logout");
    alert("Logged out");
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>

      <div className="mt-4">
        <Button text="Logout" onClick={logout} />
      </div>
    </div>
  );
};

export default Dashboard;