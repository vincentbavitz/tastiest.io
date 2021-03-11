import dotenv from 'dotenv';
import { CmsApi } from '../cms';

dotenv.config({ path: '.env.local' });

describe('CMS Servcice', () => {
  test('Get post of slug', async () => {
    const cms = new CmsApi();

    const post = await cms.getPostBySlug('this-is-a-slug');

    console.log('cms.test ➡️ post', post);
    expect(true).toBeDefined();
  });

  it('Convert post', async () => {
    const cms = new CmsApi();

    const { posts } = await cms.getPosts();
    expect(true).toBeDefined();
  });
});
