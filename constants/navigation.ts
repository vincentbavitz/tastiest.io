const NAVIGATION = {
  SUGGEST_DISH_RENDER_PAGES: /^/,
  // Manually trigger when the page is loaded.
  // isPageLoading will still automatically set to true.
  // Good for tapping into onLoad events.
  MANUAL_LOADING_TRIGGER_FOR_PATHS: [
    /^\/\[city\]\/\[cuisine\]\/?[^[\]]*$/i, // cuisine page
  ],
};

export default NAVIGATION;
