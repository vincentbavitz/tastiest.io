import React, { ReactNode } from 'react';
import { Contained } from './Contained';

export interface ILegalSection {
  title: string | null;
  subsections: Array<JSX.Element | ILegalSection>;
}

export interface LegalSectionProps extends ILegalSection {
  sectionNumber: number | string;
}

interface LegalPageProps {
  pageTitle: string;
  pageDescription: string;
  sections: ILegalSection[];
  children?: ReactNode;
}

export const LegalPage = (props: LegalPageProps) => {
  const { pageTitle, pageDescription, sections, children } = props;

  return (
    <>
      <Contained maxWidth={800}>
        <div className="py-10">
          <h1 className="text-xl leading-7 tracking-wide text-center font-primary text-primary">
            <span className="text-3xl">{pageTitle}</span>
            <br />
            <span className="">TASTIEST TECHNOLOGIES LTD</span>
          </h1>
          <div className="w-full h-px pt-6 mb-10 border-b-2 border-secondary"></div>
          <p className="pt-4 text-sm text-center">{pageDescription}</p>

          <div className="pt-10 pb-4">{children}</div>

          {sections.map((section, index) => (
            <div key={index} className="pb-10">
              <Section {...section} sectionNumber={index + 1} />
            </div>
          ))}
        </div>
      </Contained>
    </>
  );
};

const Section = (props: LegalSectionProps) => {
  const { title, subsections, sectionNumber } = props;

  return (
    <div className="">
      {title && (
        <h4 className="py-10 pb-4 text-xl font-semibold text-center uppercase">
          <span className="font-normal">{sectionNumber}. </span>
          {title}
        </h4>
      )}

      {subsections.map((subsection, index) => {
        if (subsection?.['subsections']?.length) {
          return (
            <div key={index} className="pt-2 pl-3">
              <Section
                {...(subsection as ILegalSection)}
                sectionNumber={`${sectionNumber}.${index}`}
              />
            </div>
          );
        }

        return (
          <p key={index} className="pt-1">
            <span className="text-lg tracking-wider text-primary font-primary">
              {sectionNumber}.{index + 1}.
            </span>{' '}
            {subsection}
          </p>
        );
      })}
    </div>
  );
};
