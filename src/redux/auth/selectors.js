export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectRefresh = (state) => state.auth.isRefreshing;
export const selectUser = (state) => state.auth.user;
