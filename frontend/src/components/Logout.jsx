
import { UseAuth } from "../context/AuthProvider";

const Logout = () => {
   const [authUser, setAuthUser] = UseAuth();

   const handleLogout = () => {
      setAuthUser(null);
      localStorage.removeItem("user"); // Remove user from local storage
   };

   return (
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300">
         Logout
      </button>
   );
};

export default Logout;

