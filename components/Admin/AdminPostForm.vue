<template>
  <form @submit.prevent="OnSave">
    <app-control-input v-model="editedPost.author">
      Author Name
    </app-control-input>
    <app-control-input v-model="editedPost.title">
      Title
    </app-control-input>
    <app-control-input v-model="editedPost.thumbnail">
      Thumbnail Link
    </app-control-input>
    <app-control-input control-type="textarea" v-model="editedPost.content">
      Content
    </app-control-input>
    <app-control-input control-type="textarea" v-model="editedPost.previewText">
      Preview Text
    </app-control-input>

    <app-button type="submit">Save</app-button>

    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="OnCancel"
    >
      Cancel
    </app-button>
  </form>
</template>

<script>
import AppButton from "~/components/UI/AppButton.vue";
import AppControlInput from "~/components/UI/AppControlInput.vue";
export default {
  components: { AppControlInput, AppButton },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    OnSave() {
      this.$emit("submit", this.editedPost);
    },
    OnCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style lang="scss" scoped></style>
