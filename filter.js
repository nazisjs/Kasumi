document.addEventListener("DOMContentLoaded",()=>{
const filterButtons = document.querySelectorAll('.indicator li');
const filterablecards = document.querySelectorAll('.container');


const filterCards =(e) =>{
    document.querySelector('.indicator .active');
    e.target.classList.add(".active"); // classes are added 
    

    const filterValue = e.target.getAttribute("data-filter"); //filtration

    filterablecards.forEach((container) => {
        if (filterValue === 'ALL' || container.querySelector(`[data-filter="${filterValue}"]`)){
            container.classList.remove("hide"); // filtering by data names
        }
        else{
            container.classList.add("hide");
        }

        });
};
filterButtons.forEach(button => button.addEventListener("click",filterCards)); // manipulating with buttons
});