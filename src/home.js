import React, {useEffect, useRef, useState, useCallback} from 'react';
import { withRouter } from 'react-router-dom';

function Home({headRef, setHeadContent}) {

  useEffect(() => {
    setHeadContent(headRef.current.innerHTML)
  }, [])

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home