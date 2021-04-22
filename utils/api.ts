import { CreateNewOrderReturn } from 'pages/api/payments/createNewOrder';
import { PayReturn } from 'pages/api/payments/pay';
import { UpdateOrderReturn } from 'pages/api/payments/updateOrder';
import { RegisterReturn } from 'pages/api/register';
import { LocalEndpoint } from 'types/api';

// prettier-ignore
type LocalApiPostReturn<T extends LocalEndpoint> =
  T extends LocalEndpoint.PAY ? PayReturn :
  T extends LocalEndpoint.REGISTER ? RegisterReturn :
  T extends LocalEndpoint.CREATE_NEW_ORDER ? CreateNewOrderReturn :
  T extends LocalEndpoint.UPDATE_ORDER ? UpdateOrderReturn :
  never;

/**
 * POSTs to our local API.
 * Response type MUST be FunctionsResponse for the endpoint.
 * Local GET endpoints should ALWAYS use SWR
 */
export class LocalApiPost {
  public static post = async <T extends LocalEndpoint>(
    endpoint: T,
    params: any,
  ): Promise<LocalApiPostReturn<T>> => {
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    };

    try {
      const response = await fetch(endpoint, options);
      const {
        success = false,
        data = null,
        error = null,
      } = await response.json();

      return { success, data, error } as LocalApiPostReturn<T>;
    } catch (error) {
      return { success: false, data: {}, error } as LocalApiPostReturn<T>;
    }
  };
}
