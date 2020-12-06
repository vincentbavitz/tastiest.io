import React from 'react';
import { Contained } from '../../Contained';
import { RecommendForm } from '../../RecommendForm';
import { ArticleWidgetOrderNow } from '../widgets/ArticleWidgetOrderNow';
import { ArticleSectionFeatureImage } from './ArticleSectionFeatureImage';

export function ArticleSectionContent() {
  return (
    <Contained>
      <div className="flex space-x-10">
        <div className="w-8/12 mt-16">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore
          consequatur. Architecto, aperiam impedit. Corrupti inventore eius,
          exercitationem odit est fugit, iste aspernatur incidunt quod iure
          aliquid fugiat. Earum, voluptate. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Hic, labore consequatur. Architecto,
          aperiam impedit. Corrupti inventore eius, exercitationem odit est
          fugit, iste aspernatur incidunt quod iure aliquid fugiat. Earum,
          voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
          inventore eius, exercitationem odit est fugit, iste aspernatur
          incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Hic, labore consequatur.
          Architecto, aperiam impedit. Corrupti inventore eius, exercitationem
          odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.
          Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
          inventore eius, exercitationem odit est fugit, iste aspernatur
          incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Hic, labore consequatur.
          Architecto, aperiam impedit. Corrupti inventore eius, exercitationem
          odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.
          Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
          inventore eius, exercitationem odit est fugit, iste aspernatur
          incidunt quod iure aliquid fugiat. Earum, voluptate.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore
          consequatur. Architecto, aperiam impedit. Corrupti inventore eius,
          exercitationem odit est fugit, iste aspernatur incidunt quod iure
          aliquid fugiat. Earum, voluptate. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Hic, labore consequatur. Architecto,
          aperiam impedit. Corrupti inventore eius, exercitationem odit est
          fugit, iste aspernatur incidunt quod iure aliquid fugiat. Earum,
          voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
          inventore eius, exercitationem odit est fugit, iste aspernatur
          incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Hic, labore consequatur.
          Architecto, aperiam impedit. Corrupti inventore eius, exercitationem
          odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.
          Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
          inventore eius, exercitationem odit est fugit, iste aspernatur
          incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Hic, labore consequatur.
          Architecto, aperiam impedit. Corrupti inventore eius, exercitationem
          odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.
          Earum, voluptate.
        </div>

        <div className="w-4/12 mt-12">
          <ArticleWidgetOrderNow />
        </div>
      </div>

      <ArticleSectionFeatureImage />

      <RecommendForm
        dish="Xiao Long Bao"
        city={{ name: 'London', lat: 0, lng: 0 }}
      />
    </Contained>
  );
}
