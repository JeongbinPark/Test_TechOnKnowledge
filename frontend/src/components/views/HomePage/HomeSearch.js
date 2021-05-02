import React, {Fragment, useState} from 'react'
 
const HomeSearch = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    //임시
    setOpenDetail(true);
  }

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
      <div id="searchBar">
        <div id="searchInputBox">
         <input type="text" onChange={onInputChange} value={inputValue} placeholder="강의 검색" />
        </div>
        <button><span id="icon_search"></span></button>
        {openDetail &&
          <div id="searchDetail">

          </div>}
      </div>
      </form>
    </Fragment>
  )
}

export default HomeSearch;
