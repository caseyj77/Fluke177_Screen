<script setup lang="js"></script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First Row, Cell 1</td>
          <td>First Row, Cell 2</td>
        </tr>
        <tr>
          <td>Second Row, Cell 1</td>
          <td>Second Row, Cell 2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
  text-align: left;
}
</style>
