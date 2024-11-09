import { useLoaderData } from "react-router-dom";

const Category = () => {
    const category = useLoaderData();
    // console.log(category);
    const {categories} = category;
    // console.log(categories);
    return (
        <div>
            <h1 className="text-center text-4xl font-serif font-bold mt-10">Meals Categories</h1>
            {/* {
                // categories.map(category=>)
            } */}
        </div>
    );
};

export default Category;