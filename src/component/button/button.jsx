import React, { Children } from 'react';

const Button = (props) => {
    console.log(props);
    const {children} = props;
    return (
        <>
          <button class="btn btn-success">{children}</button>
  
        </>
    );
};

export default Button;