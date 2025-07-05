import { useState } from "react";
import { genTickets, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winningSum=15}) {

    let [ticket, setTickest] = useState(genTickets(n));
    let isWinning = sum(ticket) === winningSum;

    let getNewTicket = () => {
        setTickest(genTickets(n));
    }

    return ( 
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
        <h3>{isWinning && "Congratulation, you won the lottery!"}</h3>
        <br></br>
        <button onClick={getNewTicket}>Get New Ticket</button>
    </div>
    );
}