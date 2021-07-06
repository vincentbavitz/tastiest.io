import { ILegalSection, LegalPage } from 'components/LegalPage';
import Head from 'next/head';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { generateTitle } from '../utils/metadata';

const sections: ILegalSection[] = [
  {
    title: 'INFORMATION COLLECTED',
    subsections: [
      <>
        When you access or use our Services, we collect information from and
        about you to provide a more personalised and relevant experience. Some
        information we collect automatically. Other information we collect from
        different sources, including affiliated entities, business partners and
        other independent third-party sources. When you use our Services by
        “clicking-through” from a third-party site or when you visit third-party
        sites via our Services, those third-party sites may share information
        with us about your use of their service. Information collected may
        include the following:
      </>,
      {
        title: null,
        subsections: [
          <>
            Contact information, including name, phone number and postal and
            email addresses
          </>,

          <>
            Billing or payment information (such as your credit card number,
            cardholder name, expiration date, authentication code and billing
            address)
          </>,
          <>Username and password</>,
          <>
            Photos, reviews, forum and social posts and videos you may have
            provided to us
          </>,
          <>Geolocation information</>,
          <>
            Device information, such as when you accessed our Services and
            information about the Device used (for example, IP address, software
            or internet browser used, preferred languages, unique Device
            identifiers and advertising identifiers)
          </>,
          <>
            Online activity, including pages you have visited, content reviewed
            and apps reviewed
          </>,
          <>Purchasing history</>,
          <>Information about your travel plans and preferences</>,
          <>
            We may also collect, in instances where you have provided it,
            information about other customers, including their email address and
            other related information. If you are sharing information with us
            about other individuals, you must obtain their consent. You must
            obtain the consent of any other individuals if you are providing
            their data to us.
          </>,
        ],
      },
      <>
        In addition to the categories noted above, we may also collect location
        information if you have instructed your Device to send such information
        via the privacy settings on that Device, or, for example, if you have
        uploaded photos tagged with location information. We may use your
        location information directly and/or share your location with third
        parties. We collect and share location information in order to provide
        you with relevant content, to analyze your use of our Services, to
        improve our Services and to provide contextual advertising or
        recommendations. For example, we may use your location to show you
        restaurants when you are travelling.
      </>,
      <>
        You can change the privacy settings of your Device at any time in order
        to turn off the functionality that collects and shares location
        information and/or the functionality to tag your photos with location
        information. However, turning off location-sharing may affect certain
        features that we offer. If you have any questions about the privacy
        settings of your Device, we suggest you contact the manufacturer of your
        Device or your mobile service provider for help.
      </>,
      <>
        Please see the section on Cookies below for more information regarding
        the use of cookies and other technology described in this section,
        including regarding your choices relating to such technologies.
      </>,
    ],
  },
  {
    title: 'Information Uses',
    subsections: [
      <>
        We are committed to providing you with relevant content on our Services
        and respect the data privacy laws of the different jurisdictions in
        which we operate. We use information about you so we can help you enjoy
        and use our Services, including in the following ways:
      </>,
      {
        title: null,
        subsections: [
          <>
            Register and manage your account, including to allow you access to
            and use of our Services
          </>,
          <>Facilitate your bookings</>,
          <>Measure interest in and improve our Services</>,
          <>
            Notify you about special offers and products or services available
            from us, our affiliates, or our partners that may be of interest to
            you
          </>,
          <>Communicate with you</>,
          <>
            Enable communication between registered users and
            owners/representatives of listings on our Services
          </>,
          <>
            Enable us to publish your reviews, forum posts, photos, videos and
            other content
          </>,
          <>
            Customise your experience, including customising the ads shown to
            you on our Services and across the internet
          </>,
          <>Make inferences about your interests or preferences</>,
          <>
            Provide you with an optimised experience and to group users of our
            Services based on, for example, usage and demographics
          </>,
          <>Send you survey or market research invitations</>,
          <>Respond to your questions and comments</>,
          <>Resolve disputes or troubleshoot problems</>,
          <>Prevent potentially prohibited or unlawful activities</>,
          <>
            Enforce our terms of use and notices; and as otherwise described to
            you at the point of collection
          </>,
        ],
      },
      <>
        Please note that some information about you is required in order for us
        to provide you with relevant offerings from us, our affiliates and our
        partners and to enable you to enjoy other benefits of being a registered
        user. Please review the “Information Choices” section below with respect
        to your choices related to the collection and use of your information.
      </>,
    ],
  },
  {
    title: 'Information Sharing',
    subsections: [
      <>
        In order to provide some of our Services, we may need to share
        information with certain other third parties, including our group of
        companies, in the following circumstances:
      </>,
      {
        title: null,
        subsections: [
          <>
            <span className="font-bold">Suppliers. </span>
            We share information with certain suppliers used to facilitate our
            Services, including to help with transactions, such as any
            reservations you might make, for example, sharing data with a
            restaurant if you make a reservation using our Services.
          </>,
          <>
            <span className="font-bold">Business Partners. </span>
            We may share information about you, your Devices and your use of our
            Services with our trusted business partners. For example, we may
            share information so that we can provide you with relevant content
            or in order to facilitate payment for products or services you may
            purchase on the websites of our partners. This sharing is generally
            pursuant to written agreements which include confidentiality,
            privacy and security obligations; however, note that we do not
            control the privacy practices of these third-party business
            partners.
          </>,
          <>
            <span className="font-bold">Social Media Sites. </span>
            When you use our Services and elect to share information with
            third-party social media sites, the information you share will be
            governed by the privacy policies of those social media sites and the
            privacy settings you have set with those social media websites.
          </>,
          <>
            <span className="font-bold">
              Other third parties, such as referring websites.{' '}
            </span>
            Third parties may also assist us in collecting information by, for
            example, operating features of our website or facilitating the
            delivery of online advertising tailored to your interests. We may
            share audience segments and other information with third parties
            that use that information for tailored advertising to you.
          </>,
        ],
      },
      <>
        Third parties may only collect or access information as needed to
        perform their permitted functions.
      </>,
      <>
        Certain Device operating system versions permit you to opt out of
        certain types of information sharing, including to certain advertising
        networks. Please check your Device settings if you want to limit such
        tracking.
      </>,
    ],
  },
  {
    title: 'Information Choices',
    subsections: [
      <>
        You have options with respect to the collection and use of your
        information. You can access, update and even close your account by
        emailing us at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:hello@tastiest.io"
          className="text-primary hover:underline"
        >
          hello@tastiest.io
        </a>
        .
      </>,
      <>Your options</>,
      {
        title: null,
        subsections: [
          <>
            You may choose the way we communicate with you. You can choose not
            to provide us with certain information, although it may be needed to
            take advantage of certain features offered on our websites.
          </>,
          <>
            You can prevent the collection of geolocation information, but note
            that turning off location sharing may affect certain features of our
            Services.
          </>,
          <>
            You also can add or update information and close your account. If
            you close your account, we will deactivate your account and remove
            your profile information from active view. We may retain some
            information associated with your account (including past
            transactions) for internal purposes including backups, fraud
            prevention, dispute resolution, investigations and legal compliance
            for the period necessary to fulfil the purposes outlined in this
            Statement.
          </>,
          <>
            As a registered member, you can modify your marketing subscriptions,
            including email subscription choices, at any time within your member
            settings. You also will be given the opportunity to unsubscribe from
            promotional messages, including emails with travel-related
            opportunities, in any such email we send.
          </>,
        ],
      },
    ],
  },
  {
    title: 'Information Security',
    subsections: [
      <>
        We have implemented appropriate administrative, technical and physical
        security procedures to help protect your information.
      </>,
      <>
        We only authorise specific employees to access personal information and
        they may do so only for permitted business functions. We use encryption
        when transmitting your information between your system and ours, and
        between our system and those of the parties with whom we share
        information. We also employ firewalls and intrusion detection systems to
        help prevent unauthorised access to your information. However, we cannot
        guarantee the security of information from unauthorised entry or use,
        hardware or software failure or other circumstances outside of our
        control.
      </>,
    ],
  },
  {
    title: 'Information Retention',
    subsections: [
      <>
        We will retain copies of your information for as long as you maintain
        your account or as necessary in connection with the purposes set out in
        this Statement, unless applicable law requires a longer retention
        period. In addition, we may retain your information for the duration of
        any period necessary to establish, exercise or defend any legal rights.
      </>,
    ],
  },
  {
    title: 'Cookies',
    subsections: [
      <>
        We want your access to our Services to be as easy, efficient and useful
        as possible. To help us do this, we use cookies and similar technologies
        to improve your experience, to enhance site security and to show you
        relevant advertising.
      </>,
      <>
        <span className="font-bold">What are cookies?</span> Cookies are small
        text files that are automatically placed on your Device when you visit
        almost any website. They are stored by your internet browser and contain
        basic information about your internet use. Your browser sends these
        cookies back to a website every time you revisit it, so it can recognise
        your Device and improve your experience by, among other things,
        providing you with personalised content. We also use cookies to remember
        your login details, so you don’t have to re-enter them repeatedly when
        you use our Services. Other cookies help us understand your preferences.
      </>,
      <>The cookies we use fall into three categories shown below:</>,
      {
        title: null,
        subsections: [
          <>
            <span className="font-bold">Essential. </span>These cookies are
            necessary to help you access and move around the website and use all
            its features. Without these cookies, the website would not work
            properly and you would not be able to use certain important
            features. For example, we use a cookie to keep you logged in during
            your visit, so the site does not require you to log in repeatedly to
            access different pages. We may also use essential cookies for fraud
            detection and prevention purposes.{' '}
            <i className="italic">
              You cannot turn off essential cookies through the Cookie Consent
              Tool, as such cookies are necessary for you to access and use the
              features of the website.
            </i>
          </>,

          <>
            We use these cookies to help us understand how the website is being
            used and how we can improve your experience of it. These cookies can
            provide us with information to help us understand which parts of the
            website interest our visitors and if they experience any errors. We
            use these cookies to test different designs and features for our
            sites and we also use them to help us monitor how visitors reach the
            website.
          </>,

          <>
            <span className="font-bold">Advertising. </span>Advertising cookies
            help ensure that the advertisements you see are as relevant to you
            as possible. For example, some advertising cookies help select ads
            that are based on your interests. Others help prevent the same ad
            from continuously reappearing for you.
          </>,
        ],
      },
      <>
        We also use cookies to save your settings and preferences on the
        website, such as language preference and information you've previously
        entered when searching for travel options. Some customisation cookies
        are essential if you want to use certain features of the website.
      </>,
      <>
        We also use cookies to make it easy to share content from the website
        with your friends through your favourite social networks. Social media
        sites may set cookies that recognise you when you view content on the
        website and allow you to share content across both the website and the
        social media site via the use of sharing settings. For further details,
        please check your social media site’s terms of use and privacy policy.
      </>,
      <>
        We also work with third-party advertisers to give you access to travel
        content that might be of interest and may set cookies on our Services to
        provide you with advertising that matches your interests and
        preferences. These "third-party cookies" collect information about your
        browsing behaviour and interaction with ads or the Services more
        generally. This information also helps us limit the number of times you
        may see the same ads and improve your online experience.
      </>,
    ],
  },
  {
    title: 'Cookie Consent Tool',
    subsections: [
      <>
        Most advertising networks offer you a way to opt out of advertising
        cookies. See{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
          href="http://www.aboutads.info/choices/"
        >
          aboutads.info/choices
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
          href="http://www.youronlinechoices.com/uk/"
        >
          youronlinechoices.com/uk
        </a>{' '}
        for useful information on how to do this.
      </>,
      <>
        If you delete your cookies, your access to some functionality and areas
        of our Services might be degraded or restricted.
      </>,
      <>
        Our use of any information we collect through cookies is subject to this
        Statement, which is linked on every page of our website.
      </>,
    ],
  },

  {
    title: 'Statement Changes and Notification',
    subsections: [
      <>
        We may update this Statement in the future. If we believe any changes
        are material, we will let you know by doing one or more of the
        following: sending you a communication about the changes, placing a
        notice on the website and/or posting an updated Statement on the
        website. We will note at the top of this Statement when it was most
        recently updated. We encourage you to check back from time to time to
        review the most current version and to periodically review this
        Statement for the latest information on our privacy practices.
      </>,
    ],
  },

  {
    title: 'Contact',
    subsections: [
      <>
        If you have a data privacy request, such as a request to delete or
        access your data, please email us at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
          href="mailto:hello@tastiest.io"
        >
          hello@tastiest.io
        </a>
        .
      </>,
      <>
        For general data privacy inquiries or questions concerning our Privacy
        and Cookies Statement, please contact our privacy team by emailing us at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
          href="mailto:hello@tastiest.io"
        >
          hello@tastiest.io
        </a>
        .
      </>,
    ],
  },

  {
    title:
      'General Data Protection Regulation Privacy Statement (“GDPR Statement”)',
    subsections: [
      <>
        This GDPR Statement applies to persons in the European Economic Area
        (“EEA”), including those based in the United Kingdom. This GDPR
        Statement supplements our Statement; however, where the Statement
        conflicts with the GDPR Statement, the GDPR Statement will prevail as to
        persons in the EEA.
      </>,
      <>
        <span className="font-bold">Controller of Personal Information.</span>
        <span key={uuid()} className="">
          {' '}
          Tastiest Technologies Ltd is the data controller of the personal
          information we collect, however, in accordance with applicable data
          privacy law, we have appointed a representative within the European
          Union. The contact details of our representative are: Tastiest
          Technologies Limited. Floor 2 555-557 Cranbrook Road - Ilford IG2 6HE
          - Essex, United Kingdom.
        </span>
      </>,
      <>
        <span className="font-bold">Attn: Privacy Officer. </span> Tastiest
        Technologies Limited’s role in this respect is limited solely to being a
        contact point for questions on data protection from European residents
        and data protection supervisory authorities. For the avoidance of doubt,
        Tastiest Technologies Limited cannot field other communications or legal
        process on behalf of Tastiest Technologies Ltd.
      </>,
      <>
        <span className="font-bold">Your rights under GDPR. </span> You have
        certain rights regarding your personal data. Your rights with respect to
        your own personal data include the following:
      </>,
      {
        title: null,
        subsections: [
          <>
            The right to request access to your personal data. This enables you
            to receive a copy of the personal data we hold about you.
          </>,
          <>
            The right to request to correct your personal data if it is
            inaccurate. You may also supplement any incomplete personal data we
            have, taking into account the purposes of the processing.
          </>,
          <>
            The right to request the deletion of your personal data if
            <br />
            your personal data is no longer necessary for the purposes for which
            we collected or processed it; or
            <br />
            you withdraw your consent if the processing of your personal data is
            based on consent and no other legal ground exists; or
            <br />
            you object to the processing of your personal data and we do not
            have an overriding legitimate ground for processing; or
            <br />
            your personal data is unlawfully processed; or
            <br />
            your personal data must be deleted for compliance with a legal
            obligation.
          </>,
          <>
            The right to object to the processing of your personal data. We will
            comply with your request, unless we have a compelling, overriding,
            legitimate interest for processing or we need to continue processing
            your personal data to establish, exercise or defend a legal claim.
          </>,
          <>
            The right to restrict the processing of personal data, if:
            <br />
            the accuracy of your personal data is contested by you, for the
            period in which we have to verify the accuracy of the personal data;
            or
            <br />
            the processing is unlawful and you oppose the deletion of your
            personal data and request restriction; or
            <br />
            we no longer need your personal data for the purposes of processing,
            but your personal data is required by you for legal claims; or
            <br />
            you have objected to the processing, for the period in which we have
            to verify overriding legitimate grounds.
          </>,
          <>
            The right to data portability. You may request that we send this
            personal data to a third party, where feasible. You only have this
            right if it relates to personal data you have provided to us where
            the processing is based on consent or necessity for the performance
            of a contract between you and us, and the processing is conducted by
            automated means.
          </>,
          <>
            You will not have to pay a fee to access your personal data (or to
            exercise any of the other rights described in this Statement).
            However, we may charge a reasonable fee if your request is clearly
            unfounded, repetitive or excessive.
          </>,
        ],
      },
      <>
        We may need to request specific information from you to help us confirm
        your identity and ensure your right to access your personal data (or to
        exercise any of your other rights). This is a security measure to ensure
        that personal data is not disclosed to any person who has no right to
        receive it. In an effort to speed up our response, we may also contact
        you to ask you for further information in relation to your request. You
        can exercise several of your rights through the personal information
        section of your account. To exercise your other rights you can file a
        request by emailing us at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
          href="mailto:hello@tastiest.io"
        >
          hello@tastiest.io
        </a>
        .
      </>,
    ],
  },

  {
    title: 'Information Usage',
    subsections: [
      <>We will only use your personal data when the law allows us to.</>,
      <>
        Pursuant to GDPR, we will use your personal data in one or more of the
        following circumstances:
      </>,
      {
        title: null,
        subsections: [
          <>
            Where we need to perform the contract we are about to enter into or
            have entered into with you
          </>,
          <>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests
          </>,
          <>Where we need to comply with a legal or regulatory obligation</>,
          <>With your consent</>,
        ],
      },
      <>
        <span className="font-bold">International Transfers</span> Your personal
        data may be stored or transferred to countries outside the EEA for the
        purposes described in this Statement. When we store or transfer your
        personal data outside the EEA, we take the following precautions to
        ensure that your personal data is properly protected.
      </>,

      <>
        Whenever we store or transfer your personal data outside the EEA, we
        will do so in accordance with applicable law and we will ensure a
        similar degree of protection is afforded to it by implementing
        appropriate safeguards. Transfers of personal data are made:
      </>,
      {
        title: null,
        subsections: [
          <>
            to a country recognised by the European Commission as providing an
            adequate level of protection; or
          </>,
          <>
            to a country which does not offer adequate protection but whose
            transfer has been governed by the standard contractual clauses of
            the European Commission or by implementing other appropriate
            cross-border transfer solutions to provide adequate protection.
          </>,
        ],
      },

      <>
        By using our services, you understand that your personal data may be
        transferred to our facilities and those third parties with whom we share
        it as described in this Statement.
      </>,
    ],
  },
];

function Privacy() {
  return (
    <>
      <Head>
        <title>{generateTitle('Privacy')}</title>
      </Head>

      <LegalPage
        pageTitle={'PRIVACY AND COOKIES'}
        pageDescription="Effective as of the 21st October 2020"
        sections={sections}
      >
        <div className="flex flex-col space-y-4 text-justify">
          <p className="">
            We know that sharing your personal information with us is based on
            trust. We take this seriously and are committed to ensuring that we
            respect your privacy when you visit our website or use our services.
            Please review this Statement carefully to learn about our privacy
            practices.
          </p>

          <p>
            We operate an online service that provides users with
            recommendations for restaurants. In this Statement, this is referred
            to as our Services.
          </p>

          <p>
            Our Services are owned and operated by Tastiest Technologies Ltd. By
            visiting our websites and related applications, whether on a
            computer, phone, tablet or similar device (these are all referred to
            as a “Device”), you are accepting the practices described below.
          </p>
        </div>
      </LegalPage>
    </>
  );
}

export default Privacy;
