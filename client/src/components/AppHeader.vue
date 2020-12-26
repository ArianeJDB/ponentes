<template>
    <header>
      <ul class="links-list">
        <li class="link-item">
          <router-link to="/" class="link">Home</router-link>
        </li>
        <li class="link-item">
          <router-link to="/my-profile" class="link">Ver mi perfil</router-link>
        </li>
      </ul>
    </header>
</template>
<style scoped>
  header {
    background-color: #008080;
    height: 3rem;
    padding: 1rem;
  }
  .links-list {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .link-item {
    list-style: none;
    margin-right: 1rem;
  }

  .link {
    text-decoration: none;
    color: rgb(12, 12, 12);
  }
</style>
