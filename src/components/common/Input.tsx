import React, { useState } from 'react';
import { IText } from '../../interfaces';

const Input = ({ name, type, placeholder }: IText) => {

    const [field, setField] = useState('');

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setField(e.currentTarget.value);
    }

    return <input
        type={type}
        value={field}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
    />
}

export default Input;