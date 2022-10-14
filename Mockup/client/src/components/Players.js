import React, { Fragment, useRef } from "react"
import './Players.css';

import {
    Form,
} from "react-router-dom"

const SearchResults = {
    typeFilter: ['ign', 'team', 'region', 'position', 'kda']
}

const Players = () => {
    const ignRef = useRef();
    const teamRef = useRef();
    const regionRef = useRef();
    const positionRef = useRef();
    const kdaRef = useRef();

    function togglePType(typeOfPlace) {
        let checked = { typeOfPlace }.current;
        let unchecked = { typeOfPlace }.current;
        let index = SearchResults.typeFilter.findIndex(type => type == typeOfPlace);

        console.log(index);
        if (index < 0) {
            checked.classList.add("show");
            checked.classList.remove("hide");
            unchecked.classList.remove("show");
            unchecked.classList.add("hide");
        } else {
            checked.classList.add("hide");
            checked.classList.remove("show");
            unchecked.classList.remove("hide");
            unchecked.classList.add("show");
        }

        return
    }

    return (
        <Fragment>
            <h1> Players </h1>
            <div classname="search" >
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div id="filter-container" class="hidden">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle mx-2" type="button" id="type-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="type-dropdown">
                                <li><a ref={ignRef} class="dropdown-item" onClick={togglePType('ign')}>
                                    <i class="player bi bi-plus-square-fill"></i>
                                    <i class="unchecked-ign hide bi bi-square"></i><span>IGN</span></a>
                                </li>

                                <li><a class="dropdown-item" onclick="togglePType('team')">
                                    <i class="team bi bi-plus-square-fill"></i>
                                    <i class="unchecked-team hide bi bi-square"></i><span>Team</span></a>
                                </li>

                                <li><a class="dropdown-item" onclick="togglePType('region')">
                                    <i class="region bi bi-plus-square-fill"></i>
                                    <i class="unchecked-region hide bi bi-square"></i> <span>Region</span></a>
                                </li>

                                <li><a class="dropdown-item" onclick="togglePType('position')">
                                    <i class="game bi bi-plus-square-fill"></i>
                                    <i class="unchecked-position hide bi bi-square"></i> <span>Position</span></a>
                                </li>

                                <li><a class="dropdown-item" onclick="togglePType('kda')">
                                    <i class="tournament bi bi-plus-square-fill"></i>
                                    <i class="unchecked-kda hide bi bi-square"></i> <span>KDA</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" >
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <table class="table table-sm table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">IGN</th>
                        <th scope="col">Team</th>
                        <th scope="col">Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Doublelift</td>
                        <td>Retired</td>
                        <td>ADC</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Faker</td>
                        <td>T1</td>
                        <td>Mid</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Core JJ</td>
                        <td>Team Liquid</td>
                        <td>Support</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Canyon</td>
                        <td>Damwon Kia</td>
                        <td>Jungle</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
};

export default Players;