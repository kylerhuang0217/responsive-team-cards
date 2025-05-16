const team = document.querySelector(".team");
const teamFlex = document.querySelector(".team-flex");

//add new team member button
const button = document.createElement('button');
button.textContent = "Add Team Member";
button.className = "add-card-btn";
const buttonWrapper = document.createElement('div');
buttonWrapper.className = "button-wrapper"
buttonWrapper.appendChild(button)
team.appendChild(buttonWrapper);

// show/hide details button
const showdetailbtns = document.querySelectorAll(".show");
const hidebtns = document.querySelectorAll(".hide");
showdetailbtns.forEach(showdetailbtn =>{
  showdetailbtn.addEventListener("click",() =>{
    const card = showdetailbtn.closest(".team-item");
    const bio = card.querySelector(".bio");
    const email = card.querySelector(".email");
    bio.classList.remove("hidden");
    email.classList.remove("hidden");
  })
})

hidebtns.forEach(hidebtn =>{
  hidebtn.addEventListener("click",() =>{
    const card = hidebtn.closest(".team-item");
    const bio = card.querySelector(".bio");
    const email = card.querySelector(".email");
    bio.classList.add("hidden");
    email.classList.add("hidden");
  })
})
//createcard
const teamMembers = [
  {
    name: "Sophia Lin",
    title: "UX Strategist",
    description: "Designing experiences that actually solve user pain.",
    image: "/images/team4.jpg",
    email: "sophialin@gmail.com"
  },
  {
    name: "Noah Wu",
    title: "Cloud Architect",
    description: "Building scalable systems from the ground up.",
    image: "/images/team5.jpg",
    email: "noahwu@gmail.com"
  },
  {
    name: "Leo Chen",
    title: "AI Researcher",
    description: "Passionate about machine learning.",
    image: "/images/team6.jpg",
    email: "leochen@gmail.com"
  },
];

let memberIndex = 0;
function createCard(){
    const teamItem = document.createElement('div');
    teamItem.className = "team-item";
    const img = document.createElement('img');
    img.src = teamMembers[memberIndex].image;
    img.alt = "Team Member"
    teamItem.appendChild(img)
    const teamContent = document.createElement("div")
    teamContent.className = "team-content";
    const nameElement = document.createElement("h4");
    nameElement.textContent =  teamMembers[memberIndex].name;
    const titleElement = document.createElement("p");
    titleElement.textContent = teamMembers[memberIndex].title;
    const description =  document.createElement("p");
    description.className = "hidden bio";
    description.textContent = teamMembers[memberIndex].description;
    const emailElement = document.createElement("p");
    emailElement.className = "hidden email";
    emailElement.textContent = teamMembers[memberIndex].email;
    const actionButtons = document.createElement("div");
    actionButtons.className = "action-buttons";
    const hideButton = document.createElement("button");
    hideButton.textContent = "Hide";
    hideButton.className = "hide";
    const showButton = document.createElement("button");
    showButton.textContent = "Show details";
    showButton.className = "show";
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    actionButtons.appendChild(hideButton);
    actionButtons.appendChild(showButton);
    actionButtons.appendChild(editButton);
    teamContent.appendChild(nameElement);
    teamContent.appendChild(titleElement);
    teamContent.appendChild(description);
    teamContent.appendChild(emailElement);
    teamItem.appendChild(teamContent);
    teamItem.appendChild(actionButtons);
    teamFlex.appendChild(teamItem);
    memberIndex ++;
    showButton.addEventListener("click", () => {
      const card = showButton.closest(".team-item");
      const bio = card.querySelector(".bio");
      const email = card.querySelector(".email");
      bio.classList.remove("hidden");
      email.classList.remove("hidden");
    });
    hideButton.addEventListener("click",() =>{
      const card = hideButton.closest(".team-item");
      const bio = card.querySelector(".bio");
      const email = card.querySelector(".email");
      bio.classList.add("hidden");
      email.classList.add("hidden");
  })
}
button.addEventListener('click',createCard);