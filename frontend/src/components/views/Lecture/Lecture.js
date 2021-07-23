import React, { Fragment, useState } from 'react';
import './Lecture.scss';
import ReplyBox from './ReplyBox';

const Lecture = () => {
  /*
   const [lectureData, setLectureData] = useState({
     category: '',
     level: '',
     title: '',
     link: '',
     teacher: '',
     fee: 0,
     term: 0,
     explain : '',
     hash_tag : '',
     recommendation: 0,
     epilogue: '',
     recommend: 0,
     author: '',
   });
  const [userLectureData, setUserLectureData] = useState({
    clickedRecommend : false,
    clickedRegister : false,
  });
   */
  const [lectureData, setLectureData] = useState({
    category: 'Programming',
    level: '초급',
    title: '알고리즘 강의',
    link: 'http://www.inflearn.com/course/알고리즘-강좌#curriculum',
    teacher: '권오흠',
    fee: 0,
    term: 0,
    explain: 'C언어와 자료구조를 익히신 분에게 추천합니다. ',
    hash_tag: '#알고리즘 #검색트리 #동적계획법',
    recommendation: 0,
    epilogue: '',
    recommend: 10,
    imageSrc: "https://cdn.inflearn.com/wp-content/uploads/algorith.png",
    author: 'abcd'
  });

  const [userLectureData, setUserLectureData] = useState({
    clickedRecommend : false,
    clickedRegister : false,
  });

  const [isMouseOver, setIsMouseOver] = useState(false);

  const { category, level, title, link, teacher, fee, term, explain, hash_tag, recommendation, epilogue, recommend, imageSrc,author } = lectureData;
  const { clickedRecommend, clickedRegister} = userLectureData;

  const onRecommendClick = (e) => {
    //추천 취소
    if(clickedRecommend){
      setLectureData({
        ...lectureData,
        recommend: recommend - 1,
      });
      e.target.setAttribute('style','background-color:rgba(233, 231, 231, 0.911)');
    }
    //추천
    else {
      setLectureData({
        ...lectureData,
        recommend: recommend + 1,
      });
      e.target.setAttribute('style','background-color:lightgreen');
    }
    setUserLectureData({
      ...userLectureData,
      clickedRecommend: !clickedRecommend
    });
  }
  
  const onRegisterClick = (e) => {
    //수강 취소
    if(clickedRegister){
      e.target.setAttribute('style','background-color:rgba(233, 231, 231, 0.911)');
      e.target.innerHTML = '수강';
    }
    //수강
    else {
     //e.target.setAttribute('style','background-color:lightgreen');
      e.target.innerHTML = '수강 취소';
    }
    setUserLectureData({
      ...userLectureData,
      clickedRegister: !clickedRegister
    });
  }

  const onMouseOverHandler = () => {
    setIsMouseOver(true);
  }
  const onMouseLeaveHandler = () => {
    setIsMouseOver(false);
  }
  return (
    <Fragment>
      <div id="LectureBox">
        <div id="LectureBox_top">
          <div>{category}</div>
          <div>
            <button id="recommendButton" onClick={onRecommendClick}>👍 {recommend}</button>
          </div>
        </div>
        <div id="LectureInfoBox">
          <ul>
            <li id="LectureInfoBox_image">
              <div id="LectureInfoBox_image_front" onMouseEnter={onMouseOverHandler}>
                <img src={imageSrc} alt={title} />
              </div>
              {isMouseOver && 
              <div id="LectureInfoBox_image_back"  onMouseLeave={onMouseLeaveHandler}>
                <a href={link} target="_blank" rel="noreferrer">
                  <div id="LectureInfoBox_image_back_blank">
                    <div>강의 바로가기</div>
                  </div>
                </a>
              </div>
              }
            </li>
            <li>
              <div className="LectureInfoList_title">강좌이름</div>
              <div className="LectureInfoList_content">{title}</div>
            </li>
            <li>
              <div className="LectureInfoList_title">강사이름</div>
              <div className="LectureInfoList_content">{teacher}</div>
            </li>
            <li>
              <div className="LectureInfoList_title">난이도</div>
              <div className="LectureInfoList_content">{level}</div>
            </li>
            <li>
              <div className="LectureInfoList_title">강의료</div>
              <div className="LectureInfoList_content">{fee}</div>
            </li>
            <li>
              <div className="LectureInfoList_title">강의기간</div>
              <div className="LectureInfoList_content">{term}</div>
            </li>
            <li>
              <div className="LectureInfoList_title">추가설명</div>
              <div className="LectureInfoList_content">{explain}</div>
            </li>
            <li>
              <div className="LectureInfoList_title">태그</div>
              <div className="LectureInfoList_content">{hash_tag}</div>
            </li>
            <li>
              <div className="LectureInfoList_title">작성자</div>
              <div className="LectureInfoList_content">{author}</div>
            </li>
          </ul>
        </div>
        <div id="registerButtonBox">
          <button id="registerButton" onClick={onRegisterClick}>수강</button>
          {clickedRegister &&
            <button>수강 완료</button>
          }
        </div>

        <ReplyBox />
      </div>
    </Fragment>
  )
}

export default Lecture;
