export const useCategoriesStore = defineStore({
  id: "categoriesStore",
  state: () => ({
    categories:[]
  }),
  actions: {
    setCategories(data) {
      this.categories = data;
    },
  },
  getters: {
    hasCategories: (state) => state.categories.length > 0,
    Categories: (state) => state.categories,
  },
});
