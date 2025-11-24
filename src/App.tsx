import { useTheme } from "./hooks/useTheme";
import Layout from "./layout/Layout";

function App() {
  useTheme();
  return <Layout />;
}

export default App;
