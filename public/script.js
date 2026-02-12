const form = document.getElementById('processingForm');
const userInputField = document.getElementById('userInput');
const resultContainer = document.getElementById('resultContainer');
const errorContainer = document.getElementById('errorContainer');
const loadingSpinner = document.getElementById('loadingSpinner');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userInput = userInputField.value.trim();
    if (!userInput) {
        showError('Please enter some text');
        return;
    }

    loadingSpinner.style.display = 'block';
    resultContainer.style.display = 'none';
    errorContainer.style.display = 'none';

    try {
        const response = await fetch('/api/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('originalText').textContent = data.original;
        document.getElementById('processedText').textContent = data.processed;
        document.getElementById('timestamp').textContent = new Date(data.timestamp).toLocaleString();
        resultContainer.style.display = 'block';
        errorContainer.style.display = 'none';
    } catch (error) {
        showError('Error processing text: ' + error.message);
    } finally {
        loadingSpinner.style.display = 'none';
    }
});

function showError(message) {
    document.getElementById('errorMessage').textContent = message;
    errorContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    loadingSpinner.style.display = 'none';
}