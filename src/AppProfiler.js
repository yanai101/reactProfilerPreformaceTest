import {Profiler, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function AppProfiler() {
	const logTimes=(  id,phase, actualDuration, baseDuration, startTime, commitTime, interactions )=>{
		console.log('the "id" prop of the Profiler tree that has just committed',  id);
		console.log('either "mount" (if the tree just mounted) or "update" (if it re-rendered)',  phase)
		console.log('time spent rendering the committed update',  actualDuration)
		console.log('estimated time to render the entire subtree without memoization',  baseDuration)
		console.log('when React began rendering this update',  startTime)
		console.log('when React committed this update',  commitTime)
		console.log('the Set of interactions belonging to this update',  interactions)
};

  const [count, setCount] = useState(0);

	return (
			 <Profiler id="StockChart" onRender={logTimes}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
        onClick={()=> setCount((old)=>old+1)}
        >
          click on
        </button>
        <Profiler id="counter" onRender={logTimes}>
        <Counter count={count}/>
        </Profiler>
      </header>
      </Profiler>
	)
}

const Counter = ({count})=><span>{count}</span>


export default AppProfiler
