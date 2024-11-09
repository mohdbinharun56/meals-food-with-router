import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";


const Categories = () => {
    const category = useLoaderData();
    // console.log(category);
    const { categories } = category;
    // console.log(categories);
    return (
        <div className="mx-10 transition-all scroll-smooth">
            <h1 className="text-center text-4xl font-serif font-bold my-10">Meals Categories</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    categories.map(category => <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;