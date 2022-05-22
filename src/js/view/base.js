export const elements = {
    searchForm: document.querySelector(".search "),
    searchInput: document.querySelector(".search__field"),
    searchResultDiv: document.querySelector(".results"),
    searchResultList: document.querySelector(".results__list"),
};
const elementsString = {
    loader: "loader",
};
export const renderLoader = (parent) => {
    const loader = `
    <div class="${elementsString.loader}
    ">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>`;
    parent.insertAdjacentHTML("afterbegin", loader);
};
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementsString.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};