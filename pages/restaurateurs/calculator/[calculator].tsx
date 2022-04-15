import { Media } from '@tastiest-io/tastiest-horus';
import { Input } from '@tastiest-io/tastiest-ui';
import { CmsApi, dlog } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import FancyBorder from 'components/FancyBorder';
import { useScreenSize } from 'hooks/useScreenSize';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import React, { useMemo, useState } from 'react';
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

function RestaurateurCalculator(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { isDesktop } = useScreenSize();

  dlog('[calculator] ➡️ props:', props);

  const [availableSeats, setAvailableSeats] = useState(60);
  // prettier-ignore
  const [coversOnQuietDays, setCoversOnQuietDays] = useState(20);
  // prettier-ignore
  const [quietDaysPerWeek, setQuietDaysPerWeek] = useState(4);
  // prettier-ignore
  const [highPayingCoversPc, setHighPayingCoversPc] = useState(props.highPayingCovers);
  // prettier-ignore
  const [repeatHighPayingCustomers, setRepeatHighPayingCustomers] = useState(props.repeatHighPayingCustomers);
  // prettier-ignore
  const [avgPricePerExperience, setAvgPricePerExperience] = useState(props.avgPricePerExperience);

  // availableCovers = available seats

  const calculatedRevenue = useMemo(() => {
    return availableSeats * avgPricePerExperience;
  }, [
    availableSeats,
    highPayingCoversPc,
    avgPricePerExperience,
    coversOnQuietDays,
    repeatHighPayingCustomers,
  ]);

  const [coversPerWeek, setCoversPerWeek] = useState(100);

  // How many people are in the restaurant % at any given time?
  // Let's assume they're quiet 4 days a week.
  // const avgCapacity = quietDaysPerWeek *

  const howManyPeopleTastiestCanHelpPerWeek =
    coversOnQuietDays * quietDaysPerWeek;

  /** How many people in total will come through Tastiest given
   * `PERCENTAGE_PEOPLE_SCANNING_QR` and `QR_SCANNING_CONVERSIONS`?
   *  Specifically during quiet times.
   */
  // const conversionsFromQRPerWeek =
  // howManyPeopleTastiestCanHelpPerWeek *
  //   (highPayingCoversPc / 100) *
  //   PERCENTAGE_PEOPLE_SCANNING_QR *
  //   QR_SCANNING_CONVERSIONS *
  //   coversPerWeek;

  // Put this in Contentful from their Open Hours.
  const HOURS_OPEN_PER_DAY = 8;
  const DAYS_OPEN_PER_WEEK = 6;
  const HOURS_OPEN_PER_WEEK = HOURS_OPEN_PER_DAY * DAYS_OPEN_PER_WEEK;
  const SEATING_DURATION_HOURS = 1.5;

  const NUMBER_OF_TIMES_EACH_SEAT_REPLACED_PER_WEEK =
    HOURS_OPEN_PER_WEEK / SEATING_DURATION_HOURS;

  // We assume each table is replaced with more people every seating duration.
  // We assume the entire restaurant is replaced every seating duration.
  const maxCoversPerWeek =
    availableSeats * NUMBER_OF_TIMES_EACH_SEAT_REPLACED_PER_WEEK;

  const capacityPc = coversPerWeek / maxCoversPerWeek;

  // How many people per week are they missing out on? Assuming we get them 100% capacity all the time?
  const missingOutOnPerWeek = maxCoversPerWeek - coversPerWeek;

  // We assume that when "busy" they're at 100% capacity.
  // How many extra covers per QUIET day can we get them?
  // How many quiet days per week? 3.5 <-- Constant for now. <-- Ask them.
  // Available seats during quiet times? availableCovers - coversDuringQuietTimes
  // How many people are high paying customers? Let's say 15%
  // That's how many we can work with.
  // The raw number we can help them with is 15% * (availableCovers - coversDuringQuietTimes)

  // How many are repeat customers? <-- Calculate how much they're losing, assuming we can get this to 100%.

  // Questions
  // The MAXIMUM amount of people they're missing out on
  // How many valuable customers (realistically) can Tastiest bring back to the restaurant

  // ^ Given those, how much extra money does that make them?
  // ^ How much does this make Tastiest (in the console)

  const PC_PEOPLE_SCANNING_QR_CODE = 0.2;
  /** How many people who scan the QR actually book through Tastiest? */
  const PC_QR_SCANS_ARE_CONVERSIONS = 0.4;

  const highPayingCoversPerWeek = coversPerWeek * (highPayingCoversPc / 100);

  const coversThroughTastiestPerWeek =
    highPayingCoversPerWeek *
    PC_PEOPLE_SCANNING_QR_CODE *
    PC_QR_SCANS_ARE_CONVERSIONS;

  return (
    <div className="pt-12 pb-20">
      <Contained maxWidth={700}>
        <div className="flex justify-center mb-6">
          <Image
            src={props.restaurantLogo.url}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

        <h1 className="font-primary text-center font-medium text-3xl text-primary mb-6">
          Let's see what Tastiest can do for {props.restaurantName}.
        </h1>

        <FancyBorder layers="double">
          <div className="flex flex-col items-center gap-12 p-6 pb-6">
            <CalcSlider
              label="How many covers can you seat?"
              min={5}
              max={200}
              value={availableSeats}
              setValue={setAvailableSeats}
              initialValue={props.availableCovers}
            />

            <div className="flex flex-col items-center">
              <div className="text-lg">
                How many covers do you get per week?
              </div>

              <div className="w-24">
                <Input
                  type="number"
                  value={String(coversPerWeek)}
                  onValueChange={value => setCoversPerWeek(Number(value))}
                />
              </div>
            </div>

            <div>
              Based on the above figures, {props.restaurantName} is at{' '}
              {Math.floor(coversOnQuietDays / (coversPerWeek / DAYS_IN_WEEK))}%
              capacity on quiet days
            </div>

            {/* <div>
              Based on the above figures, {props.restaurantName} is at{' '}
              {Math.floor(capacityPc * 100)}% capacity.
            </div> */}

            <CalcSlider
              label="What percentage of your covers are high paying customers?"
              min={1}
              max={100}
              value={highPayingCoversPc}
              setValue={setHighPayingCoversPc}
              initialValue={props.highPayingCovers}
              formatter={value => `${value}%`}
            />

            <div className="flex flex-col items-center">
              <div className="text-lg">
                How many covers do get on quiet days?
              </div>

              <div className="w-24">
                <Input
                  type="number"
                  value={String(coversOnQuietDays)}
                  onValueChange={value => setCoversOnQuietDays(Number(value))}
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-lg">
                How many quiet days do you have per week?
              </div>

              <div className="w-24">
                <Input
                  type="number"
                  value={String(quietDaysPerWeek)}
                  onValueChange={value => setQuietDaysPerWeek(Number(value))}
                />
              </div>
            </div>

            {/* <div>
              Calculated maximum number of covers per week:{' '}
              {Math.ceil(maxCoversPerWeek)}
            </div> */}

            {/* <div className="bg-white shadow-lg px-10 py-6">
              {props.restaurantName} is{' '}
              {Math.floor(100 * (coversDuringQuietTimes / availableCovers))}%
              full during quiet times.
            </div> */}

            <div className="bg-white shadow-lg px-10 py-6">
              The amount of people that could be coming through Tastiest is{' '}
              {Math.ceil(coversThroughTastiestPerWeek)} per week.
            </div>

            {/* <CalcSlider
              label="How many of the high paying customers come back agian?"
              min={1}
              max={200}
              value={repeatHighPayingCustomers}
              setValue={setRepeatHighPayingCustomers}
              initialValue={props.repeatHighPayingCustomers}
            /> */}

            {/* <div className="bg-white shadow-lg px-10 py-6">
              {props.restaurantName} is missing out on{' '}
              {Math.ceil(MISSING_OUT_ON_PER_WEEK)} covers per week.
              <br />
              <br />
              Of the covers you're missing out on, Tastiest can increase this by
              a maximum of{' '}
              {Math.ceil(
                (highPayingCoversPc / 100) * MISSING_OUT_ON_PER_WEEK,
              )}{' '}
              per week.
            </div> */}

            {/* <div className="bg-white shadow-lg px-10 py-6">
              Given {PERCENTAGE_PEOPLE_SCANNING_QR * 100}% of people will scan
              the QR code in their bill, and given that{' '}
              {QR_SCANNING_CONVERSIONS * 100}% of people scanning WILL book
              through Tastiest. <br />
              <br />
              Tastiest can give you {Math.ceil(conversionsFromQRPerWeek)} more
              covers per week.
            </div> */}

            <CalcSlider
              label="Average Price Per Experience"
              min={20}
              max={200}
              value={avgPricePerExperience}
              setValue={setAvgPricePerExperience}
              initialValue={props.avgPricePerExperience}
              formatter={value => `£${value}`}
            />

            {/* <div className="py-6 flex flex-col gap-6 text-xl">
              <span>Revenue: {calculatedRevenue}</span>
            </div> */}

            <div
              style={{ width: '500px' }}
              className="text-lg font-medium text-center bg-green-500 text-light px-6 py-3"
            >
              In <span className="bg-green-600 px-1">1</span> month, Tastiest
              will have earned you{' '}
              <span className="bg-green-600 px-1">
                £
                {Intl.NumberFormat().format(
                  avgPricePerExperience *
                    coversThroughTastiestPerWeek *
                    WEEKS_IN_A_MONTH,
                )}
              </span>
            </div>
          </div>

          {/* <div className="flex justify-center w-full bg-green-500 text-light py-4 px-6">
            <div
              style={{ width: '400px' }}
              className="text-lg font-medium text-center"
            >
              In <span className="bg-green-600 px-1">6</span> months, Tastiest
              will have earned you{' '}
              <span className="bg-green-600 px-1">£240,593.55</span>
            </div>
          </div> */}
        </FancyBorder>
      </Contained>
    </div>
  );
}

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
