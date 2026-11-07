/**
 * Workflow Consultation Booking Interactive Engine
 * Handles date picker initialization, time slot selection,
 * Step 1 -> Step 2 validation, FormSubmit AJAX submission,
 * and direct email / WhatsApp fallback.
 */

(function () {
  'use strict';

  function initWorkflowBooking() {
    var form = document.getElementById('workflowBookingForm');
    if (!form) return;

    var dateInput = document.getElementById('bookingDate');
    var timeSlotsGrid = document.getElementById('timeSlotsGrid');
    var selectedTimeInput = document.getElementById('selectedTimeInput');
    var timezoneEl = document.getElementById('userDetectedTimezone');
    var step1 = document.getElementById('bookingStep1');
    var step2 = document.getElementById('bookingStep2');
    var successState = document.getElementById('bookingSuccessState');
    var summaryBadge = document.getElementById('bookingSummaryBadge');

    var btnContinue = document.getElementById('btnStep1Continue');
    var btnBack = document.getElementById('btnStep2Back');
    var btnBackBottom = document.getElementById('btnStep2BackBottom');
    var btnSubmit = document.getElementById('btnSubmitBooking');
    var btnSubmitText = document.getElementById('btnSubmitText');
    var btnReset = document.getElementById('btnResetBooking');

    // 1. Set default date to today / formatted YYYY-MM-DD
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var formattedToday = yyyy + '-' + mm + '-' + dd;

    if (dateInput) {
      dateInput.min = formattedToday;
      if (!dateInput.value) {
        dateInput.value = formattedToday;
      }
    }

    // 2. Detect User Timezone
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && timezoneEl) {
        timezoneEl.textContent = tz;
      }
    } catch (e) {
      // Keep Asia/Dhaka fallback
    }

    // 3. Time slot button selection
    if (timeSlotsGrid) {
      var timeButtons = timeSlotsGrid.querySelectorAll('.ht-time-slot');
      timeButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          timeButtons.forEach(function (b) {
            b.classList.remove('ht-time-slot--selected');
          });
          btn.classList.add('ht-time-slot--selected');
          var chosenTime = btn.getAttribute('data-time');
          if (selectedTimeInput) {
            selectedTimeInput.value = chosenTime;
          }
        });
      });
    }

    // 4. Step 1 -> Step 2 Navigation
    function goToStep2() {
      if (!dateInput || !dateInput.value) {
        if (dateInput) dateInput.focus();
        return;
      }

      var chosenDate = dateInput.value;
      var chosenTime = (selectedTimeInput && selectedTimeInput.value) ? selectedTimeInput.value : '09:00 AM';

      // Format human friendly date
      var dateParts = chosenDate.split('-');
      var dateObj = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
      var dateFormatted = dateObj.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      if (summaryBadge) {
        summaryBadge.textContent = 'Selected: ' + chosenTime + ' on ' + dateFormatted;
      }

      if (step1 && step2) {
        step1.style.display = 'none';
        step2.style.display = 'block';
        step2.classList.add('ht-booking-step--active');
        step1.classList.remove('ht-booking-step--active');
        
        var nameField = document.getElementById('bookingName');
        if (nameField) nameField.focus();
      }
    }

    function goToStep1() {
      if (step1 && step2) {
        step2.style.display = 'none';
        step1.style.display = 'block';
        step1.classList.add('ht-booking-step--active');
        step2.classList.remove('ht-booking-step--active');
      }
    }

    if (btnContinue) {
      btnContinue.addEventListener('click', goToStep2);
    }
    if (btnBack) {
      btnBack.addEventListener('click', goToStep1);
    }
    if (btnBackBottom) {
      btnBackBottom.addEventListener('click', goToStep1);
    }

    // 5. Handle Form Submit via FormSubmit AJAX to devnayem30@gmail.com
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('bookingName').value.trim();
      var email = document.getElementById('bookingEmail').value.trim();
      var details = document.getElementById('bookingWorkflow').value.trim();
      var date = dateInput.value;
      var time = selectedTimeInput ? selectedTimeInput.value : '09:00 AM';
      var timezone = timezoneEl ? timezoneEl.textContent : 'Local';

      if (!name || !email || !details) {
        alert('Please complete all required fields.');
        return;
      }

      // Visual loading state
      if (btnSubmit) {
        btnSubmit.disabled = true;
        if (btnSubmitText) btnSubmitText.textContent = 'Securing Booking...';
      }

      var payload = {
        _subject: 'New Consultation Booking: ' + name + ' (' + date + ' at ' + time + ')',
        name: name,
        email: email,
        consultation_date: date,
        consultation_time: time,
        client_timezone: timezone,
        workflow_scope: details,
        _template: 'table'
      };

      fetch('https://formsubmit.co/ajax/devnayem30@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        showSuccess(name, date, time);
      })
      .catch(function (err) {
        console.warn('FormSubmit AJAX fallback:', err);
        // Fallback: Construct mailto link if offline or blocked
        var mailtoSubject = encodeURIComponent('Consultation Booking: ' + name + ' [' + date + ' ' + time + ']');
        var mailtoBody = encodeURIComponent(
          'Hi Nayem,\n\n' +
          'I would like to book a consultation.\n\n' +
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Date: ' + date + '\n' +
          'Time: ' + time + ' (' + timezone + ')\n\n' +
          'Process / Scope:\n' + details + '\n'
        );
        window.location.href = 'mailto:devnayem30@gmail.com?subject=' + mailtoSubject + '&body=' + mailtoBody;
        showSuccess(name, date, time);
      })
      .finally(function () {
        if (btnSubmit) {
          btnSubmit.disabled = false;
          if (btnSubmitText) btnSubmitText.textContent = 'Confirm Booking';
        }
      });
    });

    function showSuccess(name, date, time) {
      if (step2) step2.style.display = 'none';
      if (successState) {
        successState.style.display = 'block';
        var msg = document.getElementById('bookingSuccessMsg');
        if (msg) {
          msg.textContent = 'Thank you, ' + name + '! Your consultation has been received for ' + date + ' at ' + time + '. I will follow up via email shortly.';
        }
      }
    }

    if (btnReset) {
      btnReset.addEventListener('click', function () {
        if (successState) successState.style.display = 'none';
        form.reset();
        if (dateInput) dateInput.value = formattedToday;
        goToStep1();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWorkflowBooking);
  } else {
    initWorkflowBooking();
  }
})();
