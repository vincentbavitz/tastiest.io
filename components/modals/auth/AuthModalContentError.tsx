import { RightOutlined } from '@ant-design/icons';
import { Tooltip } from '@tastiest-io/tastiest-ui';
import { AuthError } from 'contexts/auth';
import React from 'react';

export const ContentError = ({ error }: { error: AuthError }) => {
  if (!error) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-center w-full h-px -mt-4">
        <Tooltip
          show={true}
          trigger="manual"
          placement="bottom"
          content={
            <div
              style={{ maxWidth: '400px' }}
              className="flex items-center text-white"
            >
              <RightOutlined className="pr-1 -mt-1 text-secondary" />{' '}
              {error.userFacingMessage ?? error.message}
            </div>
          }
        >
          <div className="w-px h-px"></div>
        </Tooltip>
      </div>
    </div>
  );
};
