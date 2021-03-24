import { Input } from '@tastiest-io/tastiest-components';
import { ScreenContext } from 'contexts/screen';
import React, { useContext, useState } from 'react';
import { CuisineSymbol } from 'types/cuisine';
import { TFavouriteCuisine } from 'types/firebase';
import { titleCase } from 'utils/text';
import { Select } from './Select';

type CuisineKey = CuisineSymbol | 'ALL_FOOD' | 'OTHER';
interface ICuisineOption {
  key: CuisineKey;
  label: string;
}

const options: ICuisineOption[] = [
  ...Object.entries(CuisineSymbol).map(([k, v]) => ({
    key: CuisineSymbol[k],
    label: titleCase(v),
  })),
  { key: 'OTHER', label: 'Other (please specify)' },
  { key: 'ALL_FOOD', label: 'I just love food!' },
];

console.log('CuisineSelect ➡️ options:', options);

interface Props {
  initial: CuisineKey;
  initialOther: string | null;
  onChange: (value: TFavouriteCuisine) => void;
}

export default function CuisineSelect(props: Props) {
  const { initial, initialOther } = props;
  const { isMobile, isTablet } = useContext(ScreenContext);

  const [selected, setSelected] = useState<CuisineKey>(initial);
  const [other, setOther] = useState<string>(initialOther);

  const mapToFavouriteCuisine = (option: string): TFavouriteCuisine => {
    if (CuisineSymbol[option.toUpperCase()]) {
      return { existing: CuisineSymbol[option.toUpperCase()], other: null };
    }

    if (option === 'ALL_FOOD') {
      return { existing: 'ALL_FOOD', other: null };
    }

    // Must have selected OTHER
    return { existing: null, other };
  };

  const handleOnChange = (selected: string) => {
    setSelected(selected as CuisineKey);
    props.onChange(mapToFavouriteCuisine(selected));
  };

  console.log('CuisineSelect ➡️ initial:', initial);
  console.log('CuisineSelect ➡️ !initial?.length:', !initial?.length);

  return (
    <div className="w-64">
      <Select
        noDefault={!initial?.length}
        defaultSelected={!initial?.length}
        onChange={handleOnChange}
      >
        {options.map(option => (
          <option
            key={option.key}
            value={option.key}
            selected={initial === option.key}
          >
            {option.label}
          </option>
        ))}
      </Select>
      {selected === 'OTHER' && (
        <div className="w-full mt-4">
          <Input
            placeholder="Please specify"
            value={other ?? ''}
            onValueChange={setOther}
            onChange={() => handleOnChange(selected)}
            maxLength={30}
          />
        </div>
      )}
    </div>
  );
}
