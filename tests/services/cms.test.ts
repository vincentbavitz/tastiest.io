import { CmsApi } from 'services/cms';

describe('CMS Servcice', () => {
  test('Convert post', async () => {
    const cms = new CmsApi();

    const posts = await cms.fetchBlogEntries();

    console.log('cms.test ➡️     posts:', posts);

    expect(true).toBeDefined();
  });
});
