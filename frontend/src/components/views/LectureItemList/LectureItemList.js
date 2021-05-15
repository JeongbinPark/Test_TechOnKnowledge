import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './LectureItemList.scss';
import courseTestImg from '../../../images/courseTestImg.jpg';

//임시 데이터
const tempData = [
  {
    id: 1,
    image: courseTestImg,
    title:"C언어",
    fee:"20000",
    Hash_tag:["개발", "코딩"]
  },
  {
    id: 2,
    image: courseTestImg,
    title:"웹보안",
    fee:"50000",
    Hash_tag:["보안", "코딩"]
  },
  {
    id: 3,
    image: courseTestImg,
    title:"피아노",
    fee:"200000",
    Hash_tag:["취미", "악기"]
  }
];

const LectureItemList = () => {
  const [lectureItemsInfo, setLectureItemsInfo] = useState([]);

  //추후 서버에서 가져와 fetch
  useEffect(()=>{
    setLectureItemsInfo(tempData);
  },[])

  const ItemsList =
    lectureItemsInfo.map((info) => 
      <LectureItem 
      key={info.id}
      id={info.id} 
      image={info.image} 
      title={info.title}
      fee={info.fee}
      Hash_tag={info.Hash_tag}
      />
    );  
  

  return (
    <Fragment>
      <div id="lists">
       {ItemsList}
      </div>
    </Fragment>
  )
}
export default LectureItemList;


const LectureItem = (props) => {
  return (
    <Fragment>
      <div className="LectureItem">
      <Link to={`/lecture/:${props.id}`}>
        <img src={props.image}  alt={props.title}/>
        <h3>{props.title}</h3>
        <h5>{props.fee}원</h5>
        <h5>#{props.Hash_tag[0]} #{props.Hash_tag[1]}</h5>  {/* 임시로 두 개만 지정. 추후 개수, 글자수 결정*/}
      </Link>
      </div>
    </Fragment>
  )
}


