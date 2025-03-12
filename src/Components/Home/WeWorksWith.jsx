import React from "react";
import Marquee from "react-fast-marquee";

export default function WeWorksWith() {
  const images = [
    {
      src: "https://i.ibb.co/Wgb70tp/adelaide-bank-mortgage.png",
      alt: "adelaide bank best home loan rates",
    },
    {
      src: "https://i.ibb.co/tmXB59f/afm-services.png",
      alt: "afm services in sydney Australia",
    },
    {
      src: "https://i.ibb.co/fqvMSS7/allianz-home-insurance.png",
      alt: "Allianz home insurace with smart move finance",
    },
    {
      src: "https://i.ibb.co/Xpn6Ndg/amp-bank-home-loan.jpg",
      alt: "Smart move finance works with amp bank",
    },
    {
      src: "https://i.ibb.co/1qmTrNb/anz-personal-loan.png",
      alt: "Mortgage home and personal loan with ANZ",
    },
    {
      src: "https://i.ibb.co/0G244f8/auswide-bank.png",
      alt: "Auswide bank home loan",
    },
    {
      src: "https://i.ibb.co/tCctnjv/bank-australia-sydney.png",
      alt: "Smart Move Finance Works with Bank Australia Sydney",
    },
    {
      src: "https://i.ibb.co/9ZjYD3M/bank-of-syney.png",
      alt: "Smart Move Finance Works with Bank of Sydney",
    },
    {
      src: "https://i.ibb.co/MVvh7kc/bank-west-home-loan.png",
      alt: "Affordable home loan rates with bank west",
    },
    {
      src: "https://i.ibb.co/6y1s7d8/citi-bank-housing-loan.png",
      alt: "Citi bank housing Loan",
    },
    {
      src: "https://i.ibb.co/mRH2XhZ/connective-home-loan.png",
      alt: "Connective home loan",
    },
    {
      src: "https://i.ibb.co/D5PQKcS/la-trobe-financial.png",
      alt: "la trobe financial interest rates",
    },
    {
      src: "https://i.ibb.co/2W493my/me-bank-mortgage.png",
      alt: "me bank mortgage rates",
    },
    {
      src: "https://i.ibb.co/7nWJWhS/mkm-capital.png",
      alt: "mkm capital financial services",
    },
    {
      src: "https://i.ibb.co/3hGTg2T/nab-mortgage-loan.png",
      alt: "nab home and business mortgage loan",
    },
    {
      src: "https://i.ibb.co/g4k1ZzF/redrock.png",
      alt: "Smart move finance works with redrock",
    },
    {
      src: "https://i.ibb.co/ZLp7DZ0/suncorp-sydney.png",
      alt: "Contact us for suncorp bank home loan",
    },
    {
      src: "https://i.ibb.co/w0mkpN9/westpack-loan.png",
      alt: "Westpac loan with smart move finance",
    },
  ];

  return (
    <section className="!py-5 md:!py-10">
      <Marquee>
        {images.map((i) => (
          <img key={i} src={i?.src} alt={i.alt} className="h-[40px] md:h-[60px] !mx-5" />
        ))}
      </Marquee>
    </section>
  );
}
