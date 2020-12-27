import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    // We have to assign key element to rendered list in react,
    // And we can assign it only to the root div.
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
