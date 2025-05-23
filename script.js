const team = document.querySelector(".team");
const teamFlex = document.querySelector(".team-flex");

//add new team member button
const addMemberButton = document.createElement('button');
addMemberButton.textContent = "Add Team Member";
addMemberButton.className = "add-card-btn";
const addMemberButtonWrapper = document.createElement('div');
addMemberButtonWrapper.className = "button-wrapper";
addMemberButtonWrapper.appendChild(addMemberButton);
team.appendChild(addMemberButtonWrapper);


// fetch team-api
fetch(" https://responsive-team-api.onrender.com/api/members")
.then(response => response.json())
.then(data => {
  console.log(data)
  const initialMembers = data.slice(0,3);
  initialMembers.forEach(function(initialMember){
    createCard(initialMember);
  });
  let remainingMembers = data.slice(3); 

  addMemberButton.addEventListener('click', function () {
  // 從 remainingMembers 拿出第一筆資料
  const nextMember = remainingMembers.shift();

  // 如果有資料就建立卡片
  if (nextMember) {
    createCard(nextMember);
  }

  // 如果已經沒有剩下的人，就把按鈕關掉
  if (remainingMembers.length === 0) {
    addMemberButton.disabled = true;
  }
});
})
.catch(error =>{
  console.error("出錯了", error);
});
//createcard
function createElement(tag,className,textContent){
  const element = document.createElement(tag);
  element.className = className;
  if(textContent){
    element.textContent = textContent;
  }
  return element;
}
// edit button
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
function createCard(member){
    const teamItem = createElement("div","team-item");
    const img = document.createElement('img');
    img.src = member.image;
    img.alt = "Team Member"
    teamItem.appendChild(img)
    const teamContent = createElement("div","team-content");
    const nameElement = createElement("h4","name",member.name);
    const titleElement = createElement("p","title",member.title);
    const description = createElement("p","hidden bio",member.description);
    const emailElement = createElement("p","hidden email",member.email);
    const actionButtons = createElement("div","action-buttons");
    const hideButton = createElement("button","hide","Hide");
    const showButton = createElement("button","show","Show details");
    const editButton = createElement("button","edit","Edit");
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

    // show/hide details button
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