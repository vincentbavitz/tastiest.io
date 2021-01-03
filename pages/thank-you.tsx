import React, { useContext } from 'react';
import ThankYouOnlineButtonSVG from '../assets/svgs/page/thank-you-online-button.svg';
import ThankYouOnlineSVG from '../assets/svgs/page/thank-you-online.svg';
import ThankYouPhoneButtonSVG from '../assets/svgs/page/thank-you-phone-button.svg';
import ThankYouPhoneSVG from '../assets/svgs/page/thank-you-phone.svg';
import ThankYouBackdropSVG from '../assets/svgs/page/thank-you.svg';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { SVG } from '../types';

function ThankYou() {
  const { isMobile } = useContext(ScreenContext);

  return (
    <Contained>
      <div className="flex flex-col items-center w-full space-y-20 mt-6 mb-8">
        <div
          style={{
            maxWidth: '50rem',
          }}
          className="flex flex-col tablet:flex-row items-center w-full"
        >
          <div className="flex justify-center w-full order-last tablet:order-first">
            <ThankYouBackdropSVG
              style={{
                maxWidth: '500px',
              }}
              className="w-full"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="font-somatic text-primary text-sevenxl">Yay!</h1>
            <h2
              style={{ maxWidth: isMobile ? '28rem' : '50rem' }}
              className="font-somatic text-primary text-twoxl"
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
  const { isMobile } = useContext(ScreenContext);
  const promptText = (
    <>
      Please quote <b>"Tastiest"</b> when you book to get this offer!
    </>
  );

  return (
    <div className="flex flex-col space-x-6">
      <div className="flex flex-row justify-center items-start mobile:items-center space-x-6">
        <div className="flex flex-col items-start">
          <h2
            style={{ maxWidth: isMobile ? '16rem' : '13rem' }}
            className="font-somatic text-threexl mobile:text-fourxl leading-tight"
          >
            {props.title}
          </h2>

          {!isMobile && (
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

      {isMobile && (
        <div className="flex flex-col items-center space-y-4">
          <props.buttonSvg
            onClick={() => null}
            className="h-10 mt-10 cursor-pointer"
          />

          <span
            style={{ maxWidth: '20rem' }}
            className="text-center text-lg mt-6"
          >
            {promptText}
          </span>
        </div>
      )}
    </div>
  );
}

export default ThankYou;
