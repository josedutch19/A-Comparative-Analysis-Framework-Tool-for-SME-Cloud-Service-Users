function navigateToMetric() {
  let dropdown = document.getElementById("metricDropdown");
  let selectedValue = dropdown.options[dropdown.selectedIndex].value;
  window.location.href = selectedValue;
}
