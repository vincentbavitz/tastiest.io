import { BulbOutlined, CalculatorOutlined } from '@ant-design/icons';
import { Media } from '@tastiest-io/tastiest-horus';
import { Input } from '@tastiest-io/tastiest-ui';
import { CmsApi, formatCurrency } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import { Slider } from 'rsuite';

type RestaurateurCalcBuilder = {
  restaurantName: string;
  restaurantLogo: Media;
  availableCovers: number;
  coversDuringQuietTimes: number;
  highPayingCovers: number;
  repeatHighPayingCustomers: number;
  avgPricePerExperience: number;
  isLogoDark: boolean;
  slug: string;
};

const getCalculatorBuilders = async () => {
  const cms = new CmsApi();

  const entries = await cms.client.getEntries<RestaurateurCalcBuilder>({
    content_type: 'restaurateurCalculator',
  });

  return entries.items.map(i => ({
    ...i.fields,
    restaurantLogo: cms.convertImage((i.fields.restaurantLogo as any).fields),
  }));
};

const getCalculatorBuilderBySlug = async (slug: string) => {
  const cms = new CmsApi();
  const entries = await cms.client.getEntries<RestaurateurCalcBuilder>({
    content_type: 'restaurateurCalculator',
    'fields.slug[in]': slug,
  });

  if (entries?.items?.length > 0) {
    const item = entries.items[0];
    return {
      ...item.fields,
      restaurantLogo: cms.convertImage(
        (item.fields.restaurantLogo as any).fields,
      ),
    };
  }

  return null;
};

