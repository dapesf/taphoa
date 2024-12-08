import { useEffect, useState } from 'react';
import { Text, Card, ButtonConfirm } from '../component/UIComponents';
import { useDialog } from './dialogs/DialogContext.js';
import { DialogSort } from './dialogs/DialogSort.js'; 
import { DialogFilter } from './dialogs/DialogFilter.js';
import "./css/ProductList.css"

export function ProductList() {
    const { settingDialog, openDialog, closeDialog } = useDialog();

    function openDialogSort() {
        settingDialog(<DialogSort closeDialog={closeDialog} />);
        openDialog();
    }

    function openDialogFilter() {
        settingDialog(<DialogFilter closeDialog={closeDialog} />);
        openDialog();
    }

    return (
        <>
            <div>
                <div className='product-list-header'>
                    <div>
                        <Text style='icon icon-sort' onClick={openDialogSort} />
                    </div>
                    <div className='product-type'>

                    </div>
                    <div>
                        <Text style='icon icon-filter' onClick={openDialogFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}