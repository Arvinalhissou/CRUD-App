<template>
  <div>
    <div class="card mb-3" v-for="doc in Projects" :key="doc.key">
      <div class="card-body">
        <h5 class="card-title">{{ doc.title }}</h5>
        <p class="card-text">{{ doc.detail }}</p>

        <router-link
          :to="{ name: 'update', params: { id: doc.key } }"
          class="card-link btn btn-outline-info"
          >Edit Document</router-link
        >
        <button
          @click.prevent="deleteDoc(doc.key)"
          class="card-link btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      Projects: [],
    };
  },
  created() {
    db.collection("project").onSnapshot((snapshotChange) => {
      this.Projects = [];
      snapshotChange.forEach((doc) => {
        this.Projects.push({
          key: doc.id,
          title: doc.data().title,
          detail: doc.data().detail,
        });
      });
    });
  },
  methods: {
    deleteDoc(id) {
      db.collection("project")
        .doc(id)
        .delete()
        .then(() => {
          alert("Project removed");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
