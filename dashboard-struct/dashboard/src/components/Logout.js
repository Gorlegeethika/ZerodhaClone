import { useEffect, useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    const verifyCookie = async () => {
      if (!cookies.token) {
         toast.error("No active session found!", { position: "top-right" });
         setTimeout(() => navigate("/login"), 3500); 
         return;
      }
      const { data } = await axios.get(
        "http://localhost:3002/verify",
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      if (status) {
        toast(`Hello ${user}`, { position: "top-right" });
      } else {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
      removeCookie("token");
      toast.success("Logged out successfully!", { position: "top-right" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("❌ Error logging out:", err);
    }
  };

  return (
    <>
      <div className="home_page">
        <h4>
            <span>{username}</span>
       
          <br></br>
         Are You sure to Logout ?
        </h4>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Logout;
