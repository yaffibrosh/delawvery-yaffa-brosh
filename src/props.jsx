import React, { useState }  from 'react';
import App from './App';
import Invitation from './OrderAdd/OrderAdd';



export default function Props() {
  const [isExist, setIsExist] = useState(false);
  function set_is_exist(is_exist) {
      setIsExist(is_exist)
  }
    
  return (
      <>
          <Invitation setIsExist = {set_is_exist()}> </Invitation>
          <App isExist = {isExist}></App>
      </>
  );
}