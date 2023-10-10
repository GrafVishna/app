import React, {createContext, useMemo, useState} from "react";
import {ScreenLock} from "@src/functions/ScreenLock.jsx";

export const MenuContext = createContext(false);


export const UpdateMenuProvider = ({children}) => {

    const [stateMenu, setStateMenu] = useState(false);
    const value = useMemo(() => (
        {stateMenu, setStateMenu}
    ), [stateMenu]);

    ScreenLock(stateMenu)

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
}