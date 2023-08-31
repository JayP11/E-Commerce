import { useContext, createContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{myName:"JP"}}>{children}</AppContext.Provider>
    )
}

// Custom Hook

const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };