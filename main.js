// Simple Contact Form Handler - No Dependencies Required
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎓 TKSA Website Loaded Successfully!');
  
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.style.background = 'rgba(15, 23, 42, 0.98)';
      navbar.style.backdropFilter = 'blur(25px)';
      navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.background = 'rgba(15, 23, 42, 0.95)';
      navbar.style.backdropFilter = 'blur(20px)';
      navbar.style.boxShadow = 'none';
    }
  });
  
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const studentName = document.getElementById('studentName').value;
      const selectedClass = document.getElementById('selectedClass').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const message = document.getElementById('message').value;
      
      // Validation
      if (!studentName.trim()) {
        showNotification('Please enter student name', 'error');
        return;
      }
      
      if (!selectedClass) {
        showNotification('Please select a class/program', 'error');
        return;
      }
      
      if (!phoneNumber.trim()) {
        showNotification('Please enter phone number', 'error');
        return;
      }
      
      // Phone number validation
      const phoneRegex = /^(\+92|0)?[0-9]{10}$/;
      if (!phoneRegex.test(phoneNumber.replace(/\s+/g, ''))) {
        showNotification('Please enter a valid Pakistani phone number', 'error');
        return;
      }
      
      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.innerHTML = 'Sending...';
      submitButton.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        // Log the form data
        console.log('📧 CONTACT FORM SUBMISSION:', {
          studentName,
          selectedClass,
          phoneNumber,
          message,
          timestamp: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })
        });
        
        // Show success message
        showNotification('✅ Thank you! Your inquiry has been received. Please call +92 300 414 4177 for immediate assistance. 🎓', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
      }, 2000);
    });
  }
  
  // Notification system
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    
    const colors = {
      success: '#10b981',
      error: '#ef4444',
      info: '#6366f1',
      warning: '#f59e0b'
    };
    
    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️'
    };
    
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1.2rem 1.8rem;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 500;
        max-width: 350px;
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        animation: slideIn 0.4s ease;
      ">
        <span style="font-size: 1.2rem;">${icons[type]}</span>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 6 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 400);
      }
    }, 6000);
  }
  
  // Add notification animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { 
        transform: translateX(100%); 
        opacity: 0; 
      }
      to { 
        transform: translateX(0); 
        opacity: 1; 
      }
    }
    @keyframes slideOut {
      from { 
        transform: translateX(0); 
        opacity: 1; 
      }
      to { 
        transform: translateX(100%); 
        opacity: 0; 
      }
    }
  `;
  document.head.appendChild(style);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Simple scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.scroll-animate').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
  
  // Counter animation for stats
  const animateCounter = (element, target, suffix = '') => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + suffix;
    }, 50);
  };
  
  // Trigger counter animation when stats section is visible
  const statsSection = document.querySelector('.about-stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-item h3');
          const targets = [15, 500, 10];
          const suffixes = ['+', '+', ''];
          
          statNumbers.forEach((stat, index) => {
            setTimeout(() => {
              animateCounter(stat, targets[index], suffixes[index]);
            }, index * 300);
          });
          
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
  }
  
  // Welcome message
  setTimeout(() => {
    showNotification('Welcome to The Knowledge Science Academy! 🎓', 'success');
  }, 1500);
});

// Ensure page is visible
document.body.style.opacity = '1';
document.body.style.visibility = 'visible';