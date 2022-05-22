import { elements } from "./base";

//Private function
const renderRecipe = (recipe) => {
    const markup = `<li>
                        <a class="results__link " href="#${recipe.recipe_id}">
                            <figure class="results__fig">
                                <img src="${recipe.image_url}" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${recipe.title}</h4>
                                <p class="results__author">${recipe.publisher}</p>
                            </div>
                        </a>
                    </li>`;

    elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
const createButton = (
    page,
    type,
    direction
) => ` <button class="btn-inline results__btn--${type}" data-goto=${page}>
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${direction}"></use>
</svg>
<span>Хуудас ${page}</span>
</button>`;
const renderButtons = (currentPage, totalPages) => {
    let buttonHtml;

    currentPage == 1 && totalPages > 1 // page 1 deer bn page 2 iig garga
        ?
        (buttonHtml = createButton(2, "next", "right")) :
        currentPage < totalPages // prev page , next page
        ?
        (buttonHtml =
            createButton(currentPage - 1, "prev", "left") +
            createButton(currentPage + 1, "next", "right")) :
        currentPage === totalPages ?
        (buttonHtml = createButton(currentPage - 1, "prev", "left")) :
        console.log("i love poop");

    elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHtml);

    // its last page,  render only prev button
};

export const getInput = () => elements.searchInput.value;
export const clearSearchQuery = () => {
    elements.searchInput.value = "";
};
export const clearSearchResult = () => {
    elements.searchResultList.innerHTML = "";
    elements.pageButtons.innerHTML = "";
};
export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
    //Хайлтын үр дүнг хуудаслах
    const start = (currentPage - 1) * resPerPage;
    const end = currentPage * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    // Хуудасны товчийг тохируулах
    const totalPages = Math.ceil(recipes.length / resPerPage);
    renderButtons(currentPage, totalPages);
};