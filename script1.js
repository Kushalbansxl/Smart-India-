// JavaScript to handle form submission
document.getElementById('submitBtn').addEventListener('click', function() {
    const cropName = document.getElementById('cropName').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    if (!cropName || !description || !type || !deliveryDate || !quantity || !location) {
        alert('Please fill in all fields.');
        return;
    }

    const requirementDetails = {
        cropName,
        description,
        type,
        deliveryDate,
        quantity,
        location
    };

    let requirements = localStorage.getItem('requirements');
    requirements = requirements ? JSON.parse(requirements) : [];
    requirements.push(requirementDetails);
    localStorage.setItem('requirements', JSON.stringify(requirements));

    alert('Crop requirement submitted successfully!');
    document.getElementById('requirementForm').reset();
});
