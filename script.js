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

// edit button
const editbtns = document.querySelectorAll(".edit");
//定義一個通用函式：將文字元素轉換為輸入欄位
// const nameInput = document.createElement("input");
// nameInput.value =  name.textContent;
// nameInput.className = "name-input";
// const nameparent = name.parentNode;
// nameparent.replaceChild(nameInput,name);
function replaceWithInput(originalEl, type, newClass) {
  let inputElement;
  
  // 決定要建立 input 還是 textarea
  if (type === "textarea") {
    inputElement = document.createElement("textarea");
  } else {
    inputElement = document.createElement("input");
  }

  // 將原本的文字內容放進輸入欄
  inputElement.value = originalEl.textContent;

  // 加上指定的 class 名稱
  inputElement.className = newClass;

  // 把舊元素替換成新輸入欄
  const parent = originalEl.parentNode;
  parent.replaceChild(inputElement, originalEl);
}

//  const nameInput = card.querySelector(".name-input");
//   const nameP = document.createElement("p");
//   nameP.textContent = nameInput.value
//   nameP.className = "name";
//   const nameparent = nameInput.parentNode;
//   nameparent.replaceChild(nameP,nameInput);
function  replaceWithText(inputEl, newClass){
  let inputText;
  inputText = document.createElement("p");
  inputText.textContent = inputEl.value;
  inputText.className = newClass;
  const parent = inputEl.parentNode;
  parent.replaceChild(inputText,inputEl)
}
editbtns.forEach(editbtn =>{
  editbtn.addEventListener("click", () =>{
    const card = editbtn.closest(".team-item");
    const name = card.querySelector(".name");
    const title = card.querySelector(".title");
    const bio = card.querySelector(".bio");
    const email = card.querySelector(".email");

    //edit 跟 save 的按鈕文字轉換
    if(editbtn.textContent === "Edit"){

      replaceWithInput(name, "input", "name-input");
      replaceWithInput(title, "input", "title-input");
      replaceWithInput(bio, "textarea", "bio-input");
      replaceWithInput(email, "input", "email-input");

      editbtn.textContent = "Save";
    }else{
      const nameInput = card.querySelector(".name-input");
      const titleInput = card.querySelector(".title-input");
      const bioInput = card.querySelector(".bio-input");
      const emailInput = card.querySelector(".email-input");
      replaceWithText(nameInput,"name");
      replaceWithText(titleInput,"title");
      replaceWithText(bioInput,"bio");
      replaceWithText(emailInput,"email");
      editbtn.textContent = "Edit";
    }
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
    nameElement.className = "name";
    const titleElement = document.createElement("p");
    titleElement.textContent = teamMembers[memberIndex].title;
    titleElement.className = "title";
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
  });
    editButton.addEventListener("click", () =>{
      const card = editButton.closest(".team-item");
      const name = card.querySelector(".name");
      const title = card.querySelector(".title");
      const bio = card.querySelector(".bio");
      const email = card.querySelector(".email");

      //edit 跟 save 的按鈕文字轉換
      if(editButton.textContent === "Edit"){

        replaceWithInput(name, "input", "name-input");
        replaceWithInput(title, "input", "title-input");
        replaceWithInput(bio, "textarea", "bio-input");
        replaceWithInput(email, "input", "email-input");

        editButton.textContent = "Save";
      }else{
        const nameInput = card.querySelector(".name-input");
        const titleInput = card.querySelector(".title-input");
        const bioInput = card.querySelector(".bio-input");
        const emailInput = card.querySelector(".email-input");
        replaceWithText(nameInput,"name");
        replaceWithText(titleInput,"title");
        replaceWithText(bioInput,"bio");
        replaceWithText(emailInput,"email");
        editButton.textContent = "Edit";
      }
    })
}
button.addEventListener('click',createCard);