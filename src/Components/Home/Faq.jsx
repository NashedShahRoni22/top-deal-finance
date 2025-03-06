import React, { useState } from "react";
import { FaMinus, FaPlusSquare } from "react-icons/fa";

export default function Faq() {
  const [show, setShow] = useState({
    id: null,
    state: false,
  });
  const faqData = [
    {
      question: "What is a mortgage?",
      answer:
        "A mortgage is a type of loan specifically used to purchase property. The loan is secured by the property itself, meaning the lender can take possession of the property if the borrower fails to repay the loan.",
    },
    {
      question: "How do mortgage interest rates work?",
      answer:
        "Mortgage interest rates are the cost of borrowing money to buy a property, expressed as a percentage of the loan amount. Interest rates can be fixed or variable, depending on the loan agreement. Fixed rates stay the same throughout the term, while variable rates may change over time based on market conditions.",
    },
    {
      question: "What is an EMI?",
      answer:
        "EMI (Equated Monthly Installment) is the amount you pay monthly to repay your mortgage loan. It includes both the principal and interest portions of your loan. The EMI amount depends on the loan amount, interest rate, and loan tenure.",
    },
    {
      question: "What documents are required to apply for a mortgage?",
      answer:
        "Typically, you’ll need proof of income, identification documents, bank statements, tax returns, credit report, and details of the property you intend to purchase. The exact requirements may vary depending on the lender and the type of mortgage you’re applying for.",
    },
    {
      question: "How long does it take to get approved for a mortgage?",
      answer:
        "The approval process can take anywhere from a few days to several weeks, depending on the complexity of your application, the lender’s requirements, and your financial profile. A faster approval may be possible if you provide all necessary documents promptly.",
    },
    {
      question:
        "What is the difference between a fixed-rate and a variable-rate mortgage?",
      answer:
        "A fixed-rate mortgage has an interest rate that remains the same for the entire loan term, providing predictable monthly payments. A variable-rate mortgage (also known as an adjustable-rate mortgage) has an interest rate that can change over time, which means your payments may fluctuate based on market conditions.",
    },
    {
      question: "What is LVR (Loan-to-Value Ratio)?",
      answer:
        "The Loan-to-Value Ratio (LVR) is the ratio of the loan amount to the appraised value of the property. A higher LVR means you’re borrowing more compared to the value of the property, which may result in higher risks for the lender. Lenders often require a deposit to reduce the LVR, with lower LVRs potentially leading to better loan terms.",
    },
    {
      question: "Can I repay my mortgage early?",
      answer:
        "Yes, most lenders allow early repayment of your mortgage, either in full or in part. However, some may charge early repayment fees or penalties. It’s a good idea to check with your lender for any terms related to early repayment before proceeding.",
    },
  ];

  return (
    <div className="!py-10 md:!py-20">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-center">
        Frequently asked question
      </h2>
      {/* Mortgage Broker Features Cards */}
      <div className="grid gap-8 !mt-8 md:!mt-16">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="!p-4 min-w-full border-b border-[#CEB666]"
          >
            <div className="flex justify-between items-center">
              <h5 className="font-semibold md:text-xl !my-2.5 w-5/6">{faq.question}</h5>
              <div>
                {show.id === index && show.state ? (
                  <FaMinus onClick={()=>{
                    setShow({
                        id:null,
                        state:false,
                    })
                  }} className="text-2xl cursor-pointer text-[#CEB666]" />
                ) : (
                  <FaPlusSquare onClick={()=>{
                    setShow({
                        id:index,
                        state:true,
                    })
                  }} className="text-2xl cursor-pointer text-[#CEB666]" />
                )}
              </div>
            </div>
            {show.id === index && show.state && (
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
