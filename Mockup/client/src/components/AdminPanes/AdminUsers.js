import React, { 
    Fragment, 
    useRef, 
    useState,
    useEffect
 } 
from "react"

//you will need to run npm-install framer-motion
import {motion} from "framer-motion"

import AddUser from "./DataHandlers/AddUser";
import EditUser from "./DataHandlers/EditUser";

const SearchResults = {
    typeFilter: [],         //**IMPORTANT** Account's filters
    thirdFilterRefs: []
}


const AdminAccounts = () => {

    const [accounts, setAccounts] = useState([])
    const [originalAccounts, setOriginalAccounts] = useState([])

    const[holder1, setHolder1] = useState('Select First Filter')
    const[holder2, setHolder2] = useState('Select Second Filter')
    const[holder3, setHolder3] = useState('Select Third Filter')
    const[input1, setInput1] = useState('')
    const[input2, setInput2] = useState('')
    const[input3, setInput3] = useState('')
    const[textClass2, setTextClass2] = useState('form-control hide')
    const[textClass3, setTextClass3] = useState('form-control hide')

    const aidPlus = useRef(0);
    const aidMinus = useRef(0);
    const namePlus = useRef(0);
    const nameMinus = useRef(0);
    const passPlus = useRef(0);
    const passMinus = useRef(0);
    const isAdminPlus = useRef(0);
    const isAdminMinus = useRef(0);

    const getAccounts = async() => {
        try {
            const response = await fetch("http://localhost:5000/accounts")
            const jsonData = await response.json();
            setAccounts(jsonData)
            setOriginalAccounts(JSON.parse(JSON.stringify(jsonData)))
        } catch(err) {
            console.error(err.message)
        }
    }

    //**EXECUTES WHEN SEARCH IS PRESSED**
    const findResults = () => {
        setAccounts(originalAccounts)
        let inputArr = []                            //**IMPORTANT Account's inputs
        let filterArr = []                          //**IMPORTANT, Account's Filters
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
                case 'aid':
                    setAccounts(accounts.filter(account => account.aid == inputArr[i]))
                    break;
                case 'username':
                    setAccounts(accounts.filter(account => account.username == inputArr[i]))
                    break;
                case 'password':
                    setAccounts(accounts.filter(account => account.password == inputArr[i]))
                    break;
                case 'isadmin':
                    setAccounts(accounts.filter(account => String(account.isadmin) == inputArr[i]))
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
        getAccounts()
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
                {/*Search bars */}
                <div class="data">
                <h1> Accounts </h1>
                    <div class="input-group mb-3">
                        <input 
                            type="text" 
                            value = {input1} 
                            class="form-control" 
                            aria-label="Recipient's Accountname" 
                            aria-describedby="basic-addon2" 
                            placeholder={holder1} 
                            onChange={e => setInput1(e.target.value)}/>
                        <input 
                            type="text" 
                            value = {input2} 
                            class= {textClass2} 
                            aria-label="Recipient's Accountname" 
                            aria-describedby="basic-addon2" 
                            placeholder={holder2} 
                            onChange={e => setInput2(e.target.value)}/>
                        <input 
                            type="text" 
                            value = {input3} 
                            class={textClass3}
                            aria-label="Recipient's Accountname" 
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

                                    <li><a class="dropdown-item" onClick= {() => toggleFilter("Accountname", nameMinus, namePlus)}>
                                        <i ref={namePlus} class= "bi-plus-square-fill"></i>
                                        <i ref={nameMinus} class= "unchecked bi bi-square"></i><span>Accountname</span></a>
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
                            <th scope="col">username</th>
                            <th scope="col">Password</th>            
                            <th scope="col">Is Admin</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {accounts.map(account => (
                            <tr key={account.aid}>
                                <td>{account.aid}</td>
                                <td>{account.username}</td>
                                <td>{account.password}</td>
                                <td>{String(account.isadmin)}</td>
                                <td><EditUser /></td> {/*game={game}*/}
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

export default AdminAccounts;