document.addEventListener('DOMContentLoaded', function() {
    var scrollToElements = document.querySelectorAll('[data-scroll-to]');
  
    scrollToElements.forEach(function(element) {
      element.addEventListener('click', function(event) {
        event.preventDefault();
  
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
  let projects = document.querySelectorAll('.project');
  let rotationInterval;
  
  function rotateProjects() {
      let activeProject = document.querySelector('.project.active');
      let nextProject = activeProject.nextElementSibling || projects[0];
      activeProject.classList.remove('active');
      nextProject.classList.add('active');
  }

  function startRotation() {
      rotationInterval = setInterval(rotateProjects, 60000); // 1 minute interval
  }

  function stopRotation() {
      clearInterval(rotationInterval);
  }

  projects.forEach(project => {
      project.addEventListener('click', function () {
          if (this.classList.contains('active')) {
              stopRotation();
          }
      });
  });

  startRotation();
});


document.addEventListener("DOMContentLoaded", function() {
  let carouselItems = document.querySelectorAll(".project-item");
  let modal = document.getElementById("projectModal");
  let modalTitle = document.getElementById("modalTitle");
  let modalDescription = document.getElementById("modalDescription");
  let modalImage = document.getElementById("modalImage");

  carouselItems.forEach(item => {
      item.addEventListener("click", function() {
        modalTitle.innerText = item.dataset.title;
        modalDescription.innerText = item.dataset.description;
        modalImage.src = item.dataset.image;
        $('#projectModal').modal('show');
      });
  });
});

