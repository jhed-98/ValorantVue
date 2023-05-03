<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6">
    <h1 class="text-3xl pb-4">Skins Armas</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="bundle in bundles" :key="bundle.uuid">
        <RouterLink
          :to="{ name: 'BundleDetails', params: { uuid: bundle.uuid } }"
        >
          <div
            class="border w-full flex flex-col items-center hover:bg-gray-200 hover:bg-opacity-50"
          >
            <img
              class="img_icon"
              :src="bundle.verticalPromoImage"
              :alt="bundle.displayName"
            />
            <h2 class="text-center text-xl">{{ bundle.displayName }}</h2>
          </div>
        </RouterLink>
      </div>
    </div>

    <nav aria-label="Page navigation example" class="flex justify-center py-12">
      <ul class="inline-flex -space-x-px">
        <li>
          <a
            href="#"
            class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Previous</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >1</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >2</a
          >
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >3</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >4</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >5</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bundles: [],
    };
  },
  created() {
    this.getBundles();
  },
  methods: {
    getBundles() {
      this.axios
        .get("https://valorant-api.com/v1/bundles")
        .then((response) => {
          this.bundles = response.data.data;
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
