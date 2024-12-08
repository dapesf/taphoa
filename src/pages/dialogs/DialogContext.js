import { useContext, createContext, useState } from 'react';

const DialogContext = createContext();

export function useDialog(children) {
    return useContext(DialogContext);
}

export function chooseDialog(children) {

    if (children == null || children == undefined) {
        return null;
    }

    return { children }
}


export function DialogProvider({ children }) {

    const [dialogObject, setDialogObject] = useState({});

    const [open, setOpen] = useState(false);

    const [content, setContent] = useState('');

    const [tittle, setTittle] = useState('');

    const settingDialog = (dlg) => { setDialogObject(dlg) };

    const openDialog = () => { setOpen(true) };

    const closeDialog = () => { setOpen(false) }

    const settingContent = (varriable) => { setContent(varriable) }

    const settingTittle = (varriable) => { setTittle(varriable) }

    return (
        <DialogContext.Provider value={{
            dialogObject
            , settingDialog
            , content
            , settingContent
            , tittle
            , settingTittle
            , open
            , openDialog
            , closeDialog
        }}>
            {children}
        </DialogContext.Provider>
    )

}