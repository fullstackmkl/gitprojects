// script.js content
function showContent(sectionId) {
    // Hide all content boxes
    document.querySelectorAll('.content-box').forEach(function(box) {
        box.style.display = 'none';
    });
    // Display the content box related to the button clicked
    document.getElementById(sectionId).style.display = 'block';
}
function showOutput() {
    var segment = document.getElementById('segmentSelect').value;
    var output = document.getElementById('output');
    output.innerHTML = `<strong>Details for ${segment}:</strong> Specific information related to the chosen segment.`;
}