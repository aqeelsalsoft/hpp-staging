export const useGlobalStore = defineStore({
  id: "GlobalStore",
  state: () => ({
    firstPageUrl:'',
    isModalShow:false,
    isModalImage:null,
  }),
  actions: {
    setFirstPageUrl(data) {
      this.firstPageUrl = data;
    },
    setIsModalShow(data) {
      this.isModalShow = data;
    },
    setIsModalImage(data) {
      this.isModalImage = data;
    },
  },
  getters: {
    FirstPageUrl: (state) => state.firstPageUrl,
    IsModalShow: (state) => state.isModalShow,
    IsModalImage: (state) => state.isModalImage,
  },
});
