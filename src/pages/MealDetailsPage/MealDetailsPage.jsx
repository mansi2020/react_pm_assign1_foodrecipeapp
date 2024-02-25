import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import CategoryList from "../../components/Category/CategoryList";
import MealSingle from "../../components/Meal/MealSingle";
import { startFetchSingleMeal } from "../../actions/mealActions";
import { useMealContext } from "../../context/mealContext"; //context

// loader
import Loader from "../../components/Loader/Loader";

const MealDetailsPage = () => {
  // data
  let ingredientsArr = [],
    measuresArr = [],
    singleMeal = {};
  const { categories, dispatch, meal, categoryLoading, mealLoading } =
    useMealContext();
  const { id } = useParams();

  // useeefect
  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [id]);

  if (meal && meal?.length > 0) {
    for (let props in meal[0]) {
      if (props.includes("strIngredient")) {
        if (meal[0][props]) ingredientsArr.push(meal[0][props]);
      }

      if (props.includes("strMeasure")) {
        if (meal[0][props]) {
          if (meal[0][props].length > 1) {
            measuresArr.push(meal[0][props]);
          }
        }
      }
    }

    
    singleMeal = {
        id: meal[0]?.idMeal,
        category: meal[0]?.strCategory,
        youtube: meal[0]?.strYoutube,
        ingredients: ingredientsArr,
        instructions: meal[0]?.strInstructions,
        source: meal[0]?.strSource,
        area: meal[0]?.strArea,
        thumbnail: meal[0]?.strMealThumb,
        tags: meal[0]?.strTags,
        title: meal[0]?.strMeal,
        measures: measuresArr
      }
  }

  return (
    <main className='main-content bg-whitesmoke'>
    { (mealLoading) ? <Loader /> : <MealSingle meal = {singleMeal} /> }
    { (categoryLoading) ? <Loader /> : <CategoryList categories={categories} /> }
  </main>
  );
};

export default MealDetailsPage;
