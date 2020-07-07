import React from 'react';
import { IText } from '../../interfaces';

const Input = ({ value, name, type, placeholder, onChange }: IText) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e);
    }

    return <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
    />
}

export default Input;