<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6">
    <h1 class="text-3xl pb-4">Lista de agentes</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="agent in agents" :key="agent.uuid">
        <RouterLink
          :to="{ name: 'AgentDetails', params: { uuid: agent.uuid } }"
        >
          <div
            class="border w-full flex flex-col items-center hover:bg-gray-200 hover:bg-opacity-50"
          >
            <img
              class="img_icon"
              :src="agent.displayIconSmall"
              :alt="agent.displayName"
            />
            <h2 class="text-center text-xl">{{ agent.displayName }}</h2>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agents: [],
    };
  },
  created() {
    this.getAgents();
  },
  methods: {
    getAgents() {
      this.axios
        .get("https://valorant-api.com/v1/agents")
        .then((response) => {
          this.agents = response.data.data;
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
.img_icon {
  width: 6rem;
  padding: 0.5rem;
}
ul {
  list-style: none;
}
</style>
