import { useEffect, useState } from 'react';
import { Text, Card, Section, ButtonConfirm } from '../component/UIComponents';
import { useDialog } from '../hooks/DialogContext.js';
import { DialogSort } from './dialogs/DialogSort.js';
import { DialogFilter } from './dialogs/DialogFilter.js';
import { DialogProductInput } from './dialogs/DialogProductInput.js';
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

    function openDialogProductInput() {
        settingDialog(<DialogProductInput closeDialog={closeDialog} />);
        openDialog();
    }

    return (
        <>
            <div className='product-list-header'>
                <div>
                    <Text style='icon icon-sort' onClick={openDialogSort} />
                </div>
                <div className='product-type'>
                <Text style='icon icon-more' onClick={openDialogProductInput} />
                </div>
                <div>
                    <Text style='icon icon-filter' onClick={openDialogFilter} />
                </div>
            </div>
            <div className='product-list-content'>
                <Section name={'Đường trắng'} quantity={'20.000'} unit={'Kg'}/>
                <Section name={'Sữa chưa Vinamilk'} quantity={'25.000'} unit={'Lốc'}/>
            </div>
        </>
    )
}