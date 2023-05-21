import { createContext, useContext, useEffect, useState } from "react";

const RecentContext = createContext();
const RecentProvider = ({ children }) => {
    const [recent, setRecent] = useState([]);
    useEffect(()=>{
        let recentItems=localStorage.getItem("recent");
        if(recentItems) setRecent(JSON.parse(recentItems));
    },[])
    return (
        <RecentContext.Provider value={[recent, setRecent]}>
            {children}
        </RecentContext.Provider>
    )
};

const useRecent= () => useContext(RecentContext);

export { useRecent, RecentProvider };