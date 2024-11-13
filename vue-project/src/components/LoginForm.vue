<script setup lang="js">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleLogin = () => {
  // Add login logic here
  console.log('Logging in with', username.value, password.value)
}
</script>

<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <p class="create-account">
      Don't have an account?
      <RouterLink to="/register">Create an account</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.login-form {
  width: 300px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.login-button:hover {
  background-color: #45a049;
}

.create-account {
  text-align: center;
  margin-top: 1rem;
}

.create-account a {
  color: #007bff;
  text-decoration: none;
}

.create-account a:hover {
  text-decoration: underline;
}
</style>
