import React, {Fragment, useState} from 'react';
 
const Lecture = () => {
 
  const [lectureData, setlectureData] = useState({
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
    epilogue: ''
  });

  const { category, level, title, link, teacher, free, term, explain, hash_tag, recommendation, epilogue } = lectureData; 

  return (
    <Fragment>
      Lecture
      <div>
        <div>{category}</div>
        <div>커리큘럼 추가</div>
        <div>수강</div>
        <div>강좌이름 {title}</div>
        <div>강사이름 {teacher}</div>
        <div>이미지</div>
        <ul>
          <li>난이도 {level}</li>
          <li>링크 {link}</li>
          <li>강의료 {free}</li>
          <li>강의기간 {term}</li>
          <li>추가설명 {explain}</li>
          <li>태그 {hash_tag}</li>
        </ul>
        <div>
          <div>추천수</div>
          <div>관심수</div>
        </div>
        <div>
          <div>관련강의</div>
          <div>후 기</div>
          <div>질 문</div>
          <div>내용</div>
        </div>

      </div>
    </Fragment>
  )
}

export default Lecture;
