const CMS = {
  SHORTCODE_REGEX: /\{\{.*\}\}/,
  SHORTCODES: {
    GENERAL_BUTTON: /\{\{[\s]*button[\s]*href="[^"]{1,333}"[\s]*text="[\w\s]{1,33}"[\s]*\}\}/,
  },
  BLOG_RESULTS_PER_PAGE: 20,
  NUM_RECOMMENDED_POSTS: 8,
};

export default CMS;
