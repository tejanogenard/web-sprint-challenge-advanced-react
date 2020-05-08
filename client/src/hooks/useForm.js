// write your custom hook here to control your checkout form
import {useState} from 'react'


export const useForm = (key, initalValue) => {
    const [values, setValues] = useState(key, initalValue)

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return [values, handleChanges]
}