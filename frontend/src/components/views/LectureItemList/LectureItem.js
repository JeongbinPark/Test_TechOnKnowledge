import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const LectureItem = (props) => {
  return (
    <Fragment>
      <div className="LectureItem">
        <Link to={`/lecture/:${props.id}`}>
          <img src={props.image} alt={props.title} />
          <h3>{props.title}</h3>
          <h5>{props.fee}원</h5>
          <h5>#{props.Hash_tag[0]} #{props.Hash_tag[1]}</h5>  {/* 임시로 두 개만 지정. 추후 개수, 글자수 결정*/}
        </Link>
      </div>
    </Fragment>
  )
}

export default LectureItem;
