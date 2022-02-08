import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Transition } from '@headlessui/react';
import { Button, Input, Select, TastiestBrand } from '@tastiest-io/tastiest-ui';
import { dlog, Horus } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useMemo, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { REGEX } from '../constants';

enum CallToActionStep {
  INITIAL = 'INITIAL',
  FORM = 'FORM',
  FINAL = 'FINAL',
}

function InfluencerProgram() {
  const { isDesktop } = useScreenSize();

  const scrollToCta = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToCta);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <div className="">
      <div className={clsx('mt-12 py-10 bg-white shadow-xl')}>
        <Contained maxWidth={900}>
          <div
            className={clsx(
              'flex',
              isDesktop ? 'justify-between' : 'justify-center',
            )}
          >
            <CallToActionSection />

            {isDesktop ? (
              <div className="relative flex justify-center items-center flex-grow  border-l">
                <div
                  style={{
                    maxWidth: isDesktop ? '400px' : '80vw',
                    maxHeight: isDesktop ? '400px' : '80vw',
                  }}
                  className="relative h-full w-full"
                >
                  <Image
                    layout="fill"
                    objectFit="contain"
                    objectPosition="middle"
                    src="https://images.ctfassets.net/tq39z0nxr0bv/2csm2xNKVh16bkF5OhKhwi/87d40a24cda4c3a73d6637ee2d04c530/asd.svg"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Contained>
      </div>

      <Contained maxWidth={900}>
        <div className="mt-20">
          <h1 className="text-2xl font-medium leading-none">
            <span className="text-primary">Tastiest Influencers</span>{' '}
            <span className="text-gray-300 ">|</span>{' '}
            <span className="bg-yellow-400">
              Tastiest's affiliate marketing program
            </span>
          </h1>
        </div>

        <div className="text-base mt-4">
          <p className="bg-yellow-400">
            Welcome to one of the most exciting affiliate marketing programs in
            the world.
          </p>

          <p>
            As a Tastiest Influencer, we give you the tools you need to select
            the best of Tastiest's experiences, easily recommend them to your
            followers and earn commissions on qualifying purchases.
          </p>
        </div>

        <div
          className={clsx(
            'grid mt-10',
            isDesktop ? 'grid-cols-3 gap-10' : 'grid-cols-1 gap-14',
          )}
        >
          <InfoColumn
            step={1}
            label="Sign up"
            iconSrc="https://images.ctfassets.net/tq39z0nxr0bv/3NEKQOUGAdGmOmtYNuhoBl/1366da711a94c74666d79d24a0ef8d9d/SignUp.svg"
            compact={!isDesktop}
          />

          <InfoColumn
            step={2}
            label="Create"
            iconSrc="https://images.ctfassets.net/tq39z0nxr0bv/2NCXeBYa128B2DLWSt4rJA/48345057f7c0244c99951370a8879c0c/Recommend.svg"
            compact={!isDesktop}
          />

          <InfoColumn
            step={3}
            label="Earn"
            iconSrc="https://images.ctfassets.net/tq39z0nxr0bv/6WpCzjLH3Hrrt9P0Xv4D1K/3adeef34c1e5390cd160dd2bed40adea/Earn.svg"
            compact={!isDesktop}
          />
        </div>

        <div className="mt-16 bg-yellow-400 bg-opacity-25">
          <h3 className="text-primary text-2xl font-medium w-full border-b mb-8">
            Frequently Asked Questions
          </h3>

          <div
            className={clsx(
              'grid mt-4 gap-8',
              isDesktop ? 'grid-cols-2' : 'grid-cols-1',
            )}
          >
            <FaqItem question="How does the Affiliate Programme work?">
              <span>
                You can share any food experience on{' '}
                <Link href="/">
                  <a className="text-primary">Tastiest</a>
                </Link>{' '}
                with your audience through customised linking tools and earn
                money on qualifying purchases.
              </span>
            </FaqItem>

            <FaqItem question="How do I earn in this programme?">
              You earn from qualifying purchases and programmes through the
              traffic you drive to Tastiest. Commission income for qualifying
              purchases ranges from 5 - 12% depending on how many sales you get
              a month.
            </FaqItem>

            <FaqItem
              question="How do I qualify for this programme?

"
            >
              <span>
                Bloggers, publishers and content creators with a qualifying
                website or mobile app can participate in this programme. If you
                are an influencer with an established social media following,
                learn about the{' '}
                <Link href="/influencer-program">
                  <a className="text-primary">Tastiest Influencer Programme</a>
                </Link>
                .
              </span>
            </FaqItem>

            <FaqItem question="How do I earn in this programme?">
              You earn from qualifying purchases and programmes through the
              traffic you drive to Tastiest. Commission income for qualifying
              purchases ranges from 5 - 12% depending on how many sales you get
              a month.
            </FaqItem>
          </div>
        </div>

        <div className="mt-16 text-center text-base">
          <h4 className="text-xl font-medium">Any other questions?</h4>
          Email us at{' '}
          <Link href="mailto:influencers@tastiest.io">
            <a className="text-primary">influencers@tastiest.io</a>
          </Link>
          .
        </div>
      </Contained>

      <div className="w-full bg-blue-400 mt-16 py-10">
        <Contained maxWidth={900}>
          <div className="flex items-center justify-center gap-2">
            <TastiestBrand type="full" theme="dark" />{' '}
            <span className="border-l border-light border-opacity-50 pl-2 font-primary text-light text-2xl mt-1">
              influencers
            </span>
          </div>

          <div className="flex flex-col items-center mt-6 text-base opacity-75">
            <h4 className="font-medium leading-tight bg-yellow-400">
              Recommend Restaurants.
            </h4>
            <h4 className="font-medium leading-tight bg-yellow-400">
              Earn Commissions.
            </h4>

            <div className="w-32 mt-6">
              <Button wide color="light" size="large" onClick={scrollToCta}>
                Sign up
              </Button>
            </div>
          </div>
        </Contained>
      </div>
    </div>
  );
}

