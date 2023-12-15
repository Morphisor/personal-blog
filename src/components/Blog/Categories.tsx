import { slug } from "github-slugger"
import { Category } from "./Category"

interface Props {
    categories: string[]
    currentSlug: string
}

export function  Categories({ categories, currentSlug }: Props) {
    return (
        <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light 
        border-b-2 border-solid border-dark dark:border-light py-4 flex item-start flex-wrap font-medium mx-5 md:mx-10">
            {categories.map(cat => 
            <Category 
                key={cat}
                link={`/categories/${cat}`}
                name={cat}
                active={cat.toLowerCase() === slug(currentSlug).toLowerCase()}
            />)}
        </div>
    )
}