import { useState } from "react"
import {sum,genArray} from "./Helper.js";
import "./LotteryCss.css";
export default function Lottery() {
    let [ticket,setTicket]=useState(genArray(3))
    let isWin=sum(ticket)==10;

    function refresh()
    {
        setTicket(genArray(3));
    }
    return (
        <>
            <h3>This is a Lottery Game </h3>
            <h4>If the sum is 10 Then you will won The game</h4>
            <div className="baap">
            <div className="tickets">
                <b><div>{ticket[0]}</div></b>
                <b><div>{ticket[1]}</div></b>
                <b><div>{ticket[2]}</div></b>
            </div>
            </div>
            {isWin && <h2>"Congratulations you won The game"</h2>}
           <br />
           <button id="button" onClick={refresh}>Buy New Ticket</button>
            
        </>
    )
}