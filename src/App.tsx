import { AuthContextProvider } from "./Components/Context/AuthContext";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Components/Routes/AllRoutes";
function App() {
  return (
    // <AuthContextProvider>

    // </AuthContextProvider>
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
