import { useState } from 'react';

type editNameProps = {
    editingName: string;
    initalUserName: string;
    onNameUpdated: () => void;
    onEditingNameUpdate: (newEditingName: string) => any;
    disabled: boolean;
};
export default function EditName(props: editNameProps) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onEditingNameUpdate(e.target.value);
    };
    const onNameSubmit = (e: any) => {
        props.onNameUpdated();
    };
    return (
        <div>
            <label>Update name:</label>
            <input value={props.editingName} onChange={(e) => onChange(e)} type='text' />
            <button onClick={onNameSubmit} disabled={props.disabled}>
                change
            </button>
        </div>
    );
}
