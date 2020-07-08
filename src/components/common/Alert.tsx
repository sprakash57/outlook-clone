import React from 'react';

type IProps = { msg: string, status: number };

const Alert: React.FC<IProps> = ({ msg, status }) => {
    const baseStyle = 'alert text-center ';
    const color = status === 200 ? 'alert-success' : 'alert-danger';
    return <div className={baseStyle + color} role="alert">{msg}</div>
}

export default Alert;