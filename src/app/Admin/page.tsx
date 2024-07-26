import Sidebar from "@/Sidebar/Sidebar";
import Welcome from "../components/Welcome";

export default function WelcomePage() {
  return (
    <div className="body">
      <Sidebar />
      <Welcome />
    </div>
  );
}
