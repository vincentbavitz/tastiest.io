import { dlog } from '@tastiest-io/tastiest-utils';
import { CreateNewOrderReturn } from 'pages/api/payments/createNewOrder';
import { UpdateOrderReturn } from 'pages/api/payments/updateOrder';
import { RegisterReturn } from 'pages/api/register';
import { LocalEndpoint } from 'types/api';

// prettier-ignore
type LocalApiReturn<T extends LocalEndpoint> =
  T extends LocalEndpoint.REGISTER ? RegisterReturn :
  T extends LocalEndpoint.CREATE_NEW_ORDER ? CreateNewOrderReturn :
  T extends LocalEndpoint.UPDATE_ORDER ? UpdateOrderReturn :
  never;

export class LocalApi {
  /**
   * POSTs to our local API.
   * Response type MUST be FunctionsResponse for the endpoint.
   */
  public static post = async <T extends LocalEndpoint>(
    endpoint: T,
    params: any,
  ): Promise<LocalApiReturn<T>> => {
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

      return { success, data, error } as LocalApiReturn<T>;
    } catch (error) {
      return { success: false, data: {}, error } as LocalApiReturn<T>;
    }
  };

  /**
   * GETs a value from our local API.
   * Response type MUST be FunctionsResponse for the endpoint.
   */
  public static get = async <T extends LocalEndpoint>(
    endpoint: T,
    params: Record<string, string>,
  ): Promise<LocalApiReturn<T>> => {
    const baseUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://tastiest.io';

    try {
      const queries = Object.entries(params).map(
        ([key, value]) => `${encodeURI(key)}=${encodeURI(value)}`,
      );

      const uri = `${baseUrl}${endpoint}?${queries.join('&')}`;
      dlog('api ➡️ uri:', uri);

      const response = await fetch(uri);
      const json = await response.json();

      dlog('api ➡️ response:', response);

      const { success = false, data = {}, error = null } = json;

      return { success, data, error } as LocalApiReturn<T>;
    } catch (error) {
      return { success: false, data: {}, error } as LocalApiReturn<T>;
    }
  };
}
