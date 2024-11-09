import PropTypes from "prop-types";

const MenuCard = ({meal}) => {
    console.log(meal);
    const {strMeal,strArea,strMealThumb,strYoutube} = meal || 'Comming Soon!';
    return (
        <div>
            <img src={strMealThumb} alt={strMeal} />
            <h3>{strMeal}</h3>
            <small>{strArea}</small>
            <a href={strYoutube}><span>See Videos</span></a>
            <button className='w-full mt-10 md:mt-0 bg-green-500 p-3 rounded-full hover:bg-green-800 duration-1000 hover:text-white font-sans font-semibold'>Add To Cart</button>
        </div>
    );
};
MenuCard.propTypes = {
    meal: PropTypes.object
}
export default MenuCard;