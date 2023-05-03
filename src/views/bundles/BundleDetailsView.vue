<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6">
    <h1 class="text-3xl pb-4">
      Detalle de Pack Skin: {{ bundleDetails.displayName }}
    </h1>
    <div style="display: flex; justify-content: center">
      <figure>
        <img
          class="img_agent"
          :src="bundleDetails.displayIcon"
          :alt="bundleDetails.displayName"
        />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: ["uuid"],
  data() {
    return {
      bundleDetails: [],
    };
  },
  created() {
    this.getBundleDetails();
  },
  methods: {
    getBundleDetails() {
      this.axios
        .get("https://valorant-api.com/v1/bundles/" + this.uuid)
        .then((response) => {
          this.bundleDetails = response.data.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
