import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( NewCategory) => {

            if (categories.includes(NewCategory)) return;
            // categories.push('Valorant');
            setCategories([NewCategory, ...categories ]);
            // setCategories(cat =>[...cat, 'Valorant'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={(value) => onAddCategory(value)}
        />

            {
            categories.map( (category) => (
                        <GifGrid  key={ category } category={ category }/>
                ))
            }

        



    </>
  )
}
