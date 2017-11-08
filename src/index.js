import React from 'react';
import ReactDOM from 'react-dom';


function swap_no(no) {
  no.a=no.a+no.b;
  no.b=no.a-no.b;
  no.a=no.a-no.b;

  return 'A='+no.a+'  B='+ no.b;
}

const no = {
  a: 4,
  b: 2
};

const element = (
  <div> 
  <h4>Before Swapping A={no.a}  B={no.b}</h4>
  <h4>  After Swapping {swap_no(no)}</h4>
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);