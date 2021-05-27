angular.module("todoApp", []).controller("TodoListController", function () {
  let todoList = this;
  todoList.todos = [
    { text: "learn AngularJS", done: true },
    { text: "build an AngularJS app", done: false },
    { text: "get hype about AngularJS", done: true },
  ];

  let images = this;
  images.img = [
    { name: "cross", src: "/assets/images/icon-cross.svg" },
    { name: "check", src: "/assets/images/icon-check.svg" },
    { name: "sun", src: "/assets/images/icon-sun.svg" },
    { name: "moon", src: "/assets/images/icon-moon.svg" },
  ];
  todoList.addTodo = function () {
    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = "";
    console.log("hi");
  };

  todoList.remaining = function () {
    let count = 0;
    angular.forEach(todoList.todos, function (todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function () {
    let oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, function (todo) {
      if (!todo.done) todoList.todos.push(todo);
    });
    console.log(todoList.todos);
    console.log(oldTodos);
  };
  todoList.showAll = function () {
    let toDos = todoList.todos;
    return toDos;
    //     [...document.querySelectorAll(".completed")].forEach(
    //       (todoItem) => (todoItem.style.display = "none")
    //     );
  };

  todoList.showActive = function () {
    console.log("hi");
    let toDos = todoList.todos;
    let active = toDos.filter((item) => {
      return item.done === false;
    });
    // active = todoList.todos;
    console.log(active);
    console.log(toDos);
    return active;
  };

  todoList.showCompleted = function () {
    let toDos = todoList.todos;
    return toDos.done;
  };
});

// angular.module("app", []);
// app.controller("con", function ($scope) {
//   $scope.class = "red";
//   $scope.changeClass = function () {
//     if ($scope.class === "red") $scope.class = "blue";
//     else $scope.class = "red";
//   };
// });
