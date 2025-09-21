document.addEventListener("DOMContentLoaded",()=>{
    const dropdownIcon = document.querySelectorAll('.fa-caret-down'); 
    const dropdownMenu = document.querySelectorAll('.detailinfo');

    dropdownIcon.forEach((icon,index) => {
        icon.addEventListener("click",() =>{
            const menu=dropdownMenu[index];
            if(menu){
                menu.classList.toggle("active");
            }
        })
    });
});

dropdownMenu.forEach(menu => {
    const text = menu.querySelector('.detailssize');
    if(text){
        menu.querySelectorAll('p').forEach(option =>{
            option.addEventListener("click",() =>{
                const selectOption = option.innerText;
                text.innerText = selectOption;
                console.log(selectOption);
            });
        });
    }
});

