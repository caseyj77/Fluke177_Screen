<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <div class="container">
    <aside>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/multimeter">Multimeter</RouterLink>
    </aside>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Reset for body and container */
body,
.container {
  margin: 0;
  padding: 0;
  display: flex;
}

/* Header styling */
header {
  background-color: #e6a459;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
}

nav {
  display: flex;
  gap: 1rem;
  padding-right: 1rem; /* Adds padding to avoid overflow */
  max-width: calc(100% - 1rem); /* Ensures links don’t overflow on smaller screens */
  box-sizing: border-box;
  overflow: hidden;
}

/* Aside styling */
aside {
  width: 75px;
  background-color: #e6a459;
  padding: 1rem 0;
  position: fixed;
  top: 50px; /* Adjust to match header height */
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column; /* Stacks links vertically */
  align-items: center;
  text-align: center;
  gap: 1rem; /* Adds space between links */
}
/* Main content styling */
main {
  margin-left: 75px; /* Offset main content to account for aside width */
  padding: 1rem;
  flex: 1;
  margin-top: 64px; /* Offset to match header height */
}

/* Link styling */
a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  color: #0056b3;
}
</style>
