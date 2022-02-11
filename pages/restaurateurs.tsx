import { Button, Input, TextArea } from '@tastiest-io/tastiest-ui';
import { Contained } from 'components/Contained';
import ResponsiveImage from 'components/ResponsiveImage';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { useController, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  restaurantName: string;
  restaurantWebsite: string;
  restaurantAddress: string;
  givenExperienceIdea: string;
}

function Restaurateurs() {
  const { isDesktop } = useScreenSize();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const submit = handleSubmit(async form => {
    return null;
  });

  const {
    field: { ref: nameRef, ...nameFieldProps },
  } = useController({
    name: 'name',
    control,
    rules: {
      required: {
        value: true,
        message: 'Please enter your name',
      },
      minLength: {
        value: 3,
        message: 'Please enter at least 3 characters for your name.',
      },
      maxLength: {
        value: 32,
        message: `That's a really long name! Try something a bit shorter.`,
      },
    },
  });

  const {
    field: { ref: emailRef, ...emailFieldProps },
  } = useController({
    name: 'email',
    control,
    rules: {
      required: {
        value: true,
        message: 'Please enter your best email',
      },
      minLength: {
        value: 3,
        message: 'Please enter a full email',
      },
      maxLength: {
        value: 32,
        message: `That's a really long email! Try something a bit shorter.`,
      },
    },
  });

  const {
    field: { ref: contactNumberRef, ...contactNumberFieldProps },
  } = useController({
    name: 'contactNumber',
    control,
    rules: {
      required: {
        value: true,
        message: 'Please enter your best contact number.',
      },
      minLength: {
        value: 8,
        message: 'Please enter your best contact number.',
      },
      maxLength: {
        value: 14,
        message: 'Please enter a valid phone number.',
      },
    },
  });

  const {
    field: { ref: restaurantNameRef, ...restaurantNameFieldProps },
  } = useController({
    name: 'restaurantName',
    control,
    rules: {
      required: {
        value: true,
        message: `Please enter your restaurant's name`,
      },
      minLength: {
        value: 2,
        message: 'Please enter a name longer than this.',
      },
    },
  });

  const {
    field: { ref: restaurantWebsiteRef, ...restaurantWebsiteFieldProps },
  } = useController({
    name: 'restaurantWebsite',
    control,
    rules: {
      required: {
        value: true,
        message: `Please enter your restaurants website.`,
      },
      minLength: {
        value: 6,
        message: 'Please enter the full URL',
      },
    },
  });

  const {
    field: { ref: restaurantAddressRef, ...restaurantAddressProps },
  } = useController({
    name: 'restaurantAddress',
    control,
    rules: {
      required: {
        value: true,
        message: `Please enter your restaurant's address`,
      },
      minLength: {
        value: 10,
        message: 'Please enter a full address',
      },
    },
  });

  const {
    field: { ref: givenExperienceIdeaRef, ...givenExperienceIdeaProps },
  } = useController({
    name: 'givenExperienceIdea',
    control,
    rules: {
      required: {
        value: true,
        message: `For example, your best dish`,
      },
      minLength: {
        value: 10,
        message: 'Please help us understand your experience recommendation',
      },
    },
  });

  return (
    <div className="py-12">
      <Contained maxWidth={900}>
        <h1 className="font-primary text-center font-medium text-3xl text-primary mb-2">
          Work with us
        </h1>

        <div className="flex justify-center">
          <div
            style={{
              width: '600px',
              maxWidth: '90vw',
              filter: 'drop-shadow(9px 9px 15px #3882bb20)',
            }}
            className="flex flex-col items-center bg-white rounded-xl pt-6 pb-10 px-10"
          >
            <div className="w-64 h-32 relative mb-6">
              <ResponsiveImage src="https://images.ctfassets.net/tq39z0nxr0bv/65zfVgiS8s1IHcLAH8LIx7/724915ee92c1e1d0aa0e2383ca0ef19f/ThankYou-01.svg" />
            </div>

            <h3 className="text-lg font-medium">
              Tastiest Restaurant Application
            </h3>

            <div className="opacity-75 mt-4">
              <p>
                Thank you for your interest in applying to work with Tastiest!
                Please fill in this short form and our team will contact you as
                soon as they can.
              </p>

              <p className="leading-none mt-4">Kind regards</p>
              <p className="italic leading-tight">
                Daniel Graham - <span>Founder of Tastiest</span>
              </p>
            </div>

            <form className="flex flex-col space-y-6 w-full mt-10">
              <Input
                ref={nameRef}
                label="Your name"
                error={errors.name?.message}
                {...nameFieldProps}
              />

              <Input
                ref={emailRef}
                label="Your email address"
                error={errors.email?.message}
                {...emailFieldProps}
              />

              <Input
                ref={contactNumberRef}
                label="Contact number"
                error={errors.contactNumber?.message}
                {...contactNumberFieldProps}
              />

              <Input
                ref={restaurantNameRef}
                label="Restaurant's name"
                error={errors.restaurantName?.message}
                {...restaurantNameFieldProps}
              />

              <Input
                ref={restaurantWebsiteRef}
                label="Restaurant's website"
                error={errors.restaurantWebsite?.message}
                {...restaurantWebsiteFieldProps}
              />

              <Input
                ref={restaurantAddressRef}
                error={errors.restaurantAddress?.message}
                label="Restaurant's address"
                {...restaurantAddressProps}
              />

              <TextArea
                ref={givenExperienceIdeaRef}
                label="Something you're proud of"
                placeholder="Please provide a brief description of the experience that you would like to sell with Tastiest"
                {...givenExperienceIdeaProps}
              />

              <Button wide size="large" onClick={submit}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Contained>
    </div>
  );
}

export default Restaurateurs;
