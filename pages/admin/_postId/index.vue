<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
export default {
  components: { AdminPostForm },
  data() {
    return {
      loadedPost: {
        author: "Lennart",
        title: "My awesome post",
        content: "Super Amazing, thanks for that",
        thumbnailLink:
          "https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
      }
    };
  },
  layout: "admin"
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
