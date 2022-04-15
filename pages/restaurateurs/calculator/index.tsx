import { Layouts } from 'layouts/LayoutHandler';

/**
 * Simply redirect to /restaurateurs.
 */
export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/restaurateurs',
      permanent: false,
    },
  };
};

function CalculatorBlank() {
  return <div></div>;
}

CalculatorBlank.layout = Layouts.BLANK;
export default CalculatorBlank;
