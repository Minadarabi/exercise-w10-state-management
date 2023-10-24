import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./Themes/ThemeContext";
import { Nav } from "./components/Nav";
import { MyRoutes } from "./components/MyRoutes";




export const App = () => {
  return (
  <ThemeContext>
      <BrowserRouter>
      <Nav />
      <main>
      <MyRoutes />
      </main>
      </BrowserRouter>
  </ThemeContext>
    );
};
