import { Button, Input, Modal, TastiestBrand } from '@tastiest-io/tastiest-ui';
import { SVG } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import REGEX from 'constants/regex';
import { EarlyAccessContext } from 'contexts/invite';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  HomeInformationBook,
  HomeInformationLove,
  HomeInformationPage,
  HomeInformationShare,
} from 'public/assets/page/home';
import { ParsedUrlQuery } from 'querystring';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { LocalEndpoint } from 'types/api';
import HomeHero from '/public/assets/page/home.svg';

type JoinWaitlistFormData = {
  joinWaitlistEmail: string;
};

type HasAccessFormData = {
  hasAccessEmail: string;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  // Get the reference email from the URL.
  const positionInLine = 1337;

  return {
    props: {
      positionInLine,
    },
  };
};

const Invite = () => {
  const router = useRouter();
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const [email, setEmail] = useState<string>(null);
  const [showAccessModal, setShowAccessModal] = useState(false);

  const { submitPreregister } = useContext(EarlyAccessContext);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    await submitPreregister(email);
    setLoading(false);
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
                Exceptional food experiences in London.
              </h2>
              <h4 className="text-base mt-4">
                Partnering only with the best restaurants.
              </h4>
            </div>

            <div style={{ minHeight: '10rem' }} className="relative w-full">
              <Image
                src={HomeHero}
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

            <h4>Stop having disappointing experiences.</h4>

            <div
              className={clsx(
                'grid gap-6 grid-rows-1',
                isMobile && 'grid-cols-1',
                isTablet && 'grid-cols-2',
                isDesktop && 'grid-cols-4',
              )}
            >
              <InformationBlock
                label="Know what to expect"
                description="We go to every restaurant on our platform and capture video that represents what they are truly proud of."
                illustration={HomeInformationPage}
              ></InformationBlock>
              <InformationBlock
                label="News from the kitchen"
                description="Follow restaurants where Chefs update you on new dishes, menus and more."
                illustration={HomeInformationShare}
              ></InformationBlock>
              <InformationBlock
                label="Last minute tables"
                description="Grab last-minute tables at the best restaurants in London."
                illustration={HomeInformationLove}
              ></InformationBlock>
              <InformationBlock
                label="Book directly"
                description="Book directly on Tastiest and earn rewards."
                illustration={HomeInformationBook}
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
  illustration: SVG;
  description: string;
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const { illustration: Illustration, label, description } = props;

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div
        style={{ maxWidth: '10rem', height: '2.25em' }}
        className="pt-2 text-center leading-none font-medium flex justify-center"
      >
        {label}
      </div>

      <div className="flex justify-center items-center relative w-full h-20">
        <Illustration className="h-full w-full object-contain" />
      </div>

      <div style={{ maxWidth: '10rem' }} className="pt-2 text-sm leading-4">
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { hasAccess, setHasAccess } = useContext(EarlyAccessContext);

  const getAccess = async ({ hasAccessEmail }: HasAccessFormData) => {
    setError(null);
    setLoading(true);

    const response = await fetch(
      `${LocalEndpoint.GET_PREREGISTER}?email=${hasAccessEmail}`,
    );

    const body = await response.json();
    setLoading(false);

    if (
      body.preregister.hasAccess &&
      body.preregister.email === hasAccessEmail
    ) {
      setHasAccess(true);
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

        <h2 className="text-lg mt-3 pb-4 text-center font-medium">
          Please enter the email address that has been given early access to
          Tastiest
        </h2>

        <Input
          ref={hasAccessEmailRef}
          size="large"
          label="Email"
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
