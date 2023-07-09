/*
체크버튼을 클릭하는 순간  true를 false로 바꿔준다
true이면 끝난걸로 간주하고 밑줄
false이면 안끝난걸로 간주하고 그래도 보여준다
*/
let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIdGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

//그리는 함수
function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
          <div class="task-done">${taskList[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${taskList[i].id}')">check</button>
            <button onclick="deleteTask('${taskList[i].id}')">delete</button>
          </div>
        </div>`;
    } else {
      resultHTML += ` <div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">check</button>
          <button onclick="deleteTask('${taskList[i].id}')">delete</button>
        </div>
      </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

//할일 체크
function toggleComplete(id) {
  //어떤 아이템을 체크해야했는지 모르기때문에
  //   console.log("id", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      //   taskList[i].isComplete = true;
      //현재value의 반대편 값을 가지고 오게끔 만들기(true/false)
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  //값 뿐만아니라 ui도 바꿔주기 위해서 호출
  render();
  console.log(taskList);
}

//삭제
function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
  console.log(taskList);
}

//랜덤 아이디 함수
function randomIdGenerate() {
  return "-" + Math.random().toString(36).substr(2, 9);
}
