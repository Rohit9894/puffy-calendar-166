import { AuthContextProvider } from "./Components/Context/AuthContext";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
// import APITokens from "./Components/Pages/Dashboard/APITokens";
// import CorsDomain from "./Components/Pages/Dashboard/CorsDomain";
// import UserDashboard from "./Components/Pages/Dashboard/UserDashboard";

// import { UserManagement } from "./Components/Pages/Dashboard/UserManagement";
import { AllRoutes } from "./Components/Routes/AllRoutes";
function App() {
  return (

    // <UserDashboard/>
   
    // <CorsDomain/>
    // <APITokens/>
    <AuthContextProvider>
      <Navbar />
      <AllRoutes />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