interface InfoColumnProps {
  label: string;
  step: number;
  iconSrc: string;
  description?: string;
  compact?: boolean;
}

const InfoColumn = (props: InfoColumnProps) => {
  const { step, label, iconSrc, description, compact } = props;

  return (
    <div className="flex flex-col items-center">
      {compact ? null : (
        <div className="relative w-32 h-32">
          <Image src={iconSrc} layout="fill" />
        </div>
      )}

      <div className="flex items-center justify-center w-10 h-10 bg-primary text-light font-medium font-primary text-2xl rounded-full">
        {step}
      </div>

      {compact ? (
        <div
          style={{ width: '350px', maxWidth: '80vw' }}
          className="border-secondary border-opacity-25 border-b-2 w-full h-4"
        ></div>
      ) : null}

      <div className={clsx('', compact ? 'flex space-x-4 items-center' : '')}>
        {compact ? (
          <div className="relative w-32 h-32">
            <Image src={iconSrc} layout="fill" />
          </div>
        ) : null}

        <div className={clsx('flex flex-col', compact ? '' : 'items-center')}>
          <span className="text-xl font-medium mt-3">{label}</span>

          {description ? (
            <p
              style={{ maxWidth: compact ? '250px' : '300px' }}
              className={clsx(
                'text-gray-600 mt-2',
                compact ? '' : 'text-center',
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  children: ReactNode;
}

const FaqItem = (props: FaqItemProps) => {
  const { question, children } = props;

  return (
    <div className="">
      <h4 className="text-base leading-tight font-medium">{question}</h4>
      <p className="mt-2">{children}</p>
    </div>
  );
};

interface CallToActionSlideProps {
  heading?: string;
  subheading?: string;
  children: ReactNode;
}

const CallToActionSlide = (props: CallToActionSlideProps) => {
  const { heading, subheading, children } = props;

  const { isDesktop } = useScreenSize();

  return (
    <div
      style={{
        height: '450px',
        width: '325px',
        maxWidth: '80vw',
      }}
      className="relative flex-grow"
    >
      <Transition
        appear={true}
        show={true}
        enter="transition ease-in-out duration-500 transform"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-in-out duration-500 transform"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full"
        className="h-full"
      >
        <div className="flex flex-col h-full pt-4 justify-between">
          <div>
            {heading ? (
              <h4 className="text-2xl text-center mb-3 font-medium font-primary leading-none">
                {heading}
              </h4>
            ) : null}

            {subheading ? (
              <p className="text-center leading-tight text-gray-600">
                {subheading}
              </p>
            ) : null}
          </div>

          <div className="flex-grow">{children}</div>
        </div>
      </Transition>
    </div>
  );
};

type SocialOption = {
  id: string;
  label: string;
  regex: RegExp;
  regexError: string;
  requiredError: string;
  minLength: number;
  maxLength: number;
};

type SocialInputFormData = {
  socialReference: string;
};

const CallToActionSection = (props: any) => {
  const { userData } = useAuth();
  const { isDesktop } = useScreenSize();

  dlog('affiliate-program ➡️ userData:', userData);

  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState<CallToActionStep>(CallToActionStep.INITIAL);

  const socialsOptions: SocialOption[] = [
    {
      id: 'instagram',
      label: 'Instagram',
      regex: REGEX.SOCIALS_USERNAME_TAG,
      regexError: 'Please enter a valid Instagram username',
      requiredError: 'Please enter your Instagram username',
      minLength: 2,
      maxLength: 20,
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      regex: REGEX.SOCIALS_USERNAME_TAG,
      regexError: 'Please enter a valid TikTok username',
      requiredError: 'Please enter your TikTok username',
      minLength: 2,
      maxLength: 20,
    },
    {
      id: 'website',
      label: 'Website',
      regex: REGEX.WEBSITE,
      regexError: 'Please enter a valid URL',
      requiredError: `Please enter your website's URL`,

      minLength: 6,
      maxLength: 64,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      regex: REGEX.YOUTUBE_BASE_URL,
      regexError: 'Please enter a valid YouTube link',
      requiredError: 'Please enter your YouTube profile link',
      minLength: 6,
      maxLength: 64,
    },
    {
      id: 'facebook',
      label: 'Facebook',
      regex: REGEX.FACEBOOK_BASE_URL,
      regexError: 'Please enter a valid Facebook link',
      requiredError: 'Please enter your Facebook profile link',
      minLength: 6,
      maxLength: 64,
    },
  ];

  const [socialsOption, setSocialsOption] = useState<SocialOption>(
    socialsOptions[0],
  );

  const inputLabel = useMemo(() => {
    let label = 'URL or @username';

    if (socialsOption.id === 'instagram') label = '@username';
    if (socialsOption.id === 'website') label = 'Website URL';
    if (socialsOption.id === 'youtube') label = 'Channel URL';
    if (socialsOption.id === 'facebook') label = 'Profile URL';
    if (socialsOption.id === 'tiktok') label = '@username';

    return label;
  }, [socialsOption]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SocialInputFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const {
    field: { ref: socialReferenceRef, ...socialReferenceProps },
  } = useController({
    name: 'socialReference',
    control,
    rules: {
      pattern: {
        value: socialsOption.regex,
        message: socialsOption.regexError,
      },
      minLength: {
        value: socialsOption.minLength,
        message: socialsOption.regexError,
      },
      maxLength: {
        value: socialsOption.maxLength,
        message: socialsOption.regexError,
      },
      required: {
        value: true,
        message: socialsOption.requiredError,
      },
    },
  });

  const submit = handleSubmit(async ({ socialReference }) => {
    setSubmitting(true);

    const horus = new Horus(null);
    const { error } = await horus.post('/public/affiliates/new-submission', {
      platform: socialsOption.id,
      reference: socialReference,
      affiliateType: 'influencer',
      userId: userData?.id,
      anonymousId: window.analytics?.user?.().anonymousId,
    });

    setSubmitting(false);

    if (!error) {
      reset({ socialReference: '' });
      setStep(CallToActionStep.FINAL);
    }
  });

  return (
    <div
      className={clsx(
        'overflow-hidden -ml-2 pl-2 -mb-2 pb-2',
        isDesktop ? 'pr-12' : null,
      )}
    >
      {step === CallToActionStep.INITIAL ? (
        <CallToActionSlide>
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col flex-grow items-center justify-center text-center">
              <div className="relative h-20 w-20 -mt-6">
                <Image
                  objectFit="contain"
                  className="rounded"
                  layout="fill"
                  src={
                    'https://images.ctfassets.net/tq39z0nxr0bv/2LWACtSxcFaXR2wgh0ZLtR/43edc34fe9ff0e84c888c2d79eeea38c/like.svg'
                  }
                />
              </div>

              <h1 className="text-2xl font-primary leading-none bg-yellow-400">
                Recommend Restaurants.
              </h1>
              <h2 className="text-2xl font-primary text-primary  bg-yellow-400">
                Earn Commissions.
              </h2>
            </div>

            <Button
              wide
              size="large"
              suffix={<RightOutlined />}
              onClick={() => setStep(CallToActionStep.FORM)}
            >
              Get Started
            </Button>
          </div>
        </CallToActionSlide>
      ) : null}

      {step === CallToActionStep.FORM ? (
        <CallToActionSlide heading="Become a Tastiest influencer">
          <div className="flex flex-col h-full">
            <div className="flex flex-col space-y-6 justify-center flex-grow">
              <div className="">
                <span className="text-gray-600">Your main channel</span>
                <Select
                  onSelect={id =>
                    setSocialsOption(socialsOptions.find(o => o.id === id))
                  }
                >
                  {socialsOptions.map(option => (
                    <Select.Option
                      key={option.id}
                      id={option.id}
                      value={option.label}
                    />
                  ))}
                </Select>
              </div>

              <Input
                ref={socialReferenceRef}
                label={inputLabel}
                error={errors.socialReference?.message}
                minLength={socialsOption.minLength}
                maxLength={socialsOption.maxLength}
                {...socialReferenceProps}
              />
            </div>

            <Button
              wide
              size="large"
              suffix={<RightOutlined />}
              loading={submitting}
              onClick={submit}
            >
              Sign up
            </Button>
          </div>
        </CallToActionSlide>
      ) : null}

      {step === CallToActionStep.FINAL ? (
        <CallToActionSlide
          heading="Thank-you for signing up!"
          subheading="We'll email you when you've been accepted in the program."
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex-grow w-full flex flex-col justify-center">
              <div className="relative w-full h-56">
                <Image
                  layout="fill"
                  src="https://images.ctfassets.net/tq39z0nxr0bv/2SmMJzx17YVmkyCf0o6zTN/d11a74d4ece97eb1011ae91a597c2fae/Welcome.svg"
                />
              </div>
            </div>

            <Button
              wide
              size="large"
              color="light"
              prefix={<LeftOutlined />}
              onClick={() => setStep(CallToActionStep.INITIAL)}
            >
              Go back
            </Button>
          </div>
        </CallToActionSlide>
      ) : null}
    </div>
  );
};

InfluencerProgram.layout = Layouts.ASSOCIATES_INFLUENCERS;
export default InfluencerProgram;
