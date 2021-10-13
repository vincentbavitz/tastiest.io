import { Button } from '@tastiest-io/tastiest-components';
import React from 'react';

type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'light';

export const getServerSideProps = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const colors = [
  'primary' as ButtonColor,
  'secondary' as ButtonColor,
  'danger' as ButtonColor,
  'success' as ButtonColor,
  'light' as ButtonColor,
];

const Design = () => {
  return (
    <div className="p-20">
      <h3 className="text-xl text-primary mb-6 font-medium w-full border-b-2 border-primary">
        Buttons
      </h3>

      <div className="flex flex-col space-y-6">
        <div className="flex space-x-6">
          {colors.map((color, key) => (
            <div key={key} className="flex flex-col space-y-6">
              <Button color={color} size="large">
                Button
              </Button>
              <Button color={color}>Button</Button>
              <Button color={color} size="small">
                Button
              </Button>
              <Button color={color} size="tiny">
                Button
              </Button>
            </div>
          ))}
        </div>

        <div className="flex space-x-6">
          {colors.map((color, key) => (
            <div key={key} className="flex flex-col space-y-6">
              <Button color={color} type="outline" size="large">
                Button
              </Button>
              <Button color={color} type="outline">
                Button
              </Button>
              <Button color={color} type="outline" size="small">
                Button
              </Button>
              <Button color={color} type="outline" size="tiny">
                Button
              </Button>
            </div>
          ))}
        </div>

        <div className="flex space-x-6">
          {colors.map((color, key) => (
            <div key={key} className="flex flex-col space-y-6">
              <Button color={color} type="text" size="large">
                Button
              </Button>
              <Button color={color} type="text">
                Button
              </Button>
              <Button color={color} type="text" size="small">
                Button
              </Button>
              <Button color={color} type="text" size="tiny">
                Button
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
