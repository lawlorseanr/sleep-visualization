import React from "react";

export default (props) => {
  // console.log(props);
  let { setIntervalIndex, userData, userList, userIndex, intervalIndex } =
    props;
  console.log(props);
  if (userIndex !== null) {
    console.log(`User data: ${JSON.stringify(props.userData)}`);

    return (
      <select
        name="intervals"
        id="interval-selector"
        onChange={(e) => {
          e.preventDefault();
          setIntervalIndex(e.target.selectedIndex);
        }}
      ></select>
    );
  }

  return (
    <select
      name="intervals"
      id="interval-selector"
      onChange={(e) => {
        e.preventDefault();
        setIntervalIndex(e.target.selectedIndex);
      }}
    ></select>
  );
};
