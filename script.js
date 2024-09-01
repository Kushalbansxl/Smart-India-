// JavaScript to handle the description modal toggle
document.querySelectorAll('.infoButton').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
        } else {
            document.querySelectorAll('.descriptionModal').forEach(modal => modal.classList.remove('show'));
            modal.classList.add('show');
        }
    });
});

// JavaScript to handle form submission and dynamically add to listings page
document.getElementById('submitBtn').addEventListener('click', function() {
    const cropName = document.getElementById('cropName').value;
    const description = document.getElementById('description').value;
    const region = document.getElementById('region').value;
    const soilType = document.getElementById('soilType').value;
    const price = document.getElementById('price').value;

    if (!cropName || !description || !region || !soilType || !price) {
        alert('Please fill in all fields.');
        return;
    }

    const cropDetails = {
        cropName,
        description,
        region,
        soilType,
        price
    };

    let crops = localStorage.getItem('crops');
    crops = crops ? JSON.parse(crops) : [];
    crops.push(cropDetails);
    localStorage.setItem('crops', JSON.stringify(crops));

    alert('Crop details submitted successfully!');
    document.getElementById('queryForm').reset();
});

// JavaScript to close the modal when clicking outside of it
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});

// JavaScript to close the modal when clicking the close button
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').classList.remove('show');
    });
});
