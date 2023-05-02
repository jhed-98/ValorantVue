<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6">
    <h1 class="text-3xl pb-4">
      Detalle de Agente: {{ agentDetails.displayName }}
    </h1>
    <div style="display: flex; justify-content: center">
      <figure
        :style="{ 'background-image': 'url(' + agentDetails.background + ')' }"
        class="figure_agent"
      >
        <img
          class="img_agent"
          :src="agentDetails.displayIcon"
          :alt="agentDetails.displayName"
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
      agentDetails: [],
    };
  },
  created() {
    this.getAgentDetails();
  },
  methods: {
    getAgentDetails() {
      this.axios
        .get("https://valorant-api.com/v1/agents/" + this.uuid)
        .then((response) => {
          this.agentDetails = response.data.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.figure_agent {
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  justify-content: center;
}
.img_agent {
  width: 10rem;
}
</style>
