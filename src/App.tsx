import React from 'react';
import './App.less';
import './App.scss';
import './AAA.css';

function App() {
  const a = 1;
  const asd: any = window;
  const a3 = 'asd2asd';
  const a32 = 'asd2asd';
  asd.a = a + a3 + a32;
  return <div>eslint + prettier + huscky + lint-stage</div>;
}

export default App;
