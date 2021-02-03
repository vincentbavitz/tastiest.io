import React, { useEffect, useState } from 'react';
import {
  InputCardCvv,
  InputCardExpiry,
  InputCardNumber,
} from '../../inputs/card';

export function CheckoutStepPayment() {
  // IF PAYMENT / CONTACT DETAILS ARE VALID, UPDATE THEIR USER FILES

  const [_cardExpiry, _setCardExpiry] = useState('');
  const [_cardNumber, _setCardNumber] = useState('');
  const [_cardCvv, _setCardCvv] = useState('');
  const [_cardHolderName, _setCardHolderName] = useState('');
  const [_postCode, _setPostCode] = useState('');

  const submit = () => {
    null;
  };

  useEffect(() => {
    console.log('CheckoutStepPayment ➡️ _cardNumber:', _cardNumber);
  }, [_cardNumber]);

  return (
    <div>
      <div className="flex flex-col space-y-4">
        <InputCardNumber
          value={_cardNumber}
          onValueChange={value => _setCardNumber(value)}
        />

        <div className="flex w-full space-x-3">
          <InputCardExpiry
            value={_cardExpiry}
            onValueChange={value => _setCardExpiry(value)}
          />
          <InputCardCvv
            value={_cardCvv}
            onValueChange={value => _setCardCvv(value)}
          />
        </div>
      </div>
    </div>
  );
}
