const toggleBtn = document.getElementById("toggleProfile");
const profile = document.getElementById("profile");
const searchInput = document.getElementById("searchSkills");
const skillsList = document.getElementById("skillsList");
const noMatch = document.getElementById("noMatch");


toggleBtn.addEventListener("click", () => {
  profile.classList.toggle("hidden");
  toggleBtn.textContent = profile.classList.contains("hidden") 
    ? "Show My Profile" 
    : "Hide My Profile";
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let matches = 0;

  Array.from(skillsList.children).forEach(skill => {
    if (skill.textContent.toLowerCase().includes(query)) {
      skill.style.display = "list-item";
      matches++;
    } else {
      skill.style.display = "none";
    }
  });

  noMatch.classList.toggle("hidden", matches > 0);
});
