import { Navigate } from 'react-router-dom';
import { DialogInfo } from '../pages/dialogs/DialogInfo';
import { DialogSort } from '../pages/dialogs/DialogSort';

export function DialogRoute(props) {
    // settingDialog={settingDialog} content={content} tittle={tittle} closeDialog={closeDialog}
    //const id = props.id ?? '';
    const dialog = props.dialogObject ?? null;

    // if(id == '')
    //     return null;

    return dialog;
}