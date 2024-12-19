import React, { createContext, ReactNode, useContext, useState } from "react";

const searchContext = createContext({search: '', setSearch: (search: string) => {}})
export const SearchContextProvider = ({children}: {children: ReactNode}) => {
    const [search, setSearch] = useState('')
    return (
        <searchContext.Provider value={{search, setSearch}}>
            {children}
        </searchContext.Provider>
    )
}

export const useSearchContext = () => useContext(searchContext)