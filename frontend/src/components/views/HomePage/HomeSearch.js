import React, { Fragment, useState } from 'react';
import useForm from '../../utils/useForm';

const HomeSearch = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { search: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: {}
  });

  const showDetailSearch = () => {
    setOpenDetail(!openDetail);
  }

  return (
    <div id="HomeSearch">
      <form onSubmit={handleSubmit}>
        <div id="searchBar">
          <div id="searchInputBox">
            <input type="text" onChange={handleChange} value={inputValue} placeholder="강의 검색" />
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
