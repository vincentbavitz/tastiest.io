import classNames from 'classnames';
import { useSelector } from 'react-redux';
import CheckCircleSVG from '../../assets/svgs/checkout/check-circle.svg';
import { IState } from '../../state/reducers';
import { CheckoutStep } from '../../types/checkout';

interface Props {
  step: CheckoutStep;
}

export function CheckoutStepIndicator() {
  const {
    flow: { step },
  } = useSelector((state: IState) => state.checkout);

  return (
    <div className="relative flex items-center justify-between w-full">
      <ProgressBar step={step} />
      <CheckCircle complete label="Log in" />
      <CheckCircle
        complete={step !== CheckoutStep.SIGN_IN}
        label="Details and Checkout"
      />
      <CheckCircle complete={step === CheckoutStep.COMPLETE} label="Done!" />
    </div>
  );
}

interface CheckCircleProps {
  label: string;
  complete: boolean;
}

function CheckCircle({ label, complete }: CheckCircleProps) {
  return (
    <div className="z-10 flex flex-col items-center">
      {complete ? (
        <CheckCircleSVG className="h-10 bg-white" />
      ) : (
        <div className="w-10 h-10 bg-white border-2 border-gray-400 rounded-full"></div>
      )}

      <span
        className={classNames(
          complete ? 'text-primary' : 'text-gray-600',
          'mt-1',
        )}
      >
        {label}
      </span>
    </div>
  );
}

function ProgressBar({ step }: Props) {
  // prettier-ignore
  const transform = 
    step === CheckoutStep.SIGN_IN ? 'translateX(-100%)' :
    step === CheckoutStep.PAYMENT? 'translateX(-50%)' :
    step === CheckoutStep.COMPLETE ? 'translateX(0%)' :
    undefined;

  return (
    <>
      <div className="absolute top-0 flex items-center justify-start w-full h-10 mx-1 overflow-hidden">
        <div className="w-full h-0 duration-300 border-b-2 border-gray-400"></div>
      </div>
      <div className="absolute top-0 flex items-center justify-start w-full h-10 mx-1 overflow-hidden">
        <div
          style={{ transform }}
          className="w-full h-0 duration-300 border-b-2 border-primary"
        ></div>
      </div>
    </>
  );
}
