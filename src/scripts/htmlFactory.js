const restaurantResultMaker = (name, locality) => {
    return `
    <div class="search-result">
    <h3>${name}</h3>
    <p>${locality}</p>
    </div>`
}