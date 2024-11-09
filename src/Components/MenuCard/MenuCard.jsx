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
        </div>
    );
};
MenuCard.propTypes = {
    meal: PropTypes.object
}
export default MenuCard;