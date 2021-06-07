import React, {Fragment} from 'react';
import queryString from 'query-string';
import HomeSearch from '../HomePage/HomeSearch';  //임시

const SearchPage = ({location, match}) => {
  const query = queryString.parse(location.search);
  console.log(query.category);

  const category = query.category;

  return (
    <Fragment>
      <h1>SearchPage</h1>
      <div>검색창
        <HomeSearch/>
      </div>
      <button>추천 글 작성하기</button>
      <div>{category}</div>
      <div>
        글 목록
        <ul>
          <li>sdsads</li>
        </ul>
      </div>
    </Fragment>
  )
}

export default SearchPage;
