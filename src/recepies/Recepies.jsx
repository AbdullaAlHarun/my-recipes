import { useEffect, useState } from 'react';
import './recepies.css'
import Recepie from '../recepie/recepie'


const Recepies = () => {
    const [recepies, setRecepies] = useState([]);
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);
    const [toastVisible, setToastVisible] = useState(false);
    const [totalPreparationTime, setTotalPreparationTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(()=>{
        fetch("/recipes.json")
        .then(res => res.json())
        .then(data => {
            setRecepies(data)
        })
    },[])

    const handleAddToCook = (recepie) => {
        if (!selectedRecipes.find(selectedRecipe => selectedRecipe.recipe_id === recepie.recipe_id)) {
            setSelectedRecipes([...selectedRecipes, recepie]);
            setTotalPreparationTime(totalPreparationTime + parseInt(recepie.preparing_time));
            setTotalCalories(totalCalories + parseInt(recepie.calories));
        } else {
            setToastVisible(true);
            setTimeout(() => {
                setToastVisible(false);
            }, 3000);
        }
    };

    const handlePrepare = (recipe) => {
   
        const updatedSelectedRecipes = selectedRecipes.filter(r => r.recipe_id !== recipe.recipe_id);
        setSelectedRecipes(updatedSelectedRecipes);
        setCurrentlyCookingRecipes([...currentlyCookingRecipes, recipe]);
    };

    return (
        <div className='ml-4 mr-4 lg:ml-32 lg:mr-32'>
           
           <div className="section-header">
            <h2 className="flex justify-center py-7 text-[#131318] font-extrabold text-2xl lg:text-4xl">
                    Our Recipes
                </h2>
                <p className="m-auto text-center pb-7 text-[#12132D] max-w-xl">
                    Embark on a Gastronomic Journey with Our Diverse Collection of Recipes,
                    Each Crafted to Delight Your Palate and Ignite Your Passion for Cooking.
                </p>
           </div>

         
           <div className="recepies-container gap-8 flex flex-col md:flex-row justify-between text-center">
              
                <div id="recepies-container" className="w-full md:w-3/5 mb-8 md:mb-0 gap-8 flex flex-wrap justify-between text-center">
                    {
                        recepies.map(recepie =>
                        <Recepie 
                        recepie={recepie} 
                        key={recepie.recipe_id}
                        onAddToCook={() => handleAddToCook(recepie)} 
                        ></Recepie>
                             
                    )}
                </div>
 
               
                <div className="w-full md:w-2/5 p-8 mb-8 bg-gray-300 rounded-xl">
                    <div className="w-full">
                    <h2 className="text-2xl font-bold md:text-base">Want to cook: {selectedRecipes.length}</h2>
                    </div>
                    <div className="flex justify-around gap-8 font-bold">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedRecipes.map(recipe => (
                                    <tr key={recipe.recipe_id}>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time}</td>
                                        <td>{recipe.calories}</td>
                                        <td>
                                            <button className='btn btn-primary' onClick={() => handlePrepare(recipe)}>Preparing</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Display toast message */}
                        {toastVisible && (
                            <div className="toast text-[red] font-bold">
                                <p>You have already selected this recipe!</p>
                            </div>
                        )}


                    </div>

                    <div>
                        <h2 className="text-2xl font-bold md:text-base">Currently cooking: {currentlyCookingRecipes.length}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentlyCookingRecipes.map(recipe => (
                                    <tr key={recipe.recipe_id}>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time}</td>
                                        <td>{recipe.calories}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> 
                    </div>
                    <div className="mt-8">
                        <p>Total Preparation Time: {totalPreparationTime} min</p>
                        <p>Total Calories: {totalCalories} calories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recepies;