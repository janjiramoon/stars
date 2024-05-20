document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more-nola');
    var targetContent = document.getElementById('nola-read-more');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Toggle the visibility of the content
        if (targetContent.style.display === 'block') {
            targetContent.style.display = 'none'; // Hide the content
        } else {
            targetContent.style.display = 'block'; // Show the content
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more');
    var targetContent = document.getElementById('murmur-read-more');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Toggle the visibility of the content
        if (targetContent.style.display === 'block') {
            targetContent.style.display = 'none'; // Hide the content
        } else {
            targetContent.style.display = 'block'; // Show the content
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more-contra');
    var targetContent = document.getElementById('contra-read-more');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Toggle the visibility of the content
        if (targetContent.style.display === 'block') {
            targetContent.style.display = 'none'; // Hide the content
        } else {
            targetContent.style.display = 'block'; // Show the content
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more-journal');
    var targetContent = document.getElementById('journal-read-more');

    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Toggle the visibility of the content
        if (targetContent.style.display === 'block') {
            targetContent.style.display = 'none'; // Hide the content
        } else {
            targetContent.style.display = 'block'; // Show the content
        }
    });
});