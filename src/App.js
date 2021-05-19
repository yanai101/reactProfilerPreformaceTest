import { memo, Profiler, useState } from 'react';
import './App.css';
import AppProfiler from './AppProfiler';


const initData = Array.from(Array(16),(x,id)=>({id,active: false}));

const Box = memo(({onClick , active , index , children})=>{

  const handelClick = ()=>{
    onClick(index);
  }

  console.log(`box ${index} rendered`);

  return (
    <div onClick={handelClick} className={active ? 'box active' : 'box'}>
        {children}
    </div>
  )

})

function App() {
  const [data, setData] = useState(initData);
  
  const handelClick = (index)=>{
    let boxes = data;
    boxes[index].active = !boxes[index].active;
    setData([...boxes])
  }

  return (
    <div className="App box-app">
      {data.map((item)=><Box active={item.active} key={item.id} index={item.id} onClick={handelClick}>{`box-number ${item.id}`}</Box>)}
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <AppProfiler/>
//     </div>
//   );
// }



export default App;
