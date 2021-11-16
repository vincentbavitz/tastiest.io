import { CheckOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
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
      className="w-full md:w-7/12"
      style={{
        minWidth: isDesktop ? `${UI.CHECKOUT_SPLIT_WIDTH_PX}px` : 'unset',
      }}
    >
      <ProgressBar step={step}>
        <CheckCircle complete label="Log in" />
        <CheckCircle complete={step !== CheckoutStep.SIGN_IN} label="Details" />
        <CheckCircle complete={step === CheckoutStep.COMPLETE} label="Done!" />
      </ProgressBar>
    </div>
  );
}

interface CheckCircleProps {
  label: string;
  complete: boolean;
}

function CheckCircle({ label, complete }: CheckCircleProps) {
  return (
    <div className="relative z-10 h-10 flex flex-col justify-center items-center">
      {complete ? (
        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full border-success border-2">
          <CheckOutlined className="text-lg text-success" />
        </div>
      ) : (
        <div className="w-8 h-8 bg-light border-2 border-gray-300 rounded-full"></div>
      )}

      <span
        className={classNames(
          'absolute -bottom-5 whitespace-nowrap',
          complete ? 'text-primary opacity-50' : 'text-gray-300',
          'mt-1 text-sm',
        )}
      >
        {label}
      </span>
    </div>
  );
}

interface ProgressBarProps extends Props {
  children: ReactNode;
}

function ProgressBar({ step, children }: ProgressBarProps) {
  // prettier-ignore
  const transform = 
    step === CheckoutStep.SIGN_IN ? 'translateX(-100%)' :
    step === CheckoutStep.PAYMENT? 'translateX(-50%)' :
    step === CheckoutStep.COMPLETE ? 'translateX(0%)' :
    undefined;

  return (
    <div className="relative h-10">
      <div className="flex items-center justify-start h-10 overflow-hidden">
        <div className="w-full h-0 duration-300 border-b-2 border-gray-300"></div>
      </div>

      <div className="absolute top-0 flex items-center justify-start w-full h-10 overflow-hidden">
        <div
          style={{ transform }}
          className="w-full h-0 duration-300 border-b-2 border-success"
        ></div>
      </div>

      <div className="absolute inset-0 flex w-full h-10 justify-between items-center">
        {children}
      </div>
    </div>
  );
}
