import { useLoaderData, useParams } from "react-router-dom";
import MenuCard from "../MenuCard/MenuCard";

const Menu = () => {
    const strCategoryTitle = useParams();
    // console.log(strCategoryTitle.strCategory);
    const {strCategory} = strCategoryTitle;
    const strCat = useLoaderData();
    // console.log(strCat);
    const {meals} = strCat;
    console.log(meals);
    return (
        <div>
            <h1 className="text-4xl text-center font-bold font-serif mt-10">Meals of {strCategory}</h1>
            <div>
                {
                   meals? meals.map(meal=><MenuCard key={meal.idMeal} meal={meal}></MenuCard>) : 
                   <div className="text-5xl grid place-items-center">
                     <p>Comming Soon</p>
                   </div>
                }
            </div>
        </div>
    );
};

export default Menu;