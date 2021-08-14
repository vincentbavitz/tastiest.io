import { CheckCircleIcon } from '@tastiest-io/tastiest-icons';
import classNames from 'classnames';
import { useScreenSize } from 'hooks/useScreenSize';
import { CheckoutStep } from 'state/checkout';
import { UI } from '../../constants';

interface Props {
  step: CheckoutStep;
}

export function CheckoutStepIndicator({ step }: Props) {
  const { isDesktop } = useScreenSize();

  return (
    <div
      className="w-full tablet:w-7/12"
      style={{
        minWidth: isDesktop ? `${UI.CHECKOUT_SPLIT_WIDTH_PX}px` : 'unset',
      }}
    >
      <div className="relative flex items-center justify-between w-full">
        <ProgressBar step={step} />
        <CheckCircle complete label="Log in" />
        <CheckCircle complete={step !== CheckoutStep.SIGN_IN} label="Details" />
        <CheckCircle complete={step === CheckoutStep.COMPLETE} label="Done!" />
      </div>
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
        <CheckCircleIcon className="h-8 bg-white fill-current text-primary" />
      ) : (
        <div className="w-8 h-8 bg-white border-2 border-gray-400 rounded-full"></div>
      )}

      <span
        className={classNames(
          complete ? 'text-primary' : 'text-gray-600',
          'mt-1 text-sm mobile:text-base',
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
      <div
        style={{
          left: '1.1rem',
          right: '1.25rem',
          height: '2.15rem',
        }}
        className="absolute top-0 flex items-center justify-start h-10 overflow-hidden"
      >
        <div className="w-full h-0 duration-300 border-b-2 border-gray-400"></div>
      </div>
      <div
        style={{
          left: '1.1rem',
          right: '1.5rem',
          height: '2.15rem',
        }}
        className="absolute top-0 flex items-center justify-start mx-1 overflow-hidden"
      >
        <div
          style={{ transform }}
          className="w-full h-0 duration-300 border-b-2 border-primary"
        ></div>
      </div>
    </>
  );
}
