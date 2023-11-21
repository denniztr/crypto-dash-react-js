import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/routes";
import { GlobalStyles } from "./global/style";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
