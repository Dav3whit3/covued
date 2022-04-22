import React from 'react';


const UnorderedList = ({className, id, children}) => {
  return ( 
    <ul className={className} id={id}>
      {children}
    </ul>
   );
}

export { UnorderedList };