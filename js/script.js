// Accessibility Demo Scripts

// Announce live region update
document.addEventListener("DOMContentLoaded", () => {
    const alertTrigger = document.getElementById("alertTrigger");
    if (alertTrigger) {
      alertTrigger.addEventListener("click", announceUpdate);
    }
  });
  
  function announceUpdate() {
    const alertBox = document.getElementById("alertBox");
    if (!alertBox) return;
  
    // Set the alert message
    alertBox.textContent = "This is an important update for screen readers.";
    alertBox.classList.remove("visually-hidden");
  
    // Hide the alert after 5 seconds
    setTimeout(() => {
      alertBox.classList.add("visually-hidden");
      alertBox.textContent = ""; // clear content for screen readers
    }, 5000);
  }
  
  // Optional: Trap focus inside modal or a specific region
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
      'textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
  
    function handleFocus(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  
    element.addEventListener('keydown', handleFocus);
  }
  
  // Example usage for future modal/dialog component
  // const modal = document.getElementById('myModal');
  // trapFocus(modal);
  