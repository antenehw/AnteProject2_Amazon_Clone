import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import modularcss from './Header.module.css';

function LowerHeader() {
return (
<div className={modularcss.lower__container}>
    
     <ul className={modularcss.lowerHeaderList}>
        <li><AiOutlineMenuUnfold/>All</li>
        <li>Today's deal</li>
        <li>coustomer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
    </ul>
</div>
)
}

export default LowerHeader;
