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
    size="large"
    label="Security Code"
    inputClassName="w-full"
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
        customInput={Input}
        value={props.value}
        onValueChange={handleOnChange}
        format="###"
        mask="_"
      />

      <Tooltip content="This is the 3 digit code on the back of your card.">
        <HelpSVG className="h-10 mt-5" />
      </Tooltip>
    </div>
  );
}
