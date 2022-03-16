import { Input, Select } from '@tastiest-io/tastiest-ui';
import { CuisineSymbol, dlog, titleCase } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';

type CuisineKey = CuisineSymbol | 'ALL_FOOD' | 'OTHER';

interface Props {
  initial: CuisineKey;
  initialOther: string | null;
  onChange: (value: any) => void;
}

export default function CuisineSelect(props: Props) {
  const { initial, initialOther } = props;
  const { isMobile, isTablet } = useScreenSize();

  const [selected, setSelected] = useState<CuisineKey>(initial);
  const [other, setOther] = useState<string>(initialOther);

  const mapToFavouriteCuisine = (option: string): any => {
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

  dlog('CuisineSelect ➡️ initial:', initial);
  dlog('CuisineSelect ➡️ !initial?.length:', !initial?.length);

  const onSelect = (id, value) => {
    dlog('CuisineSelect ➡️ id:', id);
    dlog('CuisineSelect ➡️ value:', value);
  };

  const options = [
    ['none', 'None'],
    ...Object.entries(CuisineSymbol).map(([key, value]) => [
      key,
      titleCase(value.replace('_', ' ')),
    ]),
    ['other', 'Other (please specify)'],
  ];

  return (
    <div className="w-64">
      <Select onSelect={onSelect}>
        {options.map(([k, v]) => (
          <Select.Option id={v} key={k} value={v} />
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
