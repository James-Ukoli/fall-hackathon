import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import { courses } from "../data"
//import data here


{/* <div className="carousel-slide">
<img src={course.image} alt={`Image ${index + 1}`} className="carousel-image" />

<div className="carousel-desc-duo">
<p className="carousel-title"><strong>{course.title}</strong></p><img src={dots} alt="dots" className="dot-menuu"/>
<p className="carousel-instructor" style={{fontWeight: "700"}}><strong>{course.instructor}</strong></p>
</div>

</div> */}

function Search({searchResults, setSearchResults, toBeSearched, setToBeSearched}) {

  const [isOpen, setIsOpen] = useState(false);
  console.log(searchResults.length);

  var firstCharacterInSearch = searchResults.charAt(0);
  var firstCharacterInSearchUpper = firstCharacterInSearch.toUpperCase();
  var restOfCharactersSearch = searchResults.slice(1);
  var newSearchWord = firstCharacterInSearchUpper.concat(restOfCharactersSearch)


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('../course');
};


// 1) Filter CATEGORIES 2) Filter LEVEL 
// 3) Shufflle New array 4) MAP to div cards styles

/// 1 Filter searchwords === course category (DONE)
const filteredCategorizedCourses = courses.filter((course)=> {
  return  course.category.toLowerCase() === searchResults.toLowerCase()
})

///2 Filter filter Course Level
// a) Easy
const filteredCatgoryandBeginnnerLevelCourses = filteredCategorizedCourses.filter((course)=>{
  return course.level.toLowerCase() == "beginner"
})
// b) Intermediate
const filteredCatgoryandIntermediateLevelCourses = filteredCategorizedCourses.filter((course)=>{
  return course.level.toLowerCase() == "intermediate"
})
// c) Any
const filteredCatgoryAdvancedLevelCourses = filteredCategorizedCourses.filter((course)=>{
  return course.level.toLowerCase() !== "beginner" && course.level.toLowerCase() !== "intermediate";
})

///3 Randomize indexes in new arrays
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 3a Beginner
shuffleArray(filteredCatgoryandBeginnnerLevelCourses);
var beginnerLoadedCategories = filteredCatgoryandBeginnnerLevelCourses.slice(0, 3);
//3b Intermediate
shuffleArray(filteredCatgoryandIntermediateLevelCourses);
var intermeidateLoadedCategories = filteredCatgoryandIntermediateLevelCourses.slice(0,3);
///3c Any 
shuffleArray(filteredCatgoryAdvancedLevelCourses)
var advancedLoadedCategories = filteredCatgoryAdvancedLevelCourses.slice(0,3);

//4 Map it out 
{/* <div key={index} className="carousel-slide">
<img src={course.image} alt={`Image ${index + 1}`} className="carousel-image" />
<p className="carousel-title">{course.title}</p>
</div> */}

  return (
    <>
    {/* <NavBar searchResults={searchResults} setSearchResults={setSearchResults}/><button onClick={handleSearch}>Search</button> */}
    {toBeSearched.length > 0 ? 
    <div>
        <br></br>
        <br></br>
          <div>
            {beginnerLoadedCategories.map((course)=>{
              return    <div className="course-container">
              <button className='course-box'>{course.title}</button>
            </div>
            })}
          </div>
        <br></br>
        <br></br>
          <div className='search-title result-data-container'>{newSearchWord}</div>
          <div className='result-data-container'>456 results</div>
          <br></br>
          <br></br>
          <br></br>
        <div className='result-data-container filter-button'>Filter</div>
        <br></br>
          <br></br>
          {/* BEGINNERS */}
          <div className='result-data-container'> Beginner {newSearchWord} Tutorials</div>
        <div className='results-cards'>
          
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* INTERMEDIATES */}
          <div className='result-data-container'> Intermediate {newSearchWord} Tutorials</div>
        <div className='results-cards'>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* ANY  */}
          <div className='result-data-container'> Advanced {newSearchWord} for Tutorials</div>
        <div className='results-cards'>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
          <div className="course-container">
            <button className='course-box'>HI</button>
          </div>
        </div>
        <br></br>
        {/* <br></br>
      <div className='result-data-container'>
          <h3>More results for {newSearchWord}..</h3>
        </div>
          <div className="course-container">
          <button className='course-box' onClick={handleSubmit}>
          Click here to take yourself to the page for this course
        </button>
      </div> */}
      <br></br>
      <br></br>
      <br></br>
    </div>
: `ALL OF THE SEARCH RESULTS FOR ${toBeSearched.toUpperCase()} (EX)`}
    </>
  );
}

export default Search;