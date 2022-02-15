import {
  CalendarOutlined,
  CommentOutlined,
  HeartOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Input, Modal, TastiestBrand } from '@tastiest-io/tastiest-ui';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import REGEX from 'constants/regex';
import { EarlyAccessContext } from 'contexts/invite';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { LocalEndpoint } from 'types/api';
import { generateTitle } from 'utils/metadata';

type JoinWaitlistFormData = {
  joinWaitlistEmail: string;
};

type HasAccessFormData = {
  hasAccessEmail: string;
};

const Invite = () => {
  const router = useRouter();
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const [showAccessModal, setShowAccessModal] = useState(false);

  const { submitPreregister } = useContext(EarlyAccessContext);
  const [loading, setLoading] = useState(false);

  const submit = async ({ joinWaitlistEmail }: JoinWaitlistFormData) => {
    setLoading(true);

    try {
      await submitPreregister(joinWaitlistEmail.toLowerCase());
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.prefetch('/invite/thank-you');
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<JoinWaitlistFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const {
    field: { ref: joinWaitlistEmailRef, ...joinWaitlistEmailProps },
  } = useController({
    name: 'joinWaitlistEmail',
    defaultValue: '',
    control,
    rules: {
      minLength: {
        value: 2,
        message: 'Please enter at least 2 characters',
      },
      maxLength: {
        value: 30,
        message: 'Please enter at most 30 characters',
      },
      required: {
        value: true,
        message: 'Please enter your email',
      },
      pattern: {
        value: REGEX.EMAIL,
        message: 'Please enter a valid email',
      },
    },
  });

  return (
    <>
      <Head>
        <title>{generateTitle('Join our waitlist')}</title>
      </Head>

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tastiest.io/" />
      <meta
        property="og:title"
        content="Tastiest | Exceptional food experiences in London"
      />
      <meta
        property="og:description"
        content="Get early access. Partnering only with the best restaurants. Stop having disappointing experiences."
      />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/72ddac8e61018e2aad21fd094f56d4a2/Meta_img.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tastiest.io/" />
      <meta
        property="twitter:title"
        content="Tastiest | Exceptional food experiences in London"
      />
      <meta
        property="twitter:description"
        content="Get early access. Partnering only with the best restaurants. Stop having disappointing experiences."
      />
      <meta
        property="twitter:image"
        content="https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/72ddac8e61018e2aad21fd094f56d4a2/Meta_img.png"
      />

      <NextSeo
        title="Tastiest | Exceptional food experiences in London"
        description="Get early access. Partnering only with the best restaurants. Stop having disappointing experiences."
        openGraph={{
          title: 'Tastiest | Exceptional food experiences in London',
          description:
            'Get early access. Partnering only with the best restaurants. Stop having disappointing experiences.',
          images: [
            {
              url:
                'https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/72ddac8e61018e2aad21fd094f56d4a2/Meta_img.png',
            },
          ],
        }}
      />

      <GetAccessModal
        show={showAccessModal}
        close={() => setShowAccessModal(false)}
      />

      <div
        style={{ minHeight: '100vh' }}
        className="relative bg-light text-primary pb-12 font-secondary"
      >
        <div className="absolute top-6 z-50 right-6">
          <Button onClick={() => setShowAccessModal(true)} color="light">
            I have early access
          </Button>
        </div>

        <Contained>
          <div className="flex flex-col space-y-10 items-center text-center pt-20">
            <div>
              <TastiestBrand type="full" size={10} />

              <h2 className="text-xl tracking-wide mt-4 leading-none">
                Premium Dining Experiences
              </h2>
              <h4 className="text-base mt-4">
                Partnering only with the best restaurants.
              </h4>
            </div>

            <div style={{ minHeight: '10rem' }} className="relative w-full">
              <Image
                src={'/assets/illustrations/bridge.svg'}
                layout="fill"
                objectFit="contain"
                objectPosition="bottom"
                className="w-full h-full z-10"
              />
            </div>

            <div
              style={{ width: 'fit-content' }}
              className={clsx(
                'flex justify-center gap-2',
                isMobile ? 'flex-col' : '',
              )}
            >
              <div style={{ minWidth: '16rem' }} className="">
                <Input
                  ref={joinWaitlistEmailRef}
                  label="Your best email"
                  size="large"
                  error={errors.joinWaitlistEmail?.message ?? null}
                  onReturn={handleSubmit(submit)}
                  formatter={value => value.toLowerCase()}
                  {...joinWaitlistEmailProps}
                />
              </div>

              <Button
                color="primary"
                size="large"
                wide={isMobile}
                loading={loading}
                onClick={handleSubmit(submit)}
              >
                Get Early Access
              </Button>
            </div>

            <h4 className="text-sm">Stop having disappointing experiences.</h4>

            <div
              className={clsx(
                'grid gap-6 grid-rows-1',
                isMobile && 'grid-cols-1',
                isTablet && 'grid-cols-2',
                isDesktop && 'grid-cols-4',
              )}
            >
              <InformationBlock
                label="Restaurant Stories"
                description="Feel the atmosphere through our cinematography and interviews"
                illustration={VideoCameraOutlined}
              ></InformationBlock>
              <InformationBlock
                label="Book Experiences"
                description="Reserve your table through Tastiest"
                illustration={CalendarOutlined}
              ></InformationBlock>
              <InformationBlock
                label="Be In The Know"
                description="Loyal customers follow restaurants and get access to special experiences"
                illustration={HeartOutlined}
              ></InformationBlock>
              <InformationBlock
                label="Community Driven"
                description="All restaurants are recommended by you and anonymously tested by us"
                illustration={CommentOutlined}
              ></InformationBlock>
            </div>
          </div>
        </Contained>
      </div>
    </>
  );
};

interface InformationBlockProps {
  label: string;
  description: string;
  illustration: React.ForwardRefExoticComponent<any>;
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const { illustration: Illustration, label, description } = props;

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div
        style={{ maxWidth: '8rem', height: '2em' }}
        className="flex items-center"
      >
        <div className="pt-2 text-center font-medium text-lg leading-5 flex justify-center text-dark">
          {label}
        </div>
      </div>

      <div className="flex justify-center items-center relative w-full h-10 pt-1">
        <Illustration
          style={{ filter: 'drop-shadow(0 0 3px #8dd7f4a0)' }}
          className="text-3xl object-contain"
        />
      </div>

      <div style={{ maxWidth: '11rem' }} className="text-sm leading-5">
        {description}
      </div>
    </div>
  );
};

interface GetAccessModalProps {
  show: boolean;
  close: () => void;
}

const GetAccessModal = (props: GetAccessModalProps) => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { setHasAccess } = useContext(EarlyAccessContext);

  const getAccess = async ({ hasAccessEmail }: HasAccessFormData) => {
    setError(null);
    setLoading(true);

    const response = await fetch(
      `${LocalEndpoint.GET_PREREGISTER}?email=${hasAccessEmail.toLowerCase()}`,
    );

    const body = await response.json();

    if (!body.preregister || !body.preregister?.hasAccess) {
      setLoading(false);
    }

    if (
      body.preregister.hasAccess &&
      body.preregister.email === hasAccessEmail.toLowerCase()
    ) {
      setHasAccess(true);
      router.push('/');
    } else {
      setError(`You haven't been granted access just yet.`);
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HasAccessFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const {
    field: { ref: hasAccessEmailRef, ...hasAccessEmailProps },
  } = useController({
    name: 'hasAccessEmail',
    defaultValue: '',
    control,
    rules: {
      minLength: {
        value: 2,
        message: 'Please enter at least 2 characters',
      },
      maxLength: {
        value: 30,
        message: 'Please enter at most 30 characters',
      },
      required: {
        value: true,
        message: 'Please enter your email',
      },
      pattern: {
        value: REGEX.EMAIL,
        message: 'Please enter a valid email',
      },
    },
  });

  return (
    <Modal {...props}>
      <div
        style={{ minWidth: '300px', maxWidth: '90vw' }}
        className="flex flex-col space-y-3 items-center"
      >
        <div className="pb-4">
          <TastiestBrand size={10} type="initial-ring" />
        </div>

        <h2 className="text-lg mt-3 pb-4 text-center font-medium leading-7">
          Please enter the email address that has been given early access to
          Tastiest
        </h2>

        <Input
          ref={hasAccessEmailRef}
          size="large"
          label="Email"
          onReturn={handleSubmit(getAccess)}
          formatter={value => value.toLowerCase()}
          error={errors.hasAccessEmail?.message ?? null}
          {...hasAccessEmailProps}
        />

        <Button
          loading={loading}
          size="large"
          onClick={handleSubmit(getAccess)}
        >
          Access Tastiest
        </Button>

        {error ? (
          <div className="bg-red-200 w-full h-10 text-sm rounded-md flex items-center justify-center">
            {error}
          </div>
        ) : null}
      </div>
    </Modal>
  );
};

Invite.layout = Layouts.INVITE;
export default Invite;
