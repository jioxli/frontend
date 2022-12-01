import React, { 
    Fragment, 
    useRef, 
    useState,
    useEffect
 } 
from "react"

//you will need to run npm-install framer-motion
import {motion} from "framer-motion"
import EditPlayer from './DataHandlers/EditPlayers';
import AddPlayer from "./DataHandlers/AddPlayer";
import ImportPlayer from "./DataHandlers/ImportPlayer";

const SearchResults = {
    typeFilter: [],         //**IMPORTANT** User's filters
    thirdFilterRefs: []
}

const AdminPlayers = () => {

    const [players, setPlayers] = useState([])
    const [originalPlayers, setOriginalPlayers] = useState([])

    const[holder1, setHolder1] = useState('Select First Filter')
    const[holder2, setHolder2] = useState('Select Second Filter')
    const[holder3, setHolder3] = useState('Select Third Filter')
    const[input1, setInput1] = useState('')
    const[input2, setInput2] = useState('')
    const[input3, setInput3] = useState('')
    const[textClass2, setTextClass2] = useState('form-control hide')
    const[textClass3, setTextClass3] = useState('form-control hide')

    const pidPlus = useRef(0);
    const pidMinus = useRef(0);
    const ignPlus = useRef(0);
    const ignMinus = useRef(0);
    const tidPlus = useRef(0);
    const tidMinus = useRef(0);
    const teamPlus = useRef(0);
    const teamMinus = useRef(0);
    const positionPlus = useRef(0);
    const positionMinus = useRef(0);
    const kdaPlus = useRef(0);
    const kdaMinus = useRef(0);
    const kpPlus = useRef(0);
    const kpMinus = useRef(0);
    const gd10Plus = useRef(0);
    const gd10Minus = useRef(0);

    const getPlayers = async() => {
        try {
            const response = await fetch("http://10.128.161.72:5000/players")
            const jsonData = await response.json();
            setPlayers(jsonData)
            setOriginalPlayers(JSON.parse(JSON.stringify(jsonData)))
        } catch(err) {
            console.error(err.message)
        }
    }

    //**EXECUTES WHEN SEARCH IS PRESSED**
    const findResults = () => {
        setPlayers(originalPlayers)
        let inputArr = []                               //**IMPORTANT User's inputs
        let filterArr = []              //**IMPORTANT, User's Filters 
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
                case 'pid':
                    setPlayers(players.filter(player => player.pid == inputArr[i]))
                    break;
                case 'ign':
                    setPlayers(players.filter(player => player.ign == inputArr[i]))
                    break;
                case 'tid':
                    setPlayers(players.filter(player => player.tid == inputArr[i]))
                    break;
                case 'team':
                    setPlayers(players.filter(player => player.team == inputArr[i]))
                    break;
                case 'position':
                    setPlayers(players.filter(player => player.position == inputArr[i]))
                    break;
                case 'kda':
                    setPlayers(players.filter(player => player.kda == inputArr[i]))
                    break;
                case 'kp':
                    setPlayers(players.filter(player => player.kp == inputArr[i]))
                    break;
                case 'gd10':
                    setPlayers(players.filter(player => player.gd10 == inputArr[i]))
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
        getPlayers()
    },[])
    //HTML 
    return (
        <Fragment>
            <ImportPlayer/>
            <motion.div 
            initial={"out"} 
            animate={"in"} 
            exit={"out"}
            variants={pageTransition}
            >
                <div class="data">
                <h1> Players </h1>
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
                        <div id="filter-container" class="hidden">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle mx-2" type="button" id="type-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="type-dropdown">
                                <b>Select up to 3</b>
                                
                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("PID", pidMinus, pidPlus)}>
                                        <i ref={pidPlus} class= "bi-plus-square-fill"></i>
                                        <i ref={pidMinus} class= "unchecked bi bi-square"></i><span>PID</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("IGN", ignMinus, ignPlus)}>
                                        <i ref={ignPlus} class= "bi-plus-square-fill"></i>
                                        <i ref={ignMinus} class= "unchecked bi bi-square"></i><span>IGN</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("TID", tidMinus, tidPlus)}>
                                        <i ref={tidPlus} class= "bi-plus-square-fill"></i>
                                        <i ref={tidMinus} class= "unchecked bi bi-square"></i><span>TID</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Team", teamMinus, teamPlus)}>
                                        <i ref={teamPlus} class="bi-plus-square-fill"></i>
                                        <i ref={teamMinus} class="unchecked bi bi-square"></i><span>Team</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Position", positionMinus, positionPlus)}>
                                        <i ref={positionPlus} class="bi-plus-square-fill"></i>
                                        <i ref={positionMinus}class="unchecked bi bi-square"></i><span>Position</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("KDA", kdaMinus, kdaPlus)}>
                                        <i ref={kdaPlus} class="bi-plus-square-fill"></i>
                                        <i ref={kdaMinus} class="unchecked bi bi-square"></i><span>KDA</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("KP", kpMinus, kpPlus)}>
                                        <i ref={kpPlus} class="bi-plus-square-fill"></i>
                                        <i ref={kpMinus} class="unchecked bi bi-square"></i><span>KP</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("GD10", gd10Minus, gd10Plus)}>
                                        <i ref={gd10Plus} class="bi-plus-square-fill"></i>
                                        <i ref={gd10Minus} class="unchecked bi bi-square"></i><span>GD10</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="input-group-append-search">
                            <button class="btn btn-outline-secondary" type="button" onClick = {() => findResults()}>
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                        <div class="input-group-append">
                            <AddPlayer />
                        </div>
                    </div>
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">PID</th>
                            <th scope="col">IGN</th>
                            <th scope="col">TID</th>
                            <th scope="col">Team</th>            
                            <th scope="col">Position</th>
                            <th scope="col">KDA</th>
                            <th scope="col">KP</th>
                            <th scope="col">GD10</th> 
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {players.map(player => (
                            <tr key={player.pid}>
                                <td>{player.pid}</td>
                                <td>{player.ign}</td>
                                <td>{player.tid}</td>
                                <td>{player.team}</td>
                                <td>{player.position}</td>
                                <td>{player.kda}</td>
                                <td>{player.kp}</td>
                                <td>{player.gd10}</td>
                                <td><EditPlayer /></td> {/*game={game}*/}
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

export default AdminPlayers;