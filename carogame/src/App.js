import React, { useState, useEffect } from "react";
import RowTable from "./component/RowTable";
import Collumn from "./component/Collumn";
import "./app.css";


function App() {
    const [row, setRow] = useState("")
    const [collumn, setCollumn] = useState("");
    const [arrOfValue, setArrOfValue] = useState([]);
    const [flagRow, setFlagRow] = useState(0);
    const [flagCol, setFlagCol] = useState(0);

    const [userATick, setUserAtick] = useState([]);
    const [userBTick, setUserBtick] = useState([]);
    const [flagTick, setFlagTick] = useState(true);

    const [notifyMessage, setNotifyMessage] = useState("")

    useEffect(() => {
        if (userATick.length >= 5) {
            console.log("team A tick", userATick)
            let arrResultHorizontal = [];
            let diagonalLeft = [];
            let arrResultVertical = [];
            let diagonalRight = [];
            let arrResultHorizontalB = [];
            let diagonalLeftB = [];
            let arrResultVerticalB = [];
            let diagonalRightB = [];
            //  arr = [ 1, 3, 5, 6 , 7 ,        
            //          8, 9, 12, 13 ,11    ]
            for (let i = 0; i < userATick.length - 1; i++) {
                if ((userATick[i + 1] - userATick[i]) === 1 && userATick[i+1] < arrOfValue[i][parseInt(row)-1] ) {
                    arrResultHorizontal.push(true);
                } else {
                    arrResultHorizontal = []
                }

                if (arrResultHorizontal.every(item => item === true) && arrResultHorizontal.length >= 4) {
                    setNotifyMessage("A win")
                }
                // Duong cheo tu` tren qua trai
                for (let j = 1; j < userATick.length - 1; j++) {
                    if ((userATick[j + i] - userATick[i]) === (parseInt(row) - 1) ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row) - 1) * 2 ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row) - 1) * 3 ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row) - 1) * 4 
                    ) {
                        diagonalLeft.push(true)
                    }
                }
                console.log(diagonalLeft);
                if (diagonalLeft.every(item => item === true) && diagonalLeft.length >= 4) {
                    setNotifyMessage("A win");
                } else {
                    diagonalLeft = []
                }
                //  Duong cheo tu tren qua phai
                for (let j = 1; j < userATick.length - 1; j++) {
                    if ((userATick[j + i] - userATick[i]) === (parseInt(row) + 1) ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row) + 1) * 2 ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row) + 1) * 3 ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row) + 1) * 4 
                    ) {
                        diagonalRight.push(true)
                    }
                }
                console.log(diagonalRight);
                if (diagonalRight.every(item => item === true) && diagonalRight.length >= 4) {
                    setNotifyMessage("A win");
                } else {
                    diagonalRight = []
                }
                for (let j = 1; j < userATick.length - 1; j++) {
                    if ((userATick[j + i] - userATick[i]) === (parseInt(row)) ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row)) * 2 ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row)) * 3 ||
                        (userATick[j + i] - userATick[i]) === (parseInt(row)) * 4 
                    ) {
                        arrResultVertical.push(true)
                    }
                }
                if (arrResultVertical.every(item => item === true) && arrResultVertical.length >= 4) {
                    setNotifyMessage("A win");
                } else {
                    arrResultVertical = []
                }
            }
            for (let i = 0; i < userBTick.length - 1; i++) {
                if ((userBTick[i + 1] - userBTick[i]) === 1 && userATick[i+1] < arrOfValue[i][parseInt(row)-1]) {
                    arrResultHorizontalB.push(true)
                } else {
                    arrResultHorizontalB = []
                }

                if (arrResultHorizontalB.every(item => item === true) && arrResultHorizontalB.length >= 4) {
                    setNotifyMessage("B win")
                }
                // Duong cheo tu` tren qua trai
                for (let j = 1; j < userBTick.length - 1; j++) {
                    if ((userBTick[j + i] - userBTick[i]) === (parseInt(row) - 1) ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row) - 1) * 2 ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row) - 1) * 3 ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row) - 1) * 4 
                    ) {
                        diagonalLeft.push(true)
                    }
                }
                if (diagonalLeftB.every(item => item === true) && diagonalLeftB.length >= 4) {
                    setNotifyMessage("B win");
                } else {
                    diagonalLeftB = []
                }
                //  Duong cheo tu tren qua phai
                for (let j = 1; j < userBTick.length - 1; j++) {
                    if ((userBTick[j + i] - userBTick[i]) === (parseInt(row) + 1) ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row) + 1) * 2 ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row) + 1) * 3 ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row) + 1) * 4 
                    ) {
                        diagonalRightB.push(true)
                    }
                }
                if (diagonalRightB.every(item => item === true) && diagonalRightB.length >= 4) {
                    setNotifyMessage("B win");
                } else {
                    diagonalRightB = []
                }
                for (let j = 1; j < userBTick.length - 1; j++) {
                    if ((userBTick[j + i] - userBTick[i]) === (parseInt(row)) ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row)) * 2 ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row)) * 3 ||
                        (userBTick[j + i] - userBTick[i]) === (parseInt(row)) * 4 
                    ) {
                        arrResultVerticalB.push(true)
                    }
                }
                console.log(arrResultVerticalB);
                if (arrResultVerticalB.every(item => item === true) && arrResultVerticalB.length >= 4) {
                    setNotifyMessage("B win");
                } else {
                    arrResultVerticalB = []
                }
            }
        }
    }, [row, userATick, userBTick , arrOfValue])


    function displayRowTable(arr) {
        return (arr.map((arrItem, index) => {
            return (
                <RowTable key={index}>
                    {arrItem.map((item, index2) => {
                        return (
                            <Collumn
                                value={item}
                                key={index2}
                                receiverValue={receiverValue}
                                userATick={userATick}
                                userBTick={userBTick}
                                flagTick={flagTick}
                            />
                        )
                    })}
                </RowTable>
            )
        }))
    }

    function receiverValue(param) {
        let arrCloneA = [...userATick];
        let arrCloneB = [...userBTick];
        if (flagTick) {
            arrCloneA.push(param);
            arrCloneA.sort((a, b) => a - b)
            setUserAtick(arrCloneA)
            setFlagTick(!flagTick)
        } else {
            arrCloneB.push(param);
            arrCloneB.sort((a, b) => a - b);
            setUserBtick(arrCloneB)
            setFlagTick(!flagTick)
        }
    }

    const onCreateTable = (e) => {
        e.preventDefault();
        const result = (row, collumn) => {
            let totalNumber = 0;
            let listValue = []
            if (row && collumn) {
                for (let i = 0; i < row; i++) {
                    listValue.push([])
                    for (let j = 0; j < collumn; j++) {
                        totalNumber += 1
                        listValue[i].push(totalNumber)
                    }
                }
            }
            setArrOfValue(listValue)
        };
        result(row, collumn);
        setFlagRow(row);
        setFlagCol(collumn);
    }

    return (
        <div className="App">
            {/* <h2>Caro game</h2> */}
            {
                notifyMessage ? `Congratulations ${notifyMessage}` : ""
            }
            <form onSubmit={onCreateTable}>
                <fieldset>
                    <legend>Count Row/Col</legend>
                    <label>Fill row count</label>
                    <input
                        type="text"
                        id="row"
                        name="row"
                        onChange={(e) => { setRow(e.target.value) }}
                        disabled={flagCol >= 5 ? true : false}
                        value={row}
                        placeholder="fill count row"
                    />
                    <br></br><br></br>
                    <label>Fill collumn count</label>
                    <input
                        type="text"
                        id="col"
                        name="col"
                        onChange={(e) => { setCollumn(e.target.value) }}
                        disabled={flagRow >= 5 ? true : false}
                        value={collumn}
                        placeholder="fill count col"
                    />
                </fieldset>

                <button
                    type="submit"
                    className="subm"
                    disabled={notifyMessage ? true : false}
                >Play</button>
                <button className="subm"
                    onClick={() => {
                        setRow("");
                        setCollumn("");
                        setUserAtick([])
                        setUserBtick([])
                        setNotifyMessage("")
                    }}

                > {notifyMessage === "" ? "Reset" : "Again"}
                </button>
            </form>
            <br></br><br></br>
            <div>
                {
                    parseInt(collumn) >= 3 && parseInt(row) >= 3 ?
                        <table>
                            <tbody>
                                {displayRowTable(arrOfValue)}
                            </tbody>
                        </table> : notifyMessage ? "" : <span className="notifyCation">Please fill value typeOf Number. Because I did'n validate &#x1F605;&#x1F605;&#x1F605;</span>
                }
            </div>
        </div>
    );
}

export default App;
