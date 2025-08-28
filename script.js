function handleSubmit() {
  // Check 3-hour rule
  const fromInput = document.getElementById("from").value;
  const bookingTime = new Date(fromInput);
  const now = new Date();

  const diffHours = (bookingTime - now) / (1000 * 60 * 60);
  if (diffHours < 3) {
    alert("⚠️ Booking must be made at least 3 hours before the requested time.");
    return false;
  }

  // Show success after submit
  setTimeout(() => {
    document.getElementById("bookingForm").reset();
    document.getElementById("successMessage").style.display = "block";
  }, 1000);

  return true;
}
