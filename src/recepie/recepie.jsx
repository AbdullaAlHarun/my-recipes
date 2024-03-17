

const recepie = ({recepie, onAddToCook }) => {
   
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-2xl border-gray-200 border-2">
                <figure className="px-10 pt-10 rounded-lg">
                    <img className="rounded-lg" src={recepie.recipe_image} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{recepie.recipe_name}</h2>
                    <p>{recepie.short_description}</p>
                    <hr className="border-2"></hr>

                    <h2 className="font-bold">Ingredients: {recepie.ingredients.length}</h2>
                    <ul className="list-disc list-inside border-y-2">
                        {recepie.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-left">{ingredient}</li>
                        ))}
                    </ul>
                    <div className="flex justify-between gap-8 font-semibold">
                        <p>
                        <i className="fa-solid fa-clock mr-2"></i>
                        {recepie.preparing_time}
                        </p>
                        <p>
                        <i className="fa-solid fa-fire mr-2"></i>
                         {recepie.calories}
                        </p>
                    </div>
                    <div>

                    <button className="btn bg-[#0BE58A] border-0 rounded-full" onClick={() => onAddToCook(recepie)}>
                        Want to Cook
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default recepie;