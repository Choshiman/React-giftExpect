import { useState } from "react"

export const  AddCategory= ({ onNewCategory }) => {

    const [inputVale, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = () =>{
        event.preventDefault();
        if (inputVale.trim().length <= 1) return;

        // setCategories( categories => [inputVale, ...categories]);
        onNewCategory(inputVale.trim());
        setInputValue('');
    }
  
    return (
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputVale}
        onChange={onInputChange}
    />
    </form>
    
  )
}
