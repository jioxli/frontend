import React, {Fragment} from "react"
import './file.css';

const DatabaseExample = () => {

    return (
        <Fragment>

            <div classname = "search" >
            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div id="filter-container" class="hidden">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle mx-2" type="button" id="type-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="type-dropdown">
                                <li><a class="dropdown-item" onclick="toggleType('player')">
                                <i class="player bi bi-plus-square-fill"></i>
                                <i class="unchecked-player hide bi bi-square"></i><span>Player</span></a>
                                </li>

                                <li><a class="dropdown-item" onclick="toggleType('team')">
                                <i class="team bi bi-plus-square-fill"></i>
                                <i class="unchecked-team hide bi bi-square"></i><span>Team</span></a>
                                </li>
                                
                                <li><a class="dropdown-item" onclick="toggleType('player')">
                                <i class="region bi bi-plus-square-fill"></i>
                                <i class="unchecked-region hide bi bi-square"></i> <span>Region</span></a>
                                </li>   

                                <li><a class="dropdown-item" onclick="toggleType('game')">
                                <i class="game bi bi-plus-square-fill"></i>
                                <i class="unchecked-game hide bi bi-square"></i> <span>Game</span></a>
                                </li>   

                                <li><a class="dropdown-item" onclick="toggleType('tournament')">
                                <i class="tournament bi bi-plus-square-fill"></i>
                                <i class="unchecked-tournament hide bi bi-square"></i> <span>Tournament</span></a>
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
)};

export default DatabaseExample;