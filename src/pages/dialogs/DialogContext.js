import { useContext, createContext, useState } from 'react';

const DialogContext = createContext();

export function useDialog() {
    return useContext(DialogContext);
}

export function DialogProvider({ children }) {
    const [open, setOpen] = useState(false);

    const [content, setContent] = useState('');

    const openDialog = () => { setOpen(true) };

    const closeDialog = () => { setOpen(false) }

    const settingContent = (varriable) => { setContent(varriable) }

    return (
        <DialogContext.Provider value={{
            open
            , content
            , settingContent
            , openDialog
            , closeDialog
        }}>
            {children}
        </DialogContext.Provider>
    )

}