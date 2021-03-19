document.addEventListener("DOMContentLoaded", appStart);
            
function appStart() {
    let companyName = document.querySelector('.company-name');
    let search = document.querySelector('.btn-search');
    let navbar = document.querySelector('.navbar');
    let headerActions = document.querySelector('.header-actions');
    let headerForm = document.querySelector('.header-form');
    let cancelSearch = document.querySelector('.cancel-search');
    let headerInput = document.querySelector('.header-input');
    let btnArrow = document.querySelector('.form-arrow');

    search.addEventListener('click', searchClick);
    cancelSearch.addEventListener('click', сlickBtn);
    btnArrow.addEventListener('click', сlickBtn);

    function searchClick() {
        navbar.classList.add("hide");
        headerActions.classList.add("hide");
        companyName.classList.add("hide");
        headerForm.classList.remove("hide");
        headerInput.focus();

    }

    function сlickBtn() {
        navbar.classList.remove("hide");
        companyName.classList.remove("hide");
        headerActions.classList.remove("hide");
        headerForm.classList.add("hide");
    }              
}