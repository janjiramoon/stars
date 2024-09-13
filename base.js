document.addEventListener("DOMContentLoaded", function() {
    var readMoreButton = document.getElementById('read-more-sundae');
    var targetContent = document.getElementById('sundae-read-more');

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
    var readMoreButton = document.getElementById('read-more-cardless');
    var targetContent = document.getElementById('cardless-read-more');

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

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
    const subProjects = document.querySelectorAll('.sub-project');

    // Initially show all projects
    projects.forEach(project => {
        project.style.display = 'block';
        project.classList.add('fade-in');
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            projects.forEach(project => {
                const projectCategories = project.getAttribute('data-categories').split(',');
                const subProjectsInProject = project.querySelectorAll('.sub-project');
                let shouldShowProject = filter === 'all' || projectCategories.includes(filter);

                subProjectsInProject.forEach(subProject => {
                    const subProjectCategories = subProject.getAttribute('data-categories').split(',');
                    if (filter === 'all' || subProjectCategories.includes(filter)) {
                        subProject.style.display = 'block';
                        shouldShowProject = true;
                    } else {
                        subProject.style.display = 'none';
                    }
                });

                if (shouldShowProject) {
                    project.style.display = 'block';
                    project.classList.add('fade-in');
                } else {
                    project.style.display = 'none';
                    project.classList.remove('fade-in');
                }
            });
        });
    });
});
