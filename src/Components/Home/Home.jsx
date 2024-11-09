import { useLoaderData } from "react-router-dom";

const Home = () => {
    const mealsCategory = useLoaderData();
    // console.log(mealsCategory.meals);
    const { meals } = mealsCategory;
    // console.log(meals)
    return (
        <div>
            {/* Banner restaurant */}
            <div className="relative text-white bg-[url('https://t4.ftcdn.net/jpg/04/76/57/27/360_F_476572792_zMwqHpmGal1fzh0tDJ3onkLo88IjgNbL.jpg')] bg-no-repeat bg-cover h-screen">
                <div className="bg-black p-10 md:absolute md:right-20 md:top-64 opacity-60 rounded-xl">
                    <h1 className="md:text-4xl text-white">Meals: {meals.length}</h1>
                    <div className="grid mt-10 md:grid-cols-5">
                        {
                            meals.map((meal, idx) => <ul key={idx} className="mt-2 md:mt-5 md:text-xl"><li>{idx + 1}. {meal.strCategory}</li></ul>)
                        }
                    </div>

                </div>
            </div>
            {/* Meals Category */}
        </div>
    );
};

export default Home;