import dotenv from 'dotenv';
import { CmsApi } from '../../services/cms';

dotenv.config();

describe('CMS Servcice', () => {
  test('Convert post', async () => {
    const cms = new CmsApi();

    const { posts } = await cms.getPosts();

    console.log('cms.test ➡️ posts[0]:', posts[0].restaurant);
    expect(true).toBeDefined();
  });
});
