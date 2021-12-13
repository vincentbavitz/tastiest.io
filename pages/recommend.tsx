import { Button, Input, Modal, TastiestBrand } from '@tastiest-io/tastiest-ui';
import { postFetch } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { EarlyAccessContext, EarlyAccessParams } from 'contexts/invite';
import { Layouts } from 'layouts/LayoutHandler';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { LocalEndpoint } from 'types/api';
import { generateTitle } from 'utils/metadata';
import { REGEX } from '../constants';
import { SubmitRecommendToZapierParams } from './api/invite/submitRecommendToZapier';
import HomeHero from '/public/assets/page/home.svg';

export type InviteRecommendFormData = {
  favouriteRestaurantName: string;
  favouriteRestaurantWebsite: string;
  mustTryDish: string;
  userEmail: string;
};

const Recommend = () => {
  const [loading, setLoading] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const { utmMedium, utmSource, utmCampaign } = useContext<EarlyAccessParams>(
    EarlyAccessContext,
  );

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InviteRecommendFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const {
    field: {
      ref: favouriteRestaurantWebsiteRef,
      ...favouriteRestaurantWebsiteProps
    },
  } = useController({
    name: 'favouriteRestaurantWebsite',
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
        message: 'Please enter their website',
      },
    },
  });

  const {
    field: { ref: favouriteRestaurantNameRef, ...favouriteRestaurantNameProps },
  } = useController({
    name: 'favouriteRestaurantName',
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
        message: 'Please enter your favourite restaurant',
      },
    },
  });

  const {
    field: { ref: mustTryDishRef, ...mustTryDishProps },
  } = useController({
    name: 'mustTryDish',
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
    },
  });

  const {
    field: { ref: userEmailRef, ...userEmailProps },
  } = useController({
    name: 'userEmail',
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

  const submit = async (form: InviteRecommendFormData) => {
    setLoading(true);

    // Send event to Zapier.
    await postFetch<SubmitRecommendToZapierParams>(
      LocalEndpoint.SUBMIT_RECOMMEND_TO_ZAPIER,
      {
        ...form,
        utm_medium: utmMedium,
        utm_source: utmSource,
        utm_campaign: utmCampaign,
      },
    );

    reset();
    setLoading(false);
    setShowThankYouModal(true);
  };

  return (
    <>
      <Head>
        <title>{generateTitle('Recommend a Restaurant')}</title>
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
        content="https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/1cb46b8e135f791132fc0314c6e1ffa5/Hype-classy-meta.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tastiest.io/" />
      <meta
        property="twitter:title"
        content="Tastiest | Exceptional food experiences in London"
      />
      <meta
        property="twitter:description"
        content="Recommend a restaurant you want on Tastiest"
      />
      <meta
        property="twitter:image"
        content="https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/1cb46b8e135f791132fc0314c6e1ffa5/Hype-classy-meta.png"
      />

      <NextSeo
        title="Tastiest | Recommend a restaurant"
        description="Recommend a restaurant you want on Tastiest"
        openGraph={{
          title: 'Tastiest | Recommend a restaurant',
          description: 'Recommend a restaurant you want on Tastiest',
          images: [
            {
              url:
                'https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/72ddac8e61018e2aad21fd094f56d4a2/Meta_img.png',
            },
          ],
        }}
      />

      <Modal
        size="small"
        show={showThankYouModal}
        close={() => setShowThankYouModal(false)}
      >
        <div className="text-center pb-4">
          <h3 className="text-2xl pb-4 font-primary text-primary">
            Thank You!
          </h3>
          The restaurant has been submitted. Feel free to recommend more.
        </div>
      </Modal>

      <div
        style={{ minHeight: '100vh' }}
        className="relative bg-light text-primary pt-12 font-secondary flex flex-col justify-between"
      >
        <Contained>
          <div className="flex justify-center w-full">
            <div
              style={{ maxWidth: '300px' }}
              className="flex flex-col space-y-6 items-center"
            >
              <TastiestBrand type="full" size={10} />

              <h1 className="text-xl pb-6">Recommend a restaurant</h1>

              <Input
                ref={favouriteRestaurantNameRef}
                label="Your favourite restaurant"
                error={errors?.favouriteRestaurantName?.message}
                {...favouriteRestaurantNameProps}
              />

              <Input
                ref={favouriteRestaurantWebsiteRef}
                label="Their website"
                error={errors?.favouriteRestaurantWebsite?.message}
                {...favouriteRestaurantWebsiteProps}
              />

              <Input
                ref={mustTryDishRef}
                label="Their must-try dish"
                error={errors?.mustTryDish?.message}
                {...mustTryDishProps}
              />

              <Input
                ref={userEmailRef}
                label="Your best email"
                error={errors?.userEmail?.message}
                onReturn={handleSubmit(submit)}
                {...userEmailProps}
              />

              <Button
                wide
                size="large"
                color="primary"
                loading={loading}
                onClick={handleSubmit(submit)}
              >
                Submit
              </Button>
            </div>
          </div>
        </Contained>

        <div className="relative mt-12 h-48 z-0">
          <Image
            src={HomeHero}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

Recommend.layout = Layouts.INVITE;
export default Recommend;
