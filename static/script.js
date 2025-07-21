document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('myButton');
  const resultDiv = document.getElementById('result');

  button.addEventListener('click', function() {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        resultDiv.textContent = data.message;
      })
      .catch(error => {
        resultDiv.textContent = 'An error occurred.';
        console.error('Error:', error);
      });
  });
});