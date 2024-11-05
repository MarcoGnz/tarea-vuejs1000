<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-black">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="@/assets/logo.png" alt="Vue logo" width="30" height="30" class="d-inline-block align-top me-2" />
          <span class="text-blue">GESTOR DE TAREAS</span>
        </router-link>

        <button
          type="button"
          @click="toggleNavbar"
          aria-controls="navbarNav"
          :aria-expanded="!isNavbarCollapsed"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="['collapse navbar-collapse', { show: !isNavbarCollapsed }]" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link text-white d-flex align-items-center" to="/addtask">
                <i class="bi bi-plus-circle me-2"></i>Añadir tarea
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white d-flex align-items-center" to="/tasklist">
                <i class="bi bi-card-checklist me-2"></i>Lista de tareas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white d-flex align-items-center" to="/combined">
                <i class="bi bi-bag-check me-2"></i>Vista combinada
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view :tasks="tasks" @add-task="addTask" @delete-task="deleteTask" />
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data() {
    return {
      isNavbarCollapsed: true,
      tasks: [],
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    },
    addTask(newTask) {
      this.tasks.unshift(newTask);
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
/*
    fetchTasks() {
      axios
        .get("https://dummyjson.com/todos")
        .then((response) => {
          this.tasks = response.data.todos.map(task => ({
            ...task,
            completed: task.completed || false,
          }));
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    },*/


  },
  /*
  created() {
    this.fetchTasks();
  },*/

  
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

.navbar {
  margin-bottom: 20px;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-color: #97ffd7;
}

.text-blue {
  color: rgb(0, 255, 251); 
}
</style>
