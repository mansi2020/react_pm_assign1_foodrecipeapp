import {useState} from 'react'
import {BsSearch} from "react-icons/bs"
import { useMealContext } from '../../context/mealContext'
import { useNavigate } from 'react-router-dom'
import { startFetchMealBySearch } from '../../actions/mealActions'

const SearchForm = () => {
  const navigate = useNavigate();

  // state
  const [searchFood,setSearchFood] = useState("");
  const [errorMsg,setErrorMsg] = useState();

  // contex data
  const {dispatch,meals} = useMealContext();

  // handle searchfood
  const handlleSearchFood = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchFood(e.target.value);
      setErrorMsg("");
    }else{
      setErrorMsg("Invalid Search Term...");
    }
  }

  // handle search result
  const handleSearchResult =(e)=>{
    e.preventDefault();
    // navigate("")
    startFetchMealBySearch(dispatch,searchFood)
    console.log(meals);
  }


  return (
    <form className='flex search-form align-center' onSubmit={(e)=>handleSearchResult(e)}>
      <input type="text" placeholder="Search recipes here..." className='form-control-input text-dark-gray fs-15' onChange={(e)=>handlleSearchFood(e)}/>
      <button type="submit" className='form-submit-btn text-white text-uppercase fs-14'>
      <BsSearch size={20} className='btn-icon'/>
      </button>
      
    </form>
  )
}

export default SearchForm
