import axios from "../api/axios"
import { CATEGORIES_URL,MEAL_CATEGORIES_URL,MEAL_SINGLE_URL,SEARCH_URL} from "../utils/constants";
import { FETCH_CATEGORY_BEGIN,FETCH_CATEGORY_ERROR,FETCH_CATEGORY_MEALS_SUCCESS,FETCH_CATEGORY_MEALS_BEGIN,FETCH_CATEGORY_MEALS_ERROR, FETCH_CATEGORY_SUCCESS,FETCH_SINGLE_MEAL_BEGIN ,FETCH_SINGLE_MEAL_SUCCESS,FETCH_SINGLE_MEAL_ERROR,FETCH_MEALS_BEGIN,FETCH_MEALS_SUCCESS,FETCH_MEALS_ERROR} from "./actions";

// startFetchCategories 
export const startFetchCategories = async(dispatch)=>{
   
    try{
        dispatch({type:FETCH_CATEGORY_BEGIN});
        const response = await axios.get(`${CATEGORIES_URL}`)
        
         dispatch({type:FETCH_CATEGORY_SUCCESS,payload:response.data.categories})
       
    }catch(error){
        dispatch({type:FETCH_CATEGORY_ERROR,payload:error.message})
    }
}

// startFetchCategories
export const startFetchSingleMeal = async(dispatch,id)=>{
    try{
        dispatch({type:FETCH_SINGLE_MEAL_BEGIN});
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`)
        
         dispatch({type:FETCH_SINGLE_MEAL_SUCCESS,payload:response.data.meals})
        console.log("mealactiondata",response.data.meals);
    }catch(error){
        dispatch({type:FETCH_SINGLE_MEAL_ERROR,payload:error.message})
    }
}

// startFetchMealByCategory
export const startFetchMealByCategory = async(dispatch,category)=>{
    try{
        dispatch({type:FETCH_CATEGORY_MEALS_BEGIN});
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`)
        
         dispatch({type:FETCH_CATEGORY_MEALS_SUCCESS,payload:response.data.meals})
        // console.log("mealactiondata",response.data.meals);
    }catch(error){
        dispatch({type:FETCH_CATEGORY_MEALS_ERROR,payload:error.message})
    }
}

// startFetchMealBySearch
export const startFetchMealBySearch = async(dispatch,searchFood)=>{
    try{
        dispatch({type:FETCH_MEALS_BEGIN});
        const response = await axios.get(`${SEARCH_URL}${searchFood}`)
        
         dispatch({type:FETCH_MEALS_SUCCESS,payload:response.data.meals})
        console.log("mealactiondata",response.data.meals);
    }catch(error){
        dispatch({type:FETCH_MEALS_ERROR,payload:error.message})
    }
}