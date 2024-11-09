import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Category = ({ category }) => {
    console.log(category);
    const { strCategoryThumb, strCategory, strCategoryDescription } = category;

    // const navigate = useNavigate();

    // const handleMeals = (strCategory) =>{
    //     navigate(`/menu/s=${strCategory}` );
    // }
    return (
        <div className="border-2 border-black rounded-md p-6 shadow-lg shadow-gray-500">
            <img src={strCategoryThumb} alt={strCategory} />
            <h3 className='text-lg font-sans font-semibold my-2'>{strCategory}</h3>
            <div className='flex flex-col md:min-h-96'>
                <p className='flex-grow text-sm font-sans font-thin'>{strCategoryDescription}</p>
                {/* <button onClick={()=>handleMeals(strCategory)} className='w-full mt-10 md:mt-0 bg-green-500 p-3 rounded-full hover:bg-green-800 duration-1000 hover:text-white font-sans font-semibold'>Meals</button> */}
                <NavLink className='w-full mt-10 md:mt-0 bg-green-500 p-4 text-center rounded-full hover:bg-green-800 duration-1000 hover:text-white font-sans font-semibold' to={`/${strCategory}`}>Meals</NavLink>
            </div>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object
}

export default Category;