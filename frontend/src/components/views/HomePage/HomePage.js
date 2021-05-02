import React, {Fragment} from 'react'
import HomeSearch from './HomeSearch'
import LectureItemList from '../LectureItemList/LectureItemList'
import './HomePage.scss'
 
const HomePage = () => {

  return (
    <Fragment>
      <HomeSearch />
      <div id="advertisement"></div>
      <LectureItemList />
    </Fragment>
  )
}

export default HomePage;
