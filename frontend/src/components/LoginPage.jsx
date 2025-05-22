import Navbar from "@/components/Navbar";
import Login from "@/components/ui/Login";
import Signup from "@/components/ui/Signup";
import { useParams } from "react-router-dom";

export default function LoginPage() {
  const { type } = useParams();

  return (
    <div>
      <Navbar />
      <div className="w-full items-center justify-center flex min-h-svh p-6 md:p-10">
        <div className="w-full max-w-sm">
          {type === "signup" && <Signup />}
          {type === "login" && <Login />}
        </div>
      </div>
    </div>
  );
}
