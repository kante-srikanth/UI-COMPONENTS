import React from "react";
import styled, { css } from "styled-components";

import "./ImageGallery.css";

const StyledGalleryContainer = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
`;
const StyledGalleryItem = styled.div(({ image }) => {
  console.log(image);
  return css`
    background: url(${image});
    background-size: cover;
  `;
});

const ImageGallery = ({ data }) => {
  const hoverHandler = (e) => {
    e.target.classList.toggle("open-active");
  };

  const onMouseLeaveHandler = (e) => {
    e.target.classList.remove("open-active");
  };

  return (
    <StyledGalleryContainer className="panels">
      {data &&
        data.map((item, idx) => {
          const { title, description, meta, image } = item;
          console.log(image);
          return (
            <StyledGalleryItem
              key={idx}
              image={image}
              className={`panel panel${idx + 1}`}
              onMouseEnter={hoverHandler}
              onMouseLeave={onMouseLeaveHandler}
            >
              <p>{title}</p>
              <p>{description}</p>
              <p>{meta}</p>
            </StyledGalleryItem>
          );
        })}
    </StyledGalleryContainer>
  );
};

export default ImageGallery;
