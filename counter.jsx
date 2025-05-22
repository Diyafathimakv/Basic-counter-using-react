import React, {useState} from 'react';

function Counter(){
    const [count,setCount] = useState(0);

    const IncrementCount=()=>{
        setCount(count + 1 );
    }

    const DecrementCount=()=>{
        setCount(count - 1 );
    }

    const Resetcount=()=>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={IncrementCount}>Increment Count</button>
            <button className="counter-button" onClick={DecrementCount}>Decrement Count</button>
            <button className="counter-button" onClick={Resetcount}>Reset Count</button>
        </div>
    
    );
}
export default Counter
