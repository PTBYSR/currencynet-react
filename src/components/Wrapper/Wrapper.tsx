import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className="red-wrapper">
      {children}
      <script src="https://codad5.github.io/currencynet/main/production.js"></script>
    </div>
  );
};

export default Wrapper
