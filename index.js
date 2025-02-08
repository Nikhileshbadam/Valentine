const acceptButton = document.getElementById('accept');
const subContainer = document.getElementById('sub-container');
const newDiv = document.getElementById('newDiv');


acceptButton.addEventListener('click', function() {
    subContainer.style.display = 'none';
    newDiv.classList.remove('hide');  
  
    newDiv.classList.add('sub-container')
  });