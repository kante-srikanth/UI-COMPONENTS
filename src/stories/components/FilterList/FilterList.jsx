import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans";
`;

const StyledSearchInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 1rem;
  font-family: "Open Sans";
  margin: 0;
  padding: 0;
  outline: none;
  border-bottom: 0.0625rem solid #cfcfcf;
  padding-left: 0.5rem;
`;

const StyledListContainer = styled.div`
  background: #fff;
  background: #fff;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
`;

const StyledListItem = styled.p`
  height: 40px;
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-left: 0.5rem;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
    background: #d8eaf8;
  }
`;
const FilterList = ({ data }) => {
  const [value, setValue] = useState("");
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    setDataItems(data);
  }, [data]);
  const searchHandler = () => {
    if (value === "") {
      setDataItems(data);
    }
    setDataItems(() => {
      return data.filter((item) =>
        item.city.toLowerCase().includes(value.toLowerCase())
      );
    });
  };

  return (
    <StyledDivContainer>
      <StyledSearchInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={searchHandler}
      />
      <StyledListContainer className="data-list">
        {dataItems &&
          dataItems.map((i, idx) => {
            return <StyledListItem key={idx}>{i.city}</StyledListItem>;
          })}
      </StyledListContainer>
    </StyledDivContainer>
  );
};

export default FilterList;
