import { useState } from "react"

export default function LudoBoard() {

let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0 });
let [arr, setArr] = useState(["no moves"])


    let updateBlue = () => {
        // setMoves((prevMoves) => {
        // return { ...prevMoves, blue: prevMoves.blue + 1};
        // });

        setArr((prevArr) => {
            return [...prevArr, "blue moves"]
        });
        console.log(arr);
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
        return { ...prevMoves, yellow: prevMoves.yellow + 1};
        });
    };

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="Board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1
                </button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1
                </button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}>+1
                </button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}}>+1
                </button>
            </div>
        </div>
    );
}