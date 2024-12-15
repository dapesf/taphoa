import { useContext, createContext, useState } from 'react';

const AccountContext = createContext();

export function useAccount(children) {
    return useContext(AccountContext);
}

export function AccountProvider({ children }) {
    const [token, setSettoken] = useState(false);
    const settingToken = (token) => { setSettoken(token) };

    return (
        <AccountContext.Provider value={{token ,settingToken}}>
            {children}
        </AccountContext.Provider>
    )

}