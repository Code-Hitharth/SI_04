// Toggle collapsible sections
function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "block" ? "none" : "block";
}

// Skills Chart
const ctx = document.getElementById("skillsChart").getContext("2d");
const skillsChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["C", "C++", "Java", "Python", "Web Development"],
    datasets: [
      {
        label: "Proficiency",
        data: [85, 75, 80, 90, 70],
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  },
});
