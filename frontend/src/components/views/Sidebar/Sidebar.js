import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Sidebar.scss';

//임시 데이터
const tempData_categoryLists = [
  {
    id : 0,
    title: "요리",
    category : "cooking"
  },
  {
    id : 1,
    title: "프로그래밍",
    category : "programming"
  },
  {
    id : 2,
    title: "언어",
    category : "language"
  },
  {
    id : 3,
    title: "음악",
    category : "music"
  }
]
 
const Sidebar = () => {
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
  const [categoryLists, setCategoryLists] = useState([]);

  //추후 서버에서 가져와 fetch
  useEffect(()=>{
    setCategoryLists(tempData_categoryLists);
  },[])

  const onCategoryClick = () => {
    setIsCategoryClicked(!isCategoryClicked);
  }

  const CategoryList =
  categoryLists.map((category) => 
    <li key={category.id}><Link to={`/search?category=${category.category}`}>{category.title}</Link></li>
  );  

  return (
    <div id="Sidebar">
      <div id="tag" onClick={onCategoryClick} style={Object.assign({}, styles.closedTag, isCategoryClicked && styles.openedTag)}><span>Category</span></div>
      <div id="categoryBox" style={Object.assign({}, styles.closedBox, isCategoryClicked && styles.openedBox)}>
        <ul>
          {CategoryList}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;

const styles = {
  openedTag : {
    left: 0,
    transition: '.25s all',
  },
  closedTag : {
    left: -150,
    transition: '.25s all',
  },
  openedBox : {
    left: -50,
    transition: '.25s all',
  },
  closedBox : {
    left: -250,
    transition: '.25s all',
  }
}