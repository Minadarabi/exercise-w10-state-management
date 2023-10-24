import { Link } from "react-router-dom";
import { useTheme } from "../Themes/ThemeContext";


export const Nav = () => {

  const {mode , toggleModeClass} = useTheme()

  return (
    <div className="nav">
      <button className="mode-btn" onClick={toggleModeClass}>{mode}</button>
   <ul>
    <li>
       <Link to="/" >Home</Link>
    </li>
    
    <li>
    <Link to="/context-api" >Create context</Link>
    </li>
    <li>
    <Link to="/zustand" >Zustand</Link>
    </li>
   </ul>

    </div>
  );
};
