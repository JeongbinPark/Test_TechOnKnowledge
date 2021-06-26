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
     interest: 0
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
    interest: 35,
    imageSrc: "https://cdn.inflearn.com/wp-content/uploads/algorith.png"
  });
  const [clickedRecommend, setClickedRecommend] = useState(false);
  const [clickedInterest, setClickedInterest] = useState(false);

  const { category, level, title, link, teacher, fee, term, explain, hash_tag, recommendation, epilogue, recommend, interest, imageSrc } = lectureData;


  const buttonClick = (e, title) => {
    console.log(e, title);
    if (title === "recommend") {
      setLectureData({
        ...lectureData,
        recommend: (clickedRecommend ? recommend - 1 : recommend + 1),
      });
      setClickedRecommend(!clickedRecommend);
    }
    else {
      setLectureData({
        ...lectureData,
        interest: (clickedInterest ? interest - 1 : interest + 1),
      });
      setClickedInterest(!clickedInterest);
    }
  }

  return (
    <Fragment>
      <div id="LectureBox">
        <div id="LectureBox_top">
          <div>{category}</div>
          <div>
            <button id="addToCurriculumButton">커리큘럼 추가</button>
            <button id="registerButton">수강</button>
          </div>
        </div>
        <div id="LectureInfoBox">
          <ul>
            <li>
              <div id="LectureInfoBox_image">
                <img src={imageSrc} alt={title} />
              </div>
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
              <div className="LectureInfoList_title">링크</div>
              <div className="LectureInfoList_content"><a href={link} target="_blank">강의 바로가기</a></div>
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
          </ul>
        </div>

        <div id="buttonBox">
          <div className="lectureButton" onClick={(e) => buttonClick(e, "recommend")}><div id="lectureButton_title">추천</div><div>{recommend}</div></div>
          <div className="lectureButton" onClick={(e) => buttonClick(e, "interest")}><div id="lectureButton_title">관심</div><div>{interest}</div></div>
        </div>

        <ReplyBox />
      </div>
    </Fragment>
  )
}

export default Lecture;
