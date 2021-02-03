import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import HelpSVG from '../../../assets/svgs/checkout/help.svg';
import { Tooltip } from '../../Tooltip';
import { InputAbstract } from '../InputAbstract';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

const Input = (props: Props) => (
  <InputAbstract
    inputMode="decimal"
    type="password"
    size="large"
    label="Security Code"
    externalSuffix={
      <Tooltip content="This is the 3 digit code on the back of your card.">
        <HelpSVG className="h-6" />
      </Tooltip>
    }
    inputClassName="font-mono w-full"
    {...props}
  />
);

export function InputCardCvv(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    props.onValueChange(String(value));
  };

  return (
    <div className="flex items-center space-x-1">
      <NumberFormat
        type="password"
        customInput={Input}
        value={props.value}
        onValueChange={handleOnChange}
        format="###"
      />
    </div>
  );
}
