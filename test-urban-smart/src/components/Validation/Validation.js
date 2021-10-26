import { useState } from 'react';
import { referenceState } from '../../utils'

export function useFormWithValidation () {
    const [data, setData] = useState({login: '', password: ''});
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState('');

    const handleChangeData = (e) => {
        const {name, value} = e.target
        const newData = {
            ...data,
            [name]: value,
        };
        setData(newData)
        formValidation(newData)
    }

    const formValidation = (data) => {
        if (JSON.stringify(data) === JSON.stringify(referenceState)) {
            setIsValid(true)
            setError("")
        } else {
            setError("Неверный логин или пароль")
        }
    }

    return { data, handleChangeData, error, isValid };
}