import React, { useContext } from 'react';
import ThankYouOnlineButtonSVG from '../assets/svgs/page/thank-you-online-button.svg';
import ThankYouPhoneButtonSVG from '../assets/svgs/page/thank-you-phone-button.svg';
import ThankYouPhoneSVG from '../assets/svgs/page/thank-you-phone.svg';
import ThankYouBackdropSVG from '../assets/svgs/page/thank-you.svg';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';

function ThankYou() {
  const { isMobile } = useContext(ScreenContext);

  return (
    <Contained>
      <div className="flex flex-col items-center w-full space-y-20 mt-6">
        <div className="flex-col items-center w-full">
          <div className="w-full mobile:order-last">
            <ThankYouBackdropSVG className="w-full" />
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="font-somatic text-primary text-sevenxl">Yay!</h1>
            <h2
              style={{ maxWidth: '25rem' }}
              className="font-somatic text-primary text-twoxl"
            >
              Thank you and congratulations on taking advantage of this offer.
            </h2>
          </div>
        </div>

        <div className="flex flex-row justify-center items-start space-x-6">
          <div className="flex flex-col items-start">
            <h2
              style={{ maxWidth: '13rem' }}
              className="font-somatic text-threexl leading-tight"
            >
              Book via the Restaurant's Phone line
            </h2>

            {!isMobile && (
              <>
                <PhoneBookingButton />

                <span style={{ maxWidth: '15rem' }}>
                  Please quote <b>"Tastiest"</b> when you book to get this
                  offer!
                </span>
              </>
            )}
          </div>

          <div
            style={{
              maxWidth: '16rem',
            }}
            className="flex items-start w-full -mt-6"
          >
            <ThankYouPhoneSVG className="w-full h-full" />
            {/* <div className="mobile:hiddexzn">
              <PhoneBookingButton />
            </div> */}
          </div>
        </div>
      </div>
    </Contained>
  );
}

const PhoneBookingButton = () => (
  <div>
    <ThankYouPhoneButtonSVG className="h-10 my-4" />
  </div>
);

const OnlineBookingButton = () => (
  <div>
    <ThankYouOnlineButtonSVG />
  </div>
);

export default ThankYou;
