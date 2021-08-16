<template>
  <div>
    <div class="d-flex justify-content-center p-4 mb-3 bg-dark">
      <div>
        <router-link class="nav-link link-light" to="/create">
          Add Document
        </router-link>
      </div>
      <div>
        <router-link class="nav-link link-light" to="/collection">
          Document List
        </router-link>
      </div>
    </div>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
