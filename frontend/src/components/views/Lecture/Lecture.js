import React, {Fragment, useState} from 'react';
import './Lecture.scss';
import ReplyBox from './ReplyBox';
 
const Lecture = () => {
 
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
  const [clickedRecommend, setClickedRecommend] = useState(false);
  const [clickedInterest, setClickedInterest] = useState(false);

  const { category, level, title, link, teacher, free, term, explain, hash_tag, recommendation, epilogue, recommend, interest } = lectureData; 
  

  const buttonClick = (e, title) =>{
    console.log(e, title);
    if(title === "recommend"){
      setLectureData({
        ...lectureData,
        recommend : (clickedRecommend ? recommend - 1 : recommend + 1),
      });
      setClickedRecommend(!clickedRecommend);
    }
    else {
      setLectureData({
        ...lectureData,
        interest : (clickedInterest ? interest - 1 : interest + 1),
      });
      setClickedInterest(!clickedInterest);
    }
  }

  return (
    <Fragment>
      Lecture
      <div id="LectureBox">
        <div>{category}</div>
        <button>커리큘럼 추가</button>
        <button>수강</button>
        <div id="LectureInfoBox">
          <ul>
            <li>강좌이름 {title}</li>
            <li>강사이름 {teacher}</li>
            <li>이미지</li>
            <li>난이도 {level}</li>
            <li>링크 {link}</li>
            <li>강의료 {free}</li>
            <li>강의기간 {term}</li>
            <li>추가설명 {explain}</li>
            <li>태그 {hash_tag}</li>
          </ul>
        </div>

        <div id="buttonBox">
          <div className="lectureButton" onClick={(e)=>buttonClick(e,"recommend")}><div id="lectureButton_title">추천</div><div>{recommend}</div></div>
          <div className="lectureButton" onClick={(e)=>buttonClick(e,"interest")}><div id="lectureButton_title">관심</div><div>{interest}</div></div>
        </div>
        
        <ReplyBox />
      </div>  
    </Fragment>
  )
}

export default Lecture;
