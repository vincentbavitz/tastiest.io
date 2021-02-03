import React, { useEffect, useState } from 'react';
import { CardBrand } from '../../../types/checkout';
import { PaymentEngine } from '../../../utils/payment';
import {
  InputCardCvv,
  InputCardExpiry,
  InputCardNumber,
} from '../../inputs/card';
import { InputCardPostcode } from '../../inputs/card/InputCardPostcode';
import { InputContactBirthday } from '../../inputs/contact/InputContactBirthday';
import { InputContactFirstName } from '../../inputs/contact/InputContactFirstName';
import { InputContactLastName } from '../../inputs/contact/InputContactLastName';
import { CheckoutTabs } from '../CheckoutTabs';

export function CheckoutStepPayment() {
  // IF PAYMENT / CONTACT DETAILS ARE VALID, UPDATE THEIR USER FILES

  // Payment
  const [_cardExpiry, _setCardExpiry] = useState('');
  const [_cardNumber, _setCardNumber] = useState('');
  const [_cardCvv, _setCardCvv] = useState('');
  const [_cardHolderName, _setCardHolderName] = useState('');
  const [_cardPostcode, _setCardPostcode] = useState('');
  const [cardBrand, setCardBrand] = useState<CardBrand | undefined>(undefined);

  // Contact
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');

  const submit = () => {
    null;
  };

  const onCardNumberChange = (value: string) => {
    _setCardNumber(value);
    setCardBrand(PaymentEngine.getCardBrand(value));
  };

  useEffect(() => {
    console.log('CheckoutStepPayment ➡️ cardBrand:', cardBrand);
    console.log('CheckoutStepPayment ➡️ _cardNumber:', _cardNumber);
  }, [cardBrand, _cardNumber, firstName]);

  return (
    <div className="flex flex-col pb-24 space-y-16">
      <div className="">
        <CheckoutTabs tabs={[{ label: 'Contact Details' }]} />

        <div className="flex flex-col space-y-4">
          <InputContactFirstName
            value={firstName}
            onValueChange={value => setFirstName(value)}
          />

          <InputContactLastName value={lastName} onValueChange={setLastName} />

          <InputContactBirthday
            value={birthday}
            onValueChange={value => setBirthday(value)}
          />
        </div>
      </div>

      <div>
        <CheckoutTabs tabs={[{ label: 'Payment' }]} />

        <div className="flex flex-col space-y-4">
          <InputCardNumber
            value={_cardNumber}
            onValueChange={onCardNumberChange}
          />

          <div className="flex w-full space-x-3">
            <InputCardExpiry
              value={_cardExpiry}
              onValueChange={_setCardExpiry}
            />
            <InputCardCvv value={_cardCvv} onValueChange={_setCardCvv} />
          </div>

          <InputCardPostcode
            value={_cardPostcode}
            onValueChange={_setCardPostcode}
          />
        </div>
      </div>
    </div>
  );
}
