/* eslint-disable react/prop-types */
import { createContext , useState , useContext , useEffect } from "react"

const Theme = createContext()

export const ThemeContext = ({ children }) => {

    const [mode , setMode] = useState("light");

    const toggleModeClass = ()=>{
        if(mode === "light"){
            setMode("dark")
        } else{
            setMode("light")
        }

    };

    useEffect(()=>{
        if(mode === "dark"){
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode")
        }else{
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode")

        }
    },[mode])
   

  return (
    <div>
        <Theme.Provider value={{mode , toggleModeClass}}>
            {children}

        </Theme.Provider>

    </div>
  )
}
export const useTheme = ()=> useContext(Theme)