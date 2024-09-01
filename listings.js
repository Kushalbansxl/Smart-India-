document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('listingsContainer');
    const crops = JSON.parse(localStorage.getItem('crops')) || [];

    if (crops.length === 0) {
        listingsContainer.innerHTML = '<p>No listings available.</p>';
        return;
    }

    crops.forEach((crop, index) => {
        const cropDiv = document.createElement('div');
        cropDiv.classList.add('listingItem');
        cropDiv.innerHTML = `
            <h3>${crop.cropName}</h3>
            <p>${crop.description}</p>
            <p>Region: ${crop.region}</p>
            <p>Type of Soil: ${crop.soilType}</p>
            <p>Price per Kg: ${crop.price}</p>
            <button class="removeBtn" data-index="${index}">Remove</button>
        `;
        listingsContainer.appendChild(cropDiv);
    });

    // Handle remove buttons
    listingsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('removeBtn')) {
            const index = event.target.getAttribute('data-index');
            crops.splice(index, 1);
            localStorage.setItem('crops', JSON.stringify(crops));
            location.reload(); // Reload to reflect changes
        }
    });
});
