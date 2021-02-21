import ThankYouOnlineButtonSVG from '@svg/page/thank-you-online-button.svg';
import ThankYouOnlineSVG from '@svg/page/thank-you-online.svg';
import ThankYouPhoneButtonSVG from '@svg/page/thank-you-phone-button.svg';
import ThankYouPhoneSVG from '@svg/page/thank-you-phone.svg';
import ThankYouBackdropSVG from '@svg/page/thank-you.svg';
import React, { useContext } from 'react';
import { SVG } from 'types/assets';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';

function ThankYou() {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <Contained>
      <div className="flex flex-col items-center w-full mt-6 mb-8 space-y-20">
        <div
          style={{
            maxWidth: '50rem',
          }}
          className="flex flex-col items-center w-full tablet:flex-row"
        >
          <div className="flex justify-center order-last w-full tablet:order-first">
            <ThankYouBackdropSVG
              style={{
                maxWidth: '500px',
              }}
              className="w-full"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="font-somatic text-primary text-7xl">Yay!</h1>
            <h2
              style={{ maxWidth: !isDesktop ? '28rem' : '50rem' }}
              className="text-2xl font-somatic text-primary"
            >
              Thank you and congratulations on taking advantage of this offer.
            </h2>
          </div>
        </div>

        <BookingSection
          title="Book via the Restaurant's Phone line"
          buttonSvg={ThankYouPhoneButtonSVG}
          bookingSvg={ThankYouPhoneSVG}
        />

        <BookingSection
          title="Book via the Restaurant's online booking system"
          buttonSvg={ThankYouOnlineButtonSVG}
          bookingSvg={ThankYouOnlineSVG}
        />
      </div>
    </Contained>
  );
}

interface BookingSectionProps {
  title: string;
  buttonSvg: SVG;
  bookingSvg: SVG;
}

function BookingSection(props: BookingSectionProps) {
  const { isDesktop } = useContext(ScreenContext);
  const promptText = (
    <>
      Please quote <b>"Tastiest"</b> when you book to get this offer!
    </>
  );

  return (
    <div className="flex flex-col space-x-6">
      <div className="flex flex-row items-start justify-center space-x-6 mobile:items-center">
        <div className="flex flex-col items-start">
          <h2
            style={{ maxWidth: !isDesktop ? '16rem' : '13rem' }}
            className="text-3xl leading-tight font-somatic mobile:text-4xl"
          >
            {props.title}
          </h2>

          {!!isDesktop && (
            <>
              <props.buttonSvg
                onClick={() => null}
                className="h-10 my-4 cursor-pointer"
              />
              <span style={{ maxWidth: '15rem' }}>{promptText}</span>
            </>
          )}
        </div>

        <div
          style={{
            maxWidth: '16rem',
          }}
          className="flex items-start w-full -mt-6"
        >
          <props.bookingSvg className="w-full h-full" />
        </div>
      </div>

      {!isDesktop && (
        <div className="flex flex-col items-center space-y-4">
          <props.buttonSvg
            onClick={() => null}
            className="h-10 mt-10 cursor-pointer"
          />

          <span
            style={{ maxWidth: '20rem' }}
            className="mt-6 text-lg text-center"
          >
            {promptText}
          </span>
        </div>
      )}
    </div>
  );
}

export default ThankYou;
