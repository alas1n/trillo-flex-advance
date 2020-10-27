import React from 'react';

const InlineButtonCmp = ({ buttonName, span }) => {
  return (
    <button className="btn-inline">
      {buttonName}
      {span ? <span> {span} </span> : undefined}
    </button>
  );
};

export default InlineButtonCmp;
