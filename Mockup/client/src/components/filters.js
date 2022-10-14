const SearchResults = {
    typeFilter: ['ign', 'team', 'region', 'position', 'kda']
}

function togglePType(filterType) {

    console.log("calling toggle:");
    let checked = document.querySelector(`.${filterType}`);
    let unchecked = document.querySelector(`.${filterType}`);
    let index = SearchResults.typeFilter.findIndex(type => type == filterType);

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