import React, {Fragment} from 'react'
import HomeSearch from './HomeSearch'
import LectureItemList from '../LectureItemList/LectureItemList'
import './HomePage.scss'
 
const HomePage = () => {

  return (
    <Fragment>
      <HomeSearch />
      <div id="advertisement">홍보</div>
      <div id="home_mylectures">
        <h2>나의 커리큘럼</h2>
        <LectureItemList />
        <h2>추천강좌</h2>
        <LectureItemList />
      </div>
    </Fragment>
  )
}

export default HomePage;
