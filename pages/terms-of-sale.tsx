import { ILegalSection, LegalPage } from 'components/LegalPage';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import { generateTitle } from 'utils/metadata';

const sections: ILegalSection[] = [
  {
    title: 'General Information',
    subsections: [
      <>These Terms of Sale apply to every Offer you purchase from Tastiest.</>,
      <>
        Tastiest means Tastiest Technologies Ltd (trading as Tastiest), a
        company incorporated under the laws of England and Wales registered in
        England under company number 12755129.
      </>,
      <>
        <span className="font-bold">Offer</span> means the offer for the
        products and/or services promoted on the Tastiest website or app which
        when purchased entitles the Purchaser to either receive the Merchant
        Offering from the Merchant during the period of time stated in the Offer
        (the “Redemption Period”).
      </>,
      <>
        The Merchant Offering shall mean the goods and/or services to be
        supplied and/or provided by the Merchant to the Purchaser, as specified
        on Tastiest’s Site and in the Offer.
      </>,
      <>
        The Merchant is a third party unrelated to Tastiest that sells, supplies
        and/or provides the Merchant Offering. The contract for the supply and
        purchase of the Merchant Offering will be between you and the Merchant
        you redeem the Offer with and Tastiest will conclude the contract on
        behalf of, and as agent for, the Merchant in all cases. Tastiest does
        not sell, supply and/or provide the Merchant Offering. It only sells and
        supplies the Offer.
      </>,
      <>
        Tastiest reserves the right to unilaterally amend these Terms of Sale at
        any time. All amendments to these Terms of Sale will be posted on-line.
        You will be bound only to the version of the Terms of Sale you agreed to
        at the time you purchase an Offer.
      </>,
    ],
  },

  {
    title: 'Purchase of an Offer',
    subsections: [
      <>
        You must be at least 18 years old to purchase an Offer. Before you can
        make a purchase you need to register and create an account with
        Tastiest.
      </>,
      <>
        By clicking on the “Buy Now” button you submit an offer to Tastiest to
        purchase the Offer. However, the purchase of the Offer is not complete
        until you receive an email from Tastiest confirming acceptance of your
        offer. Tastiest expressly reserves the right to reject your order. In
        addition, even if Tastiest has accepted your order, it can cancel the
        contract at any time if it reasonably suspects that you have committed
        or that you may be committing any fraud against Tastiest, an affiliated
        third party of Tastiest or the Merchant.
      </>,
    ],
  },
  {
    title: 'Redemption of an Offer',
    subsections: [
      <>Unless expressly stated otherwise:</>,
      {
        title: null,
        subsections: [
          <>the Offer can only be redeemed once;</>,
          <>
            the Offer can only be redeemed with the Merchant and not with
            Tastiest;
          </>,
          <>the Offer is valid for one person only; and</>,
          <>
            you must follow the redemption instructions associated with the
            Offer when you redeem the Offer with the Merchant.
          </>,
        ],
      },
      <>
        In order to redeem an Offer you must present your purchase confirmation
        to the Merchant within the Redemption Period. If you do not redeem the
        Offer within the Redemption Period, the Offer expires automatically and
        cannot be redeemed anymore.
      </>,
      <>
        Unless expressly stated otherwise, the Offer does not entitle the
        Purchaser to receive the Merchant Offering at a specific time. You are
        strongly recommended to contact the Merchant at an early stage. Doing so
        will give you the best chance of securing your preferred time for the
        supply and/or provision of the Merchant Offering. Tastiest cannot
        influence the timing of supply and/or provision of the Merchant
        Offering.
      </>,
      <>
        If you decide to redeem the Offer for goods and/or services other than
        the Merchant Offering, you will not be entitled to a credit, cash refund
        or new Offer for the difference between the value of the Merchant
        Offering and the actual value of the goods and/or services supplied
        and/or provided by the Merchant to you.
      </>,
      <>
        Offers are redeemable in their entirety only. If, for whatever reason,
        you redeem the Offer with a Merchant for less than the original
        (un-discounted) value of the Merchant Offering, you are not entitled to
        a credit, cash refund or new Offer for the difference between the
        original (un-discounted) value and the redeemed value.
      </>,
      <>
        On behalf of the Merchant, Tastiest may collect booking fees or other
        costs associated with the purchase and/or redemption of a Offer. All
        such fees or costs (if any) will be communicated to you before you
        purchase the Offer.
      </>,

      <>
        In the event that a Merchant cannot supply and/or provide the Merchant
        Offering as described for unforeseen reasons, Tastiest will notify you
        on behalf of the Merchant as soon as possible by email.
      </>,
    ],
  },
  {
    title: 'Use of an Offer',
    subsections: [
      <>
        Any purchase of a Offer is for your non-commercial, personal use only
        (although you may give the Offer to someone else for their
        non-commercial, personal use). The commercial trade of an Offer is
        prohibited. The reproduction of a Offer is prohibited.
      </>,
      <>
        Your Offer is solely your responsibility. Neither Tastiest nor the
        Merchant are responsible for lost or stolen Offers or for retrieving
        Offer reference numbers or Offer security codes.
      </>,
      <>
        You promise not to provide false data including false names, addresses
        and/or contact or payment details; or engage in any unlawful activity in
        connection with the purchase or use of a Offer, or allow anyone else to
        do so.
      </>,
      <>
        Any attempt to redeem an Offer contrary to these Terms of Sale may
        render an Offer purchase void at Tastiest’s discretion.
      </>,
    ],
  },
  {
    title: 'Cancellation (and exceptions), Refunds and Problems',
    subsections: [
      <>
        You have a statutory right to cancel your purchase of the Offer within
        14 calendar days after the day you receive the confirmation email (the
        “Offer Cancellation Period”). However, if you redeem your Offer during
        the Offer Cancellation Period, you expressly request the services to
        begin being provided to you, and you acknowledge that you lose your
        right to cancel the purchase of the Offer. Since Tastiest is not
        responsible for the supply or provision of the Merchant Offering, once
        your Offer is redeemed Tastiest has completed its services to you in
        full.
      </>,
      <>
        If you want to cancel your purchase of a Offer you can do so by
        contacting us at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
          href="mailto:support@tastiest.io"
        >
          support@tastiest.io
        </a>
        .
      </>,

      <>
        If you cancel your purchase of the Offer in accordance with this section
        5, Tastiest will refund you for all payments made as part of your
        purchase within 14 calendar days from the day on which you informed
        Tastiest about your cancellation.
      </>,
      <>
        If you redeem your Offer, but the Merchant has not properly provided you
        with the Merchant Offering, or if you have a complaint regarding the
        provision of the Merchant Offering, you must take action against the
        Merchant directly. This is because the Merchant, and not Tastiest, is
        responsible for the supply and/or provision of the Merchant Offering.
        Tastiest only sells and supplies the Offer. However, if you and the
        Merchant cannot agree on how to resolve the complaint, Tastiest may,
        upon your request, try to help resolve the issue between you and the
        Merchant.
      </>,
      <>
        Unless you expressly inform Tastiest in advance not to, any refund will
        be refunded to you via your original method of payment. If your original
        method of payment has been cancelled, expired or has otherwise changed,
        you must inform the Tastiest team immediately at{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
          href="mailto:support@tastiest.io"
        >
          support@tastiest.io
        </a>
        . If you fail to do this and you are refunded to your original method of
        payment, you may need to coordinate with your bank or your payment
        services provider to obtain your refund. Tastiest will not provide more
        than one refund.
      </>,
      <>
        You have 14 days from the date you receive the refund to reject it. If
        you do not reject the refund during these 14 days, the refund shall be
        in full and final settlement of any and all claims you may have against
        Tastiest related to, arising out of, or connected to that Offer.
      </>,
    ],
  },
  {
    title: 'Responsibility for the Merchant Offering',
    subsections: [
      <>Please note that the Merchant, and not Tastiest , is:</>,
      {
        title: null,
        subsections: [
          <>the seller, supplier and/or provider of the Merchant Offering;</>,
          <>
            the party who enters into a contract with the Offer Holder when the
            Offer is redeemed; and
          </>,
          <>
            solely responsible for providing the Offer Holder with the Merchant
            Offering and for the Merchant Offerings themselves.
          </>,
        ],
      },
    ],
  },
  {
    title: 'Tastiest’s Standards of Services and Liability',
    subsections: [
      <>Tastiest promises that:</>,
      {
        title: null,
        subsections: [
          <>
            it will exercise reasonable care and skill in performing its
            obligations under these Terms of Sale;
          </>,
          <>
            the Offers are of satisfactory quality and fit for their purpose;
            and
          </>,
          <>
            it shall not contravene the requirements of fairness or professional
            diligence in what it does.
          </>,
        ],
      },
      <>
        Tastiest is always liable for: (a) death and personal injury caused by
        Tastiest’s negligence; (b) fraud or fraudulent misrepresentation made by
        itself; or (c) any implied contractual terms that cannot be excluded or
        limited under applicable law.
      </>,
      <>
        Other than as set out in section 7.2 above, Tastiest is not liable for
        any other losses or damages you may suffer, including any indirect or
        consequential losses.
      </>,
      <>
        Tastiest does not promise the completeness, fitness for purpose or
        legality of the Merchant Offering. Tastiest is not liable for the
        quality, safety, usability or any other aspect of the Merchant Offering.
      </>,
      <>
        Tastiest is not liable for any breach of an obligation under these Terms
        of Sale where it is unable to carry out its obligations by any cause
        outside of its reasonable control.
      </>,
      <>
        Other than the liability arising under section 7.2, Tastiest’s total
        liability to you will in no circumstances exceed the amount of 200% the
        purchase price of the Offer.
      </>,
    ],
  },
  {
    title: 'Tastiest’s Site',
    subsections: [
      <>
        <span className="font-bold">Tastiest’s Site</span> (the “Site”) means
        the Internet website, mobile applications, electronic communications or
        services, or any location at which you can purchase a Offer from
        Tastiest. The Site on which Tastiest markets the Offers is owned by
        Tastiest Technologies Ltd. You can find more information about the terms
        of use of the Site, which are expressly incorporated into these Terms of
        Sale.
      </>,
    ],
  },
  {
    title: 'Miscellaneous',
    subsections: [
      <>
        If you breach these Terms of Sale and Tastiest takes no action against
        you this does not mean that Tastiest has waived its rights and remedies
        with regard to your breach. Tastiest may still take action or exercise
        its rights and remedies for that action, or any other situation, where
        you breach your obligations under these Terms of Sale.
      </>,
      <>
        Unless otherwise stated within these Terms of Sale, notices to be given
        to either party shall be in writing and shall be delivered by electronic
        mail (other than if you are sending a notice to Tastiest for the purpose
        of legal process) or by pre-paid post. Any notice Tastiest sends to you
        will be to the address you supplied to Tastiest when you registered for
        your Tastiest account. You can send any notice to Tastiest at the
        registered office address listed on Companies House.
      </>,
      <>
        If any provision of these Terms of Sale should be held to be invalid or
        unenforceable, the validity and enforceability of the remaining
        provisions of these Terms of Sale are not affected. Such invalid or
        unenforceable provision shall be replaced by a valid and enforceable
        provision which most closely achieves the economic effect contemplated
        by the invalid or unenforceable provision.
      </>,
      <>
        We will do our best to resolve any disputes about these Terms of Sale.
        If you wish to bring a legal claim against us, you must do so within the
        United Kingdom (and English courts shall have the exclusive jurisdiction
        for your legal claim). The laws of England and Wales shall apply. The
        previous sentence applies to all non-contractual relationships between
        you and us. The parties also agree that the United Nations Convention
        for the International Sale of Goods does not apply to this transaction.
      </>,
    ],
  },
];

function TermsOfSale() {
  return (
    <>
      <Head>
        <title>{generateTitle('Terms of Sale')}</title>
      </Head>

      <NextSeo
        title="Tastiest - Terms of Sale"
        description="Tastiest's Terms of Sale"
        openGraph={{
          title: 'Tastiest - Terms of Sale',
          description: "Tastiest's Terms of Sale",
          images: [
            {
              url:
                'https://tastiest.io/assets/seo/page/terms-of-sale-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Terms of Sale Hero',
            },
            {
              url:
                'https://tastiest.io//assets/seo/page/terms-of-sale-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Terms of Sale Hero',
            },
          ],
        }}
      />

      <LegalPage
        pageTitle={'TERMS OF SALE'}
        pageDescription="This page sets out the terms for the use of the Site offered by Tastiest Technologies Ltd and the Services we offer."
        sections={sections}
      />
    </>
  );
}

export default TermsOfSale;
