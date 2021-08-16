<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group mb-3">
        <label><strong>Title</strong></label>
        <input
          type="text"
          class="form-control"
          v-model="project.title"
          required
        />
      </div>

      <div class="form-group">
        <label><strong>Details</strong></label>
        <textarea
          class="form-control"
          rows="4"
          cols="20"
          v-model="project.detail"
          required
        ></textarea>
      </div>

      <div class="d-grid mt-3">
        <button class="btn btn-danger btn-block">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      project: {},
    };
  },
  created() {
    let routeId = db.collection("project").doc(this.$route.params.id);
    routeId
      .get()
      .then((res) => {
        this.project = res.data();
      })
      .catch((err) => {
        alert(err);
      });
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      db.collection("project")
        .doc(this.$route.params.id)
        .update(this.project)
        .then(() => {
          this.$router.push("/collection");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
