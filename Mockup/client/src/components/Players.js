import React, { Fragment, useRef, useState } from "react"

//you will need to run npm-install framer-motion
import {motion} from "framer-motion"

const SearchResults = {
    typeFilter: [],         //**IMPORTANT** User's filters
    thirdFilterRefs: []
}


const Players = () => {

    const[holder1, setHolder1] = useState('Select First Filter')
    const[holder2, setHolder2] = useState('Select Second Filter')
    const[holder3, setHolder3] = useState('Select Third Filter')
    const[input1, setInput1] = useState('')
    const[input2, setInput2] = useState('')
    const[input3, setInput3] = useState('')

    const ignPlus = useRef(0);
    const ignMinus = useRef(0);
    const teamPlus = useRef(0);
    const teamMinus = useRef(0);
    const regionPlus = useRef(0);
    const regionMinus = useRef(0);
    const positionPlus = useRef(0);
    const positionMinus = useRef(0);
    const kdaPlus = useRef(0);
    const kdaMinus = useRef(0);

    //**EXECUTES WHEN SEARCH IS PRESSED**
    const findResults = () => {
        let inputArr = []       //**IMPORTANT User's imputs
        if(SearchResults.typeFilter.length == 0) {
            return
        } else if(SearchResults.typeFilter.length == 1) {
            inputArr.push(input1);
        } else if(SearchResults.typeFilter.length == 2) {
            inputArr.push(input1);
            inputArr.push(input2);
        } else {
            inputArr.push(input1);
            inputArr.push(input2);
            inputArr.push(input3);
        }
        console.log(inputArr)
        
        
    }

    //Handles the filters and the dropdown box
    const toggleFilter = (typeOfPlace, minusRef, plusRef) => {
        console.log("hello world")
        let index = SearchResults.typeFilter.findIndex(type => type == typeOfPlace);

        if (index >= 0) {
            console.log("isTrue")
            SearchResults.typeFilter.splice(index, 1)
            SearchResults.thirdFilterRefs.splice(0, 2)
            minusRef.current.style.visibility = "visible"
            plusRef.current.style.visibility = "hidden"
            updateSearch()
        } else {
            if(SearchResults.typeFilter.length == 3) {
                SearchResults.typeFilter.splice(2, 1)
                SearchResults.thirdFilterRefs[0].current.style.visibility = "visible"
                SearchResults.thirdFilterRefs[1].current.style.visibility = "hidden"
                SearchResults.thirdFilterRefs.splice(0, 2)
            }
            SearchResults.typeFilter.push(typeOfPlace)
            if(SearchResults.typeFilter.length == 3) {
                SearchResults.thirdFilterRefs.push(minusRef)
                SearchResults.thirdFilterRefs.push(plusRef)
            }
            minusRef.current.style.visibility = "hidden"
            plusRef.current.style.visibility = "visible"
            updateSearch()
        }
        console.log(SearchResults.typeFilter)
        return
    }

    //appends the search bars based on dropdown functions
    const updateSearch = () => {
        if(SearchResults.typeFilter.length == 0) {
            setHolder1('Select First Filter')
        } else if (SearchResults.typeFilter.length == 1) {
            setHolder1(`Enter ${SearchResults.typeFilter[0]}`)
            setHolder2('Select Second Filter')
        } else if (SearchResults.typeFilter.length == 2) {
            setHolder1(`Enter ${SearchResults.typeFilter[0]}`)
            setHolder2(`Enter ${SearchResults.typeFilter[1]}`)
            setHolder3('Select Third Filter')
        } else {
            setHolder3(`Enter ${SearchResults.typeFilter[2]}`)
        }
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
                <div class="players">
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
                            class="form-control" 
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2" 
                            placeholder={holder2} 
                            onChange={e => setInput2(e.target.value)}/>
                        <input 
                            type="text" 
                            value = {input3} 
                            class="form-control" 
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
                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("IGN", ignMinus, ignPlus)}>
                                        <i ref={ignPlus} class= "bi-plus-square-fill"></i>
                                        <i ref={ignMinus} class= "unchecked bi bi-square"></i><span>IGN</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Team", teamMinus, teamPlus)}>
                                        <i ref={teamPlus} class="bi-plus-square-fill"></i>
                                        <i ref={teamMinus} class="unchecked bi bi-square"></i><span>Team</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Region", regionMinus, regionPlus)}>
                                        <i ref={regionPlus} class="bi-plus-square-fill"></i>
                                        <i ref={regionMinus} class="unchecked bi bi-square"></i> <span>Region</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Position", positionMinus, positionPlus)}>
                                        <i ref={positionPlus} class="bi-plus-square-fill"></i>
                                        <i ref={positionMinus}class="unchecked bi bi-square"></i> <span>Position</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("KDA", kdaMinus, kdaPlus)}>
                                        <i ref={kdaPlus} class="bi-plus-square-fill"></i>
                                        <i ref={kdaMinus} class="unchecked bi bi-square"></i> <span>KDA</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick = {() => findResults()}>
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">IGN</th>
                            <th scope="col">Team</th>
                            <th scope="col">Region</th>
                            <th scope="col">Position</th>
                            <th scope="col">KDA</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Doublelift</td>
                            <td>Retired</td>
                            <td>LCS</td>
                            <td>ADC</td>
                            <td>0.1</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Faker</td>
                            <td>T1</td>
                            <td>LCK</td>
                            <td>Mid</td>
                            <td>10.0</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Core JJ</td>
                            <td>Team Liquid</td>
                            <td>LCS</td>
                            <td>Support</td>
                            <td>3.2</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Canyon</td>
                            <td>Damwon Kia</td>
                            <td>LCK</td>
                            <td>Jungle</td>
                            <td>5.2</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </motion.div>
        </Fragment>
    )
};

export default Players;