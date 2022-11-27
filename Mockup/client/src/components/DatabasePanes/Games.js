import React, { 
    Fragment, 
    useRef, 
    useState } 
from "react"

//you will need to run npm-install framer-motion
import {motion} from "framer-motion"

const SearchResults = {
    typeFilter: [],         //**IMPORTANT** User's filters
    thirdFilterRefs: []
}


const Games = () => {

    const[holder1, setHolder1] = useState('Select First Filter')
    const[holder2, setHolder2] = useState('Select Second Filter')
    const[holder3, setHolder3] = useState('Select Third Filter')
    const[input1, setInput1] = useState('')
    const[input2, setInput2] = useState('')
    const[input3, setInput3] = useState('')
    const[textClass2, setTextClass2] = useState('form-control hide')
    const[textClass3, setTextClass3] = useState('form-control hide')
    const[incorrect, setIncorrect] = useState('Please select a filter(s)')
    const[incorrectClass, setIncorrectClass] = useState('hide')

    const datePlus = useRef(0);
    const dateMinus = useRef(0);
    const playerNamePlus = useRef(0);
    const playerNameMinus = useRef(0);
    const teamNamePlus = useRef(0);
    const teamNameMinus = useRef(0);
    const sidePlus = useRef(0);
    const sideMinus = useRef(0);
    const positionPlus = useRef(0);
    const positionMinus = useRef(0);
    const championPlus = useRef(0);
    const championMinus = useRef(0);
    const resultPlus = useRef(0);
    const resultMinus = useRef(0);
    const killsPlus = useRef(0);
    const killsMinus = useRef(0);
    const deathsPlus = useRef(0);
    const deathsMinus = useRef(0);
    const assistsPlus = useRef(0);
    const assistsMinus = useRef(0);
    const fDragPlus = useRef(0);
    const fDragMinus = useRef(0);
    const fHeraldPlus = useRef(0);
    const fHeraldMinus = useRef(0);
    const fTowerPlus = useRef(0);
    const fTowerMinus = useRef(0);
    const gd15Plus = useRef(0);
    const gd15Minus = useRef(0);
    const xpd15Plus = useRef(0);
    const xpd15Minus = useRef(0);
    const lengthPlus = useRef(0);
    const lengthMinus = useRef(0);

    //**EXECUTES WHEN SEARCH IS PRESSED**
    const findResults = () => {
        let inputArr = []                   //**IMPORTANT User's inputs
        let filterArr = ['User', 'Game']              //**IMPORTANT, User's Filters */
        if(SearchResults.typeFilter.length === 0) {
            setIncorrectClass('show');
            return
        } else if(SearchResults.typeFilter.length === 1) {
            inputArr.push(input1);
        } else if(SearchResults.typeFilter.length === 2) {
            inputArr.push(input1);
            inputArr.push(input2);
        } else {
            inputArr.push(input1);
            inputArr.push(input2);
            inputArr.push(input3);
        }
        setIncorrectClass('hide');
        //handling if some inputs are empty
        let curIndex = 0
        let originalLen = inputArr.length
        for(let i = 0; i < originalLen; i++) {
            if(inputArr[curIndex] != '') {
                filterArr.push(SearchResults.typeFilter[i].toLowerCase())
                curIndex += 1
            } else {
                inputArr.splice(curIndex, 1);
            }
        }
        console.log(inputArr)
        console.log(filterArr)
        if(curIndex === 0) {
            setIncorrectClass('show')
            setIncorrect('Please enter values in the text boxes')
        }
    }

    //Handles the filters and the dropdown box
    const toggleFilter = (myFilter, minusRef, plusRef) => {
        let index = SearchResults.typeFilter.findIndex(type => type === myFilter);
        let prvLen = SearchResults.typeFilter.length

        if (index >= 0) {
            SearchResults.typeFilter.splice(index, 1)
            SearchResults.thirdFilterRefs.splice(0, 2)
            minusRef.current.style.visibility = "visible"
            plusRef.current.style.visibility = "hidden"
        } else {
            if(SearchResults.typeFilter.length === 3) {
                SearchResults.typeFilter.splice(2, 1)
                SearchResults.thirdFilterRefs[0].current.style.visibility = "visible"
                SearchResults.thirdFilterRefs[1].current.style.visibility = "hidden"
                SearchResults.thirdFilterRefs.splice(0, 2)
            }
            SearchResults.typeFilter.push(myFilter)
            if(SearchResults.typeFilter.length === 3) {
                SearchResults.thirdFilterRefs.push(minusRef)
                SearchResults.thirdFilterRefs.push(plusRef)
            }
            minusRef.current.style.visibility = "hidden"
            plusRef.current.style.visibility = "visible"
        }
        updateSearch(prvLen, index)
        console.log(SearchResults.typeFilter)
        return
    }

    //appends the search bars based on dropdown functions
    const updateSearch = (prvLen, index) => {
        if(SearchResults.typeFilter.length === 0) {
            setHolder1('Select First Filter')
            return
        } else if(SearchResults.typeFilter.length === 1) {
            setHolder1(`Enter ${SearchResults.typeFilter[0]}`)
            setHolder2('Select Second Filter')
            if(prvLen === 2) {
                if(index === 0) {
                    setInput1(input2)
                }
                setInput2("")
                setTextClass2('form-control hide')
                return
            }
        } else if(SearchResults.typeFilter.length === 2) {
            setHolder1(`Enter ${SearchResults.typeFilter[0]}`)
            setHolder2(`Enter ${SearchResults.typeFilter[1]}`)
            setHolder3('Select Third Filter')
            if(prvLen === 3) {
                if(index === 0) {
                    setInput1(input2)
                    setInput2(input3)
                }else if(index === 1) {
                    setInput2(input3)
                }
                setInput3("")
                setTextClass3('form-control hide')
                return
            }
            setTextClass2('form-control')
        } else {
            setHolder3('Select Third Filter')
            setHolder3(`Enter ${SearchResults.typeFilter[2]}`)
            setTextClass3('form-control')
        }
        return
    }
    
    const pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "100%"
        }
    };

    //HTML 
    return (
        <Fragment>
            <motion.div 
            initial={"out"} 
            animate={"in"} 
            exit={"out"}
            variants={pageTransition}
            >
                {/*Search bars */}
                <div class="players">
                <h1> Games </h1>
                <font color="red" class={incorrectClass}>{incorrect} </font>
                    <div class="input-group mb-3">
                        <input 
                            type="text" 
                            value = {input1} 
                            class="form-control" 
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" 
                            placeholder={holder1} 
                            onChange={e => setInput1(e.target.value)}/>
                        <input 
                            type="text" 
                            value = {input2} 
                            class= {textClass2} 
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" 
                            placeholder={holder2} 
                            onChange={e => setInput2(e.target.value)}/>
                        <input 
                            type="text" 
                            value = {input3} 
                            class={textClass3}
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" 
                            placeholder={holder3} 
                            onChange={e => setInput3(e.target.value)}/>
                        {/*Dropdown */}
                        <div id="filter-container" class="hidden">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle mx-2" type="button" id="type-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="type-dropdown">
                                <b>Select up to 3</b>
                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Date", dateMinus, datePlus)}>
                                        <i ref={datePlus} class= "bi-plus-square-fill"></i>
                                        <i ref={dateMinus} class= "unchecked bi bi-square"></i><span>Date</span></a>
                                    </li>
                                    
                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Date", dateMinus, datePlus)}>
                                        <i ref={datePlus} class= "bi-plus-square-fill"></i>
                                        <i ref={dateMinus} class= "unchecked bi bi-square"></i><span>Date</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("PlayerName", playerNameMinus, playerNamePlus)}>
                                        <i ref={playerNamePlus} class="bi-plus-square-fill"></i>
                                        <i ref={playerNameMinus} class="unchecked bi bi-square"></i><span>Player Name</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("TeamName", teamNameMinus, teamNamePlus)}>
                                        <i ref={teamNamePlus} class="bi-plus-square-fill"></i>
                                        <i ref={teamNameMinus}class="unchecked bi bi-square"></i><span>Team Name</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Side", sideMinus, sidePlus)}>
                                        <i ref={sidePlus} class="bi-plus-square-fill"></i>
                                        <i ref={sideMinus} class="unchecked bi bi-square"></i><span>Side</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Position", positionMinus, positionPlus)}>
                                        <i ref={positionPlus} class="bi-plus-square-fill"></i>
                                        <i ref={positionMinus} class="unchecked bi bi-square"></i><span>Position</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Champion", championMinus, championPlus)}>
                                        <i ref={championPlus} class="bi-plus-square-fill"></i>
                                        <i ref={championMinus} class="unchecked bi bi-square"></i><span>Champion</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Result", resultMinus, resultPlus)}>
                                        <i ref={resultPlus} class="bi-plus-square-fill"></i>
                                        <i ref={resultMinus} class="unchecked bi bi-square"></i><span>Result</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Kills", killsMinus, killsPlus)}>
                                        <i ref={killsPlus} class="bi-plus-square-fill"></i>
                                        <i ref={killsMinus} class="unchecked bi bi-square"></i><span>Kills</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Deaths", deathsMinus, deathsPlus)}>
                                        <i ref={deathsPlus} class="bi-plus-square-fill"></i>
                                        <i ref={deathsMinus} class="unchecked bi bi-square"></i><span>Deaths</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Assists", assistsMinus, assistsPlus)}>
                                        <i ref={assistsPlus} class="bi-plus-square-fill"></i>
                                        <i ref={assistsMinus} class="unchecked bi bi-square"></i><span>Assists</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("FirstDragon", fDragMinus, fDragPlus)}>
                                        <i ref={fDragPlus} class="bi-plus-square-fill"></i>
                                        <i ref={fDragMinus} class="unchecked bi bi-square"></i><span>First Dragon</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("FirstHerald", fHeraldMinus, fHeraldPlus)}>
                                        <i ref={fHeraldPlus} class="bi-plus-square-fill"></i>
                                        <i ref={fHeraldMinus} class="unchecked bi bi-square"></i><span>First Herald</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("FirstTower", fTowerMinus, fTowerPlus)}>
                                        <i ref={fTowerPlus} class="bi-plus-square-fill"></i>
                                        <i ref={fTowerMinus} class="unchecked bi bi-square"></i> <span>First Turret</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("GoldDiffAt15", gd15Minus, gd15Plus)}>
                                        <i ref={gd15Plus} class="bi-plus-square-fill"></i>
                                        <i ref={gd15Minus} class="unchecked bi bi-square"></i><span>GD15</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("XPDiffAt15", xpd15Minus, xpd15Plus)}>
                                        <i ref={xpd15Plus} class="bi-plus-square-fill"></i>
                                        <i ref={xpd15Minus} class="unchecked bi bi-square"></i><span>XPD15</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("gamelength", lengthMinus, lengthPlus)}>
                                        <i ref={lengthPlus} class="bi-plus-square-fill"></i>
                                        <i ref={lengthMinus} class="unchecked bi bi-square"></i><span>Game Length</span></a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        {/*Search Button*/}
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick = {() => findResults()}>
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                {/*Table */}
                <div class="table-responsive">
                    <table id ="Player_Table" class="table table-dark table-striped table sm" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Player</th>            
                                <th scope="col">Team</th>
                                <th scope="col">Side</th>
                                <th scope="col">Position</th>
                                <th scope="col">Champion</th> 
                                <th scope="col">Result</th> 
                                <th scope="col">Kills</th> 
                                <th scope="col">Deaths</th> 
                                <th scope="col">Assists</th> 
                                <th scope="col">FDrag</th> 
                                <th scope="col">FHerald</th> 
                                <th scope="col">FTower</th> 
                                <th scope="col">GD15</th> 
                                <th scope="col">XPD15</th> 
                                <th scope="col">Length</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {/* Body data goes here*/}
                        </tbody>
                    </table>
                </div>
                </div>
            </motion.div>
        </Fragment>
    )
};

export default Games;