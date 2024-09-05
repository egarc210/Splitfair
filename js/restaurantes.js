const restaurants = [
    "Pizza Hut",
    "Domino's Pizza",
    "McDonald's",
    "Burger King",
    "Subway",
    "Starbucks",
    "KFC",
    "Taco Bell",
    "Chili's",
    "Olive Garden",
    "Italianis",
    "Carl´s Jr"
];

function loadAllRestaurants() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; 

    restaurants.forEach(restaurant => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.textContent = restaurant;
        resultsContainer.appendChild(resultDiv);
    });
}


function searchRestaurant() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; 

    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.toLowerCase().includes(query)
    );

    if (filteredRestaurants.length > 0) {
        filteredRestaurants.forEach(restaurant => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');
            resultDiv.textContent = restaurant;
            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

window.onload = loadAllRestaurants;