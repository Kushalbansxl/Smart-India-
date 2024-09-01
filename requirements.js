document.addEventListener('DOMContentLoaded', () => {
    const requirementsList = document.getElementById('requirementsList');

    // Retrieve buyer requirements from localStorage
    let requirements = localStorage.getItem('requirements');
    requirements = requirements ? JSON.parse(requirements) : [];

    // Generate the HTML for each requirement
    requirements.forEach((requirement, index) => {
        const requirementItem = document.createElement('div');
        requirementItem.className = 'requirementItem';

        requirementItem.innerHTML = `
            <h4>Requirement ${index + 1} <button class="infoButton" data-index="${index}">i</button></h4>
            <p>${requirement.cropName}, ${requirement.quantity} kg, ${requirement.location}</p>
            <div class="descriptionModal">
                <p>${requirement.description}</p>
            </div>
        `;

        requirementsList.appendChild(requirementItem);
    });

    // Add click event listener for info buttons
    document.querySelectorAll('.infoButton').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const modal = document.querySelectorAll('.descriptionModal')[index];
            if (modal.classList.contains('show')) {
                modal.classList.remove('show');
            } else {
                document.querySelectorAll('.descriptionModal').forEach(modal => modal.classList.remove('show'));
                modal.classList.add('show');
            }
        });
    });
});
