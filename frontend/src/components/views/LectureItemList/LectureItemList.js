import React, { Fragment, useEffect, useState } from 'react';
import './LectureItemList.scss';
import courseTestImg from '../../../images/courseTestImg.jpg';
import LectureItem from './LectureItem';

//임시 데이터
const tempData = [
  {
    id: 1,
    image: courseTestImg,
    title: "C언어",
    fee: "20000",
    Hash_tag: ["개발", "코딩"]
  },
  {
    id: 2,
    image: courseTestImg,
    title: "웹보안",
    fee: "50000",
    Hash_tag: ["보안", "코딩"]
  },
  {
    id: 3,
    image: courseTestImg,
    title: "피아노",
    fee: "200000",
    Hash_tag: ["취미", "악기"]
  }
];

const LectureItemList = () => {
  const [lectureItemsInfo, setLectureItemsInfo] = useState([]);

  //추후 서버에서 가져와 fetch
  useEffect(() => {
    setLectureItemsInfo(tempData);
  }, [])

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
