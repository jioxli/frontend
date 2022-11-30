import React, { 
    Fragment, 
    useRef, 
    useState,
    useEffect 
} 
from "react"

//you will need to run npm-install framer-motion
import {motion} from "framer-motion"
import ImportTeam from './DataHandlers/ImportTeam';

import AddTeam from "./DataHandlers/AddTeam";
import EditTeam from "./DataHandlers/EditTeam";

const SearchResults = {
    typeFilter: [],         //**IMPORTANT** User's filters
    thirdFilterRefs: []
}


const AdminTeams = () => {

    const [teams, setTeams] = useState([])
    const [originalTeams, setOriginalTeams] = useState([])

    const[holder1, setHolder1] = useState('Select First Filter')
    const[holder2, setHolder2] = useState('Select Second Filter')
    const[holder3, setHolder3] = useState('Select Third Filter')
    const[input1, setInput1] = useState('')
    const[input2, setInput2] = useState('')
    const[input3, setInput3] = useState('')
    const[textClass2, setTextClass2] = useState('form-control hide')
    const[textClass3, setTextClass3] = useState('form-control hide')

    const tidPlus = useRef(0);
    const tidMinus = useRef(0);
    const namePlus = useRef(0);
    const nameMinus = useRef(0);
    const gamesPlus = useRef(0);
    const gamesMinus = useRef(0);
    const winsPlus = useRef(0);
    const winsMinus = useRef(0);
    const lossesPlus = useRef(0);
    const lossesMinus = useRef(0);
    const fDragonPlus = useRef(0);
    const fDragonMinus = useRef(0);
    const fTurretPlus = useRef(0);
    const fTurretMinus = useRef(0);
    const fHeraldPlus = useRef(0);
    const fHeraldMinus = useRef(0);
    const gd15Plus = useRef(0);
    const gd15Minus = useRef(0);

    const getTeams = async() => {
        try {
            const response = await fetch("http://localhost:5000/teams")
            const jsonData = await response.json();
            setTeams(jsonData)
            setOriginalTeams(JSON.parse(JSON.stringify(jsonData)))
        } catch(err) {
            console.error(err.message)
        }
    }

    //**EXECUTES WHEN SEARCH IS PRESSED**
    const findResults = () => {
        setTeams(originalTeams)
        let inputArr = []              //**IMPORTANT User's inputs
        let filterArr = []             //**IMPORTANT, User's Filters
        if(SearchResults.typeFilter.length === 1) {
            inputArr.push(input1);
        } else if(SearchResults.typeFilter.length === 2) {
            inputArr.push(input1);
            inputArr.push(input2);
        } else {
            inputArr.push(input1);
            inputArr.push(input2);
            inputArr.push(input3);
        }
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
        for(let i = 0; i < filterArr.length; i++) {
            switch (filterArr[i]) {
                case 'tid':
                    setTeams(teams.filter(team => team.tid == inputArr[i]))
                    break;
                case 'name':
                    setTeams(teams.filter(team => team.name == inputArr[i]))
                    break;
                case 'games':
                    setTeams(teams.filter(team => team.games == inputArr[i]))
                    break;
                case 'wins':
                    setTeams(teams.filter(team => team.wins == inputArr[i]))
                    break;
                case 'losses':
                    setTeams(teams.filter(team => team.losses == inputArr[i]))
                    break;
                case 'fdragon':
                    setTeams(teams.filter(team => team.fdragon == inputArr[i]))
                    break;
                case 'fturret':
                    setTeams(teams.filter(team => team.fturret == inputArr[i]))
                    break;
                case 'fherald':
                    setTeams(teams.filter(team => team.gd15 == inputArr[i]))
                    break;
                case 'gd15':
                    setTeams(teams.filter(team => team.gd15 == inputArr[i]))
                    break;
            }
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

    useEffect(() => {
        getTeams()
    },[])
    
    //HTML 
    return (
        <Fragment>
            <motion.div 
            initial={"out"} 
            animate={"in"} 
            exit={"out"}
            variants={pageTransition}
            >
                <ImportTeam />
                {/*Search bars */}
                <div class="data">
                <h1> Teams </h1>
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
                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("TID", tidMinus, tidPlus)}>
                                        <i ref={tidPlus} class= "bi-plus-square-fill"></i>
                                        <i ref={tidMinus} class= "unchecked bi bi-square"></i><span>TID</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Name", nameMinus, namePlus)}>
                                        <i ref={namePlus} class= "bi-plus-square-fill"></i>
                                        <i ref={nameMinus} class= "unchecked bi bi-square"></i><span>Name</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Games", gamesMinus, gamesPlus)}>
                                        <i ref={gamesPlus} class="bi-plus-square-fill"></i>
                                        <i ref={gamesMinus} class="unchecked bi bi-square"></i><span>Games</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Wins", winsMinus, winsPlus)}>
                                        <i ref={winsPlus} class="bi-plus-square-fill"></i>
                                        <i ref={winsMinus}class="unchecked bi bi-square"></i><span>Wins</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Losses", lossesMinus, lossesPlus)}>
                                        <i ref={lossesPlus} class="bi-plus-square-fill"></i>
                                        <i ref={lossesMinus} class="unchecked bi bi-square"></i><span>Losses</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("First Dragon", fDragonMinus, fDragonPlus)}>
                                        <i ref={fDragonPlus} class="bi-plus-square-fill"></i>
                                        <i ref={fDragonMinus} class="unchecked bi bi-square"></i><span>First Dragon</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("First Turret", fTurretMinus, fTurretPlus)}>
                                        <i ref={fTurretPlus} class="bi-plus-square-fill"></i>
                                        <i ref={fTurretMinus} class="unchecked bi bi-square"></i><span>First Turret</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("First Herald", fHeraldMinus, fHeraldPlus)}>
                                        <i ref={fHeraldPlus} class="bi-plus-square-fill"></i>
                                        <i ref={fHeraldMinus} class="unchecked bi bi-square"></i><span>First Herald</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("GD15", gd15Minus, gd15Plus)}>
                                        <i ref={gd15Plus} class="bi-plus-square-fill"></i>
                                        <i ref={gd15Minus} class="unchecked bi bi-square"></i><span>GD10</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*Search Button*/}
                        <div class="input-group-append-search">
                            <button class="btn btn-outline-secondary" type="button" onClick = {() => findResults()}>
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                        <div class="input-group-append">
                            <AddTeam />
                        </div>
                    </div>
                {/*Table */}
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">TID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Games</th>            
                            <th scope="col">Wins</th>
                            <th scope="col">Losses</th>
                            <th scope="col">First Dragon</th>
                            <th scope="col">First Turret</th> 
                            <th scope="col">First Herald</th>
                            <th scope="col">GD15</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {teams.map(team => (
                            <tr key={team.tid}>
                                <td>{team.tid}</td>
                                <td>{team.name}</td>
                                <td>{team.games}</td>
                                <td>{team.wins}</td>
                                <td>{team.losses}</td>
                                <td>{team.fdragon}</td>
                                <td>{team.fturret}</td>
                                <td>{team.fherald}</td>
                                <td>{team.gd15}</td>
                                <td><EditTeam /></td> {/*game={game}*/}
                                <td>
                                <button 
                                    className = "btn btn-danger" >
                                    {/*onClick={() => deleteTodo(todo.todo_id)}>*/}
                                    Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </motion.div>
        </Fragment>
    )
};

export default AdminTeams;