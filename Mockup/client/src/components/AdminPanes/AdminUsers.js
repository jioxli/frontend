import React, { 
    Fragment, 
    useRef, 
    useState } 
from "react"

//you will need to run npm-install framer-motion
import {motion} from "framer-motion"

import AddUser from "./DataHandlers/AddUser";
import EditUser from "./DataHandlers/EditUser";

const SearchResults = {
    typeFilter: [],         //**IMPORTANT** User's filters
    thirdFilterRefs: []
}


const AdminUsers = () => {

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

    const aidPlus = useRef(0);
    const aidMinus = useRef(0);
    const namePlus = useRef(0);
    const nameMinus = useRef(0);
    const passPlus = useRef(0);
    const passMinus = useRef(0);
    const isAdminPlus = useRef(0);
    const isAdminMinus = useRef(0);

    //**EXECUTES WHEN SEARCH IS PRESSED**
    const findResults = () => {
        let inputArr = []                            //**IMPORTANT User's inputs
        let filterArr = ['Admin', 'Account']             //**IMPORTANT, User's Filters
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
                <div class="data">
                <h1> Teams </h1>
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
                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("AID", aidMinus, aidPlus)}>
                                        <i ref={aidPlus} class= "bi-plus-square-fill"></i>
                                        <i ref={aidMinus} class= "unchecked bi bi-square"></i><span>AID</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Username", nameMinus, namePlus)}>
                                        <i ref={namePlus} class= "bi-plus-square-fill"></i>
                                        <i ref={nameMinus} class= "unchecked bi bi-square"></i><span>Username</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Password", passMinus, passPlus)}>
                                        <i ref={passPlus} class="bi-plus-square-fill"></i>
                                        <i ref={passMinus} class="unchecked bi bi-square"></i><span>Password</span></a>
                                    </li>

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("IsAdmin", isAdminMinus, isAdminPlus)}>
                                        <i ref={isAdminPlus} class="bi-plus-square-fill"></i>
                                        <i ref={isAdminMinus}class="unchecked bi bi-square"></i><span>isAdmin</span></a>
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
                            <AddUser />
                        </div>
                    </div>
                {/*Table */}
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">AID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>            
                            <th scope="col">Is Admin</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Body data goes here*/}
                    </tbody>
                </table>
                </div>
            </motion.div>
        </Fragment>
    )
};

export default AdminUsers;