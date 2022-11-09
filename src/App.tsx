import { AuthContextProvider } from "./Components/Context/AuthContext";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Components/Routes/AllRoutes";
import Price from "./Components/Pricing/Price";
function App() {
  return (
    <AuthContextProvider>
    <Navbar />
      <AllRoutes />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
