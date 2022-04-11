import { Media } from '@tastiest-io/tastiest-horus';
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

function RestaurateurCalculator(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { isDesktop } = useScreenSize();

  dlog('[calculator] ➡️ props:', props);

  const [availableCovers, setAvailableCovers] = useState(props.availableCovers);
  // prettier-ignore
  const [coversDuringQuietTimes, setCoversDuringQuietTimes] = useState(props.coversDuringQuietTimes);
  // prettier-ignore
  const [highPayingCovers, setHighPayingCovers] = useState(props.highPayingCovers);
  // prettier-ignore
  const [repeatHighPayingCustomers, setRepeatHighPayingCustomers] = useState(props.repeatHighPayingCustomers);
  // prettier-ignore
  const [avgPricePerExperience, setAvgPricePerExperience] = useState(props.avgPricePerExperience);

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
              value={availableCovers}
              setValue={setAvailableCovers}
              initialValue={props.availableCovers}
            />

            <CalcSlider
              label="How many covers do you get during quiet times?"
              min={1}
              max={200}
              value={coversDuringQuietTimes}
              setValue={setCoversDuringQuietTimes}
              initialValue={props.coversDuringQuietTimes}
            />

            <CalcSlider
              label="How many unique covers per day are high paying customers?"
              min={1}
              max={200}
              value={highPayingCovers}
              setValue={setHighPayingCovers}
              initialValue={props.highPayingCovers}
            />

            <CalcSlider
              label="How many of the high paying customers come back agian?"
              min={1}
              max={200}
              value={repeatHighPayingCustomers}
              setValue={setRepeatHighPayingCustomers}
              initialValue={props.repeatHighPayingCustomers}
            />

            <CalcSlider
              label="Average Price Per Experience"
              min={20}
              max={200}
              value={avgPricePerExperience}
              setValue={setAvgPricePerExperience}
              initialValue={props.avgPricePerExperience}
              formatter={value => `£${value}`}
            />

            <div
              style={{ width: '500px' }}
              className="text-lg font-medium text-center bg-green-500 text-light px-6 py-3"
            >
              In <span className="bg-green-600 px-1">6</span> months, Tastiest
              will have earned you{' '}
              <span className="bg-green-600 px-1">£240,593.55</span>
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
