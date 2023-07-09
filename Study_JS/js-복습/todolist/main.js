/*
체크버튼을 클릭하는 순간  true를 false로 바꿔준다
true이면 끝난걸로 간주하고 밑줄
false이면 안끝난걸로 간주하고 그래도 보여준다
*/
let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let taskList = [];
let tabs = document.querySelectorAll(".task-tabs div");
let mode = "all";
let filterList = [];

addBtn.addEventListener("click", addTask);
//시작을 1부터하는 이유는  0번째는 언더라인이기떄문
for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    filter(e);
  });
}

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
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "ing" || mode == "done") {
    list = filterList;
  }

  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
          <div class="task-done">${list[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${list[i].id}')">check</button>
            <button onclick="deleteTask('${list[i].id}')">delete</button>
          </div>
        </div>`;
    } else {
      resultHTML += ` <div class="task">
        <div>${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">check</button>
          <button onclick="deleteTask('${list[i].id}')">delete</button>
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

function filter(e) {
  mode = e.target.id;
  filterList = []; //지역변수

  document.getElementById("under-line").style.width =
    e.target.offsetWidth + "px";
  document.getElementById("under-line").style.top =
    e.target.offsetTop + e.target.offsetHeight + "px";
  document.getElementById("under-line").style.left = e.target.offsetLeft + "px";
  if (mode == "all") {
    render();
  } else if (mode == "ing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }

  console.log(filterList);
}

//랜덤 아이디 함수
function randomIdGenerate() {
  return "-" + Math.random().toString(36).substr(2, 9);
}
