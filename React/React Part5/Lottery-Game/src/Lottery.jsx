import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n=3, winCondition }) {
    let [ticket, setTickets] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let getNewTicket = () => {
        setTickets(genTicket(n));
    };

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