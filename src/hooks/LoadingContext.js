import { useContext, createContext, useState } from 'react';

const LoadingContext = createContext();

export function useLoading() {
    return useContext(LoadingContext);
}

export function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(false);

    const settingLoading = (isLoad) => { setLoading(isLoad) };

    return (
        <LoadingContext.Provider value={{loading ,settingLoading}}>
            {children}
        </LoadingContext.Provider>
    )

}