import React, {Fragment, useState} from 'react'
 
const HomeSearch = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const showDetailSearch = () => {
    setOpenDetail(!openDetail);
  }
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div id="HomeSearch">
      <form onSubmit={onSubmit}>
      <div id="searchBar">
        <div id="searchInputBox">
         <input type="text" onChange={onInputChange} value={inputValue} placeholder="강의 검색" />
        </div>
        <div id="detailBox" onClick={showDetailSearch}><span id="icon_detail"></span></div>
        <button><span id="icon_search"></span></button>
      </div>
      {openDetail &&
          <div id="searchDetail">

          </div>}
      </form>
    </div>
  )
}

export default HomeSearch;
