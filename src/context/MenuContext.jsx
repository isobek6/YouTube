import { createContext, useState } from "react";

const MenuContext = createContext(null)

export const MenuProvider = ({children}) => {
  const [statusMenu, setStatusMenu] = useState(true)
  return(
    <MenuContext.Provider value={{statusMenu, setStatusMenu}}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
