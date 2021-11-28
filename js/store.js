export const store = {
  state: {
    countPage: 0,
    pageNumber: 1,
    isFetching: false,
    arrDataTable: null,
  },
  getState: function () {
    return this.state;
  },
  changeCountPage: function (num) {
    this.state.countPage = Math.ceil(num / 10);
  },
  changePageNumber: function (num) {
    this.state.pageNumber = num;
  },
  toggleIsFetching: function (num) {
    this.state.isFetching ? (this.state.isFetching = false) : (this.state.isFetching = true);
  },
  changeDataTable: function (arr) {
    this.state.arrDataTable = arr;
  },
};
