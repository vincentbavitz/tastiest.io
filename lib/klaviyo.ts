import * as Klaviyo from 'node-klaviyo';
import { runOnServer } from '../utils/ssr';

const KlaviyoClient = runOnServer(
  () =>
    new Klaviyo({
      publicToken: process.env.KLAVIYO_PUBLIC_API_KEY,
      privateToken: process.env.KLAVIYO_PRIVATE_API_KEY,
    }),
);

export default KlaviyoClient;
