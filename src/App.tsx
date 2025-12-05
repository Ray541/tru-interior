import { BrowserRouter } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import AppRoutes from "./routes";

export default function App() {
  useTheme();
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
