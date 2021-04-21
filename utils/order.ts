import { IOrder } from '@tastiest-io/tastiest-utils';
import { LocalEndpoint } from 'types/api';
import { LocalApi } from './api';

export default class Order {
  private token: string;
  public details: Partial<IOrder>;

  constructor(orderToken) {
    this.token = orderToken;
  }

  public async setHeads(heads: number) {
    // Set heads on DB
    const { success, error } = await LocalApi.post(LocalEndpoint.UPDATE_ORDER, {
      heads,
    });

    // Set heads on local object
    if (success) {
      this.details.heads = heads;
    }

    return { success, error };
  }

  public async setPromoCode(code: string) {
    null;
  }

  public async clearPromoCode() {
    null;
  }

  public async pay(paymentMethod: string) {
    null;
  }
}