/**
 * Get the corresponding data for this slug from Contentful
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getCalculatorBuilders();
  const paths = items.map(item => ({
    params: {
      calculator: item.slug,
    },
  }));

  // Blocking ensures that if the path isn't cached,
  // we build it before serving.
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>,
) => {
  const item = await getCalculatorBuilderBySlug(
    String(context.params.calculator),
  );

  return {
    props: { ...item },
    revalidate: 360,
  };
};

const DAYS_IN_WEEK = 7;
const WEEKS_IN_A_MONTH = 4;
const WEEKS_IN_A_YEAR = 52;

function RestaurateurCalculator(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { isHuge } = useScreenSize();

  // All percentages are represented as a decimal until rendering
  const [highPayingCustomersPc, setHighPayingCustomersPc] = useState(0.7);
  const [maxSeatableCovers, setMaxSeatableCovers] = useState(100);
  const [coversPerWeek, setCoversPerWeek] = useState(300);
  const [coversPerQuietDay, setCoversPerQuietDay] = useState(30);
  const [quietDaysPerWeek, setQuietDaysPerWeek] = useState(4);

  const [tableTurnsPerDay, setTableTurnsPerDay] = useState(4);
  const [
    highPayingCustomersReturnPc,
    setHighPayingCustomersReturnPc,
  ] = useState(0.2);

  // How much does the average high paying customer spend?
  const [avgHighPayingPrice, setAvgHighPayingPrice] = useState(60);

  // Let’s say that only 25% of people scan the code. 25% of 25%.
  const QR_CODE_SCANS_PC = 0.25;

  // Tastiest will bring back 25% of the people that scan the QR code.
  const QR_RETURN_CUSTOMERS = 0.25;

  const potentialReturnHighPayingCustomers =
    highPayingCustomersPc * coversPerWeek;

  const extraCoversPerWeek =
    potentialReturnHighPayingCustomers * QR_CODE_SCANS_PC;

  const potentialTastiestQrReturnCustomers =
    extraCoversPerWeek * QR_RETURN_CUSTOMERS;

  // Now we calculate how much they can make using Tastiest in a (what time period?).
  const potentialExtraRevenueWithTastiest =
    potentialTastiestQrReturnCustomers * avgHighPayingPrice;

  // Missing out on high paying customers from the % of the high paying customers that come back.

  return (
    <div className="pt-12 pb-20">
      <div className="flex justify-center mb-6">
        <Image
          src={props.restaurantLogo.url}
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>

      <h1 className="font-primary text-center font-medium text-3xl text-primary mb-12">
        Let's see what Tastiest can do for {props.restaurantName}.
      </h1>

      <Contained>
        <div
          className={clsx(
            'flex gap-10 w-full',
            isHuge ? 'flex-row justify-center' : 'flex-col items-center',
          )}
        >
          <div className="flex flex-col items-center gap-12 py-6 w-full">
            <CalcInput
              label="How many covers can you seat?"
              value={maxSeatableCovers}
              setValue={setMaxSeatableCovers}
            />

            <CalcInput
              label="How many covers do you get a week?"
              value={coversPerWeek}
              setValue={setCoversPerWeek}
            />

            <CalcInput
              label="How many covers do you get on quiet days?"
              value={coversPerQuietDay}
              setValue={setCoversPerQuietDay}
            />

            <CalcInput
              label="How many quiet days do you have a week?"
              value={quietDaysPerWeek}
              setValue={setQuietDaysPerWeek}
            />

            <CalcInput
              label="How many times can you turn a table a day?"
              sublabel="Eg. 2x at lunch and 2x at dinner = 4 times a day"
              value={tableTurnsPerDay}
              setValue={setTableTurnsPerDay}
            />

            <div
              style={{ maxWidth: '600px' }}
              className="flex justify-between items-center w-full text-lg border-2 border-gray-200 shadow-md py-6 px-5"
            >
              <BulbOutlined className="text-2xl text-yellow-400" />

              <div>
                {props.restaurantName} operates at{' '}
                {Math.ceil(100 * (coversPerQuietDay / (coversPerWeek / 7)))}%
                capacity on quiet days
              </div>

              <div></div>
            </div>

            <CalcSlider
              label="What percentage of your covers are high paying customers?"
              min={1}
              max={100}
              value={Number((highPayingCustomersPc * 100).toFixed(0))}
              setValue={value => setHighPayingCustomersPc(value / 100)}
              initialValue={Number((highPayingCustomersPc * 100).toFixed(0))}
              formatter={value => `${value}%`}
            />

            <CalcSlider
              label="What percentage of high paying customers come back again?"
              min={1}
              max={100}
              value={Number((highPayingCustomersReturnPc * 100).toFixed(0))}
              setValue={value => setHighPayingCustomersReturnPc(value / 100)}
              initialValue={Number(
                (highPayingCustomersReturnPc * 100).toFixed(0),
              )}
              formatter={value => `${value}%`}
            />

            <CalcInput
              label="Average price per high paying cover"
              value={avgHighPayingPrice}
              setValue={value => setAvgHighPayingPrice(Number(value))}
              prefix={<span className="text-lg">£</span>}
            />
          </div>

          <ResultsColumn
            restaurantName={props.restaurantName}
            potentialTastiestQrReturnCustomers={
              potentialTastiestQrReturnCustomers
            }
            tableTurnsPerDay={tableTurnsPerDay}
            potentialExtraRevenueWithTastiest={
              potentialExtraRevenueWithTastiest
            }
            extraCoversPerWeek={extraCoversPerWeek}
            quietDaysPerWeek={quietDaysPerWeek}
          />
        </div>
      </Contained>
    </div>
  );
}

interface ResultsColumnProps {
  restaurantName: string;
  potentialTastiestQrReturnCustomers: number;
  tableTurnsPerDay: number;
  potentialExtraRevenueWithTastiest: number;
  extraCoversPerWeek: number;
  quietDaysPerWeek: number;
}

const ResultsColumn = (props: ResultsColumnProps) => {
  const {
    restaurantName,
    tableTurnsPerDay,
    quietDaysPerWeek,
    extraCoversPerWeek,
    potentialExtraRevenueWithTastiest,
    potentialTastiestQrReturnCustomers,
  } = props;

  return (
    <div
      style={{ height: 'min-content', maxWidth: '400px' }}
      className="flex flex-col items-center text-center gap-6 pt-6 px-4 text-base bg-white shadow-lg"
    >
      <CalculatorOutlined className="text-3xl text-secondary" />

      <div className="opacity-75">
        After a month working with Tastiest, we estimate that {restaurantName}{' '}
        will get...
      </div>

      <ResultBlock
        label="extra high paying covers per quiet day"
        value={String(Math.ceil(potentialTastiestQrReturnCustomers))}
      />

      <ResultBlock
        label="extra revenue per quiet day"
        value={`£${formatCurrency(
          tableTurnsPerDay * potentialExtraRevenueWithTastiest,
        )}`}
        size="md"
      />

      <ResultBlock
        label="extra covers per week"
        value={String(Math.ceil(extraCoversPerWeek))}
      />

      <div className="border-t w-full"></div>

      <span className="opacity-75">
        At {quietDaysPerWeek} quiet days per week, this amounts to...
      </span>

      <div className="py-2 w-full text-gray-700">
        <div className="font-mono">
          £{formatCurrency(potentialExtraRevenueWithTastiest)} x{' '}
          {quietDaysPerWeek} =
        </div>
        <div className="text-2xl font-thin text-black">
          £
          {formatCurrency(
            tableTurnsPerDay *
              potentialExtraRevenueWithTastiest *
              quietDaysPerWeek,
          )}
        </div>
        <div>extra revenue per week</div>
      </div>

      <div>
        <div style={{ width: '400px' }} className="bg-green-300 py-2 px-4">
          <span className="font-bold">
            £
            {formatCurrency(
              tableTurnsPerDay *
                potentialExtraRevenueWithTastiest *
                quietDaysPerWeek *
                WEEKS_IN_A_MONTH,
            )}
          </span>{' '}
          extra revenue per month.
        </div>

        <div
          style={{ width: '400px' }}
          className="bg-green-600 text-white py-2 px-4 font-medium"
        >
          <span className="font-bold">
            £
            {formatCurrency(
              tableTurnsPerDay *
                potentialExtraRevenueWithTastiest *
                quietDaysPerWeek *
                WEEKS_IN_A_YEAR,
            )}
          </span>{' '}
          extra revenue per year.
        </div>
      </div>
    </div>
  );
};

interface ResultBlockProps {
  label: string;
  value: string;
  size?: 'md' | 'lg';
}

const ResultBlock = (props: ResultBlockProps) => {
  const { label, value, size } = props;

  return (
    <div style={{ width: '400px' }}>
      <div
        className={clsx('font-thin', size === 'lg' ? 'text-3xl' : 'text-2xl')}
      >
        {value}
      </div>
      <span className="opacity-50">{label}</span>
    </div>
  );
};

interface CalcInputProps {
  label: string;
  sublabel?: string;
  value: number;
  prefix?: JSX.Element;
  setValue: (value: number) => void;
  formatter?: (value: string) => string;
}

const CalcInput = (props: CalcInputProps) => {
  const { label, sublabel, prefix, value, setValue, formatter } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="text-lg">{label}</div>

      {sublabel ? <div className="text-base opacity-75">{sublabel}</div> : null}

      <div className="w-24">
        <Input
          center
          type="number"
          value={String(value)}
          prefix={prefix}
          size="large"
          inputClassName="text-xl"
          formatter={formatter}
          onValueChange={value => setValue(Number(value))}
        />
      </div>
    </div>
  );
};

interface CalcSliderProps {
  label: string;
  min: number;
  max: number;
  initialValue: number;
  value: number;
  setValue: (value: number) => void;

  formatter?: (value: number) => string;
}

const CalcSlider = (props: CalcSliderProps) => {
  const { label, formatter, min, max, initialValue, value, setValue } = props;

  return (
    <div className="relative flex items-center gap-6 -mr-10">
      <div style={{ width: '400px' }} className="">
        <p className="text-lg mb-2 font-medium">{label}</p>
        <Slider
          progress
          min={min}
          max={max}
          onChange={setValue}
          defaultValue={initialValue}
        />
      </div>

      <div className="w-16 text-3xl font-thin">
        {formatter ? formatter(value) : value}
      </div>
    </div>
  );
};

export default RestaurateurCalculator;
