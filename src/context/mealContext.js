import React, {createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer } from "../reducers/mealReducer";
import { startFetchCategories } from "../actions/mealActions";


const initialState = {
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false,
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,
    
}

const MealContext = createContext({});
export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect(() => {
        startFetchCategories(dispatch);
    }, []);
    console.log("state",state);

    return (
        <MealContext.Provider value = {{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}

