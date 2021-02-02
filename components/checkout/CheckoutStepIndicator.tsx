import classNames from 'classnames';
import { useSelector } from 'react-redux';
import CheckCircleSVG from '../../assets/svgs/checkout/check-circle.svg';
import { CheckoutStep } from '../../state/checkout';
import { IState } from '../../state/reducers';

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
    <div className="flex items-center flex-col z-10">
      {complete ? (
        <CheckCircleSVG className="h-10 bg-white" />
      ) : (
        <div className="rounded-full border-2 border-gray-400 bg-white h-10 w-10"></div>
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
      <div className="absolute flex items-center justify-start w-full h-10 top-0 mx-1 overflow-hidden">
        <div className="h-0 w-full border-b-2 border-gray-400 duration-300"></div>
      </div>
      <div className="absolute flex items-center justify-start w-full h-10 top-0 mx-1 overflow-hidden">
        <div
          style={{ transform }}
          className="h-0 w-full border-b-2 border-primary duration-300"
        ></div>
      </div>
    </>
  );
}
