import { FunctionsResponse, postFetch } from '@tastiest-io/tastiest-utils';
import { useState } from 'react';

type UsePostFetchOptions = {
  retries?: number;
};

/** A hook based implementation of postFetch.
 *  Consider this the POST equivalent to useSWR.
 *  The type `Params` will dictate the params type fed into `execute`.
 *  The type `Response` will feed into the response type of `execute`.
 *  The function `execute` is a wrapper around postFetch and has the same type.
 */
const usePostFetch = <Params = any, Response = any, TError = string>(
  endpoint: string,
  options?: UsePostFetchOptions,
) => {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<FunctionsResponse<Response, TError>>(
    null,
  );

  // Call this when you want to send your post fetch
  const execute = async (params: Params) => {
    if (options?.retries > 0) {
      // Attempt multiple tiems if required
      for (let attempts = 0; attempts < options.retries; attempts++) {
        const _result = await call(params);
        if (_result) {
          return _result;
        }
      }
    }

    return call(params);
  };

  // Call internally
  const call = async (params: Params) => {
    setSubmitting(true);

    const _result = await postFetch<Params, Response, TError>(endpoint, params);
    setSubmitting(false);
    setResult(_result);

    return _result;
  };

  return {
    execute,
    submitting,
    success: result?.success ?? null,
    error: result?.error ?? null,
    data: result?.data ?? null,
  };
};

export default usePostFetch;
