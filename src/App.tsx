import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Components/Routes/AllRoutes";
function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
