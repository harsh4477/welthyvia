import { useState } from "react";
import Heading from "../../components/Heading/Heading";
import * as LucideIcons from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const Resources = () => {
  const faqData: FAQItem[] = [
    {
      question: "How do I know that my money is safe with Wealthyvia?",
      answer:
        "Wealthyvia never handles your money directly. Funds move securely from your bank to the regulated custodian or product provider you select. We recommend only after thorough due diligence with investor security as a priority.",
    },
    {
      question: "How do we know Wealthyvia’s advice is reliable?",
      answer:
        "Our team is experienced, licensed, and has managed through multiple market cycles with a clean compliance record. Every recommendation follows regulatory suitability norms and is supported by documented research",
    },
    {
      question: "What is the tax treatment?",
      answer:
        "We are fully transparent. All fees or commissions are disclosed upfront and depend on the scope of work. Our fee model is typically more efficient than large institutions offering restricted advice.",
    },
    {
      question:
        "What is Wealthyvia’s investment approach in the Category III AIF?",
      answer:
        "Wealthyvia follows a high-conviction, research-driven approach using proprietary analytics to identify scalable businesses early, with a clear focus on consistent absolute returns and disciplined risk control.",
    },
    {
      question: "How does Wealthyvia differentiate its AIF Category 3 fund?",
      answer:
        "Wealthyvia’s strategy  focuses on equity, long-only, unleveraged, value-based, and sector/market-cap agnostic portfolio management looking into megatrends  of tomorrow to optimize returns with controlled risk.",
    },
    {
      question: "How does Wealthyvia manage risk?",
      answer:
        "Through conservative leverage use, strict exposure limits, strong downside protection, and a risk framework refined over a decade of PMS performance.",
    },
    {
      question: "What is your fee?",
      answer:
        "We are transparent. Accordingly, we will disclose our fees and any commissions to you before you sign anything. Contact us for more information.",
    },
    {
      question: "Can an investor redeem units from this fund anytime?",
      answer:
        "Wealthyvia is an open-ended fund with a lock-in period of 1 year.",
    },
    {
      question: "Is this fund suitable for all investors?",
      answer:
        "Category 3 funds are generally aimed at high-net-worth investors or accredited investors due to the complex strategies and higher risk profile involved.",
    },
    {
      question:
        "What are the regulatory compliance and reporting requirements?",
      answer:
        "Category 3 funds must adhere to SEBI rules regarding minimum corpus, risk management, leverage caps, exposure limits and reporting.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 lg:px-10 py-20 bg-white flex flex-col gap-16">
      <div className="flex flex-col">
        <Heading title="Help & support (FAQ)" className="mb-12" />

        <div className="flex flex-col gap-2">
          {/* <h3 className="text-3xl font-semibold mb-6 text-gray-700">Frequently Asked Questions</h3> */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="font-medium text-gray-800 text-lg">
                    {item.question}
                  </span>
                  <LucideIcons.ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <div className="pb-2 text-gray-600">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Heading title="Privacy Policy" className="mb-12" />
        <p className="text-base text-gray-500">
          Wealthyvia Ventures is committed to safeguarding the privacy and
          confidentiality of all personal data collected in the course of
          delivering investment advisory, management, and related services.
          “Personal data” includes any information capable of identifying an
          individual, such as name, contact details, address, financial
          information, and any data provided for onboarding, regulatory, or
          transactional purposes.
        </p>
        <p className="text-base text-gray-500">
          Personal data is collected and used strictly for investment advisory
          and management services, regulatory due diligence, anti-money
          laundering and anti-terrorist financing checks, risk assessments,
          statutory compliance, internal analysis, and, where permitted, for
          communication and marketing of our services.
        </p>
        <p className="text-base text-gray-500">
          Data may be processed across jurisdictions and may be shared with
          authorised third parties only where necessary for service delivery,
          regulatory compliance, or where disclosure is required by applicable
          law. All employees and authorised processors handling personal data
          are bound by confidentiality obligations and are required to maintain
          strict data security standards.
        </p>
        <p className="text-base text-gray-500">
          Personal data is retained only for as long as necessary to fulfil the
          purpose for which it was collected and to meet regulatory obligations,
          which generally require record retention for at least seven years and
          longer where legally mandated. Clients may opt out of receiving
          marketing communications at any time by contacting{" "}
          <a
            href="mailto:invest@wealthyvia.com"
            className="text-blue-600 hover:underline"
          >
            invest@wealthyvia.com
          </a>
          .
        </p>
        <p className="text-base text-gray-500">
          Wealthyvia Ventures implements appropriate technical and
          organisational safeguards to protect personal data from unauthorised
          access, loss, or misuse.
        </p>
      </div>
      <div className="flex flex-col">
        <Heading title="Legal Disclaimer " className="mb-12" />
        <p className="text-base text-gray-500">
          The information presented on this website is provided for general
          informational purposes only and does not constitute an offer to sell,
          a solicitation to invest, or a recommendation to participate in any
          investment product managed or advised by Wealthyvia Ventures.
          Investment in a SEBI-registered Category III AIF is subject to
          eligibility criteria, regulatory restrictions, risk factors, and
          specific terms outlined in the Private Placement Memorandum and
          related offering documents.
        </p>
        <p className="text-base text-gray-500">
          Past performance is not indicative of future results. The value of
          investments may rise or fall based on market conditions, economic
          factors, and other risks inherent to financial markets. Wealthyvia
          Ventures does not guarantee returns, capital protection, or
          performance of any investment product.
        </p>
        <p className="text-base text-gray-500">
          While reasonable effort is made to ensure accuracy and completeness,
          Wealthyvia Ventures does not assume liability for any errors,
          omissions, or reliance on the information provided on this website.
          Any decision to invest should be based on a thorough review of
          official fund documentation and independent professional advice.
        </p>
        <p className="text-base text-gray-500">
          Use of this website constitutes acceptance of this disclaimer and all
          applicable terms of use.
        </p>
      </div>
      <div className="flex flex-col">
        <Heading title="Compliance & Governance Statement" className="mb-12" />
        <p className="text-base text-gray-500">
          Wealthyvia Ventures operates with a strong commitment to regulatory
          compliance, governance, and investor protection. As a SEBI-registered
          Category III Alternative Investment Fund, the organisation adheres to
          all regulatory requirements under the SEBI (Alternative Investment
          Funds) Regulations, including eligibility verification, due diligence,
          risk management, record-keeping, reporting, and investor disclosure
          standards.
        </p>
        <p className="text-base text-gray-500">
          The firm maintains robust internal controls, multi-layered compliance
          oversight, and structured risk management frameworks designed to
          ensure transparent operations, ethical conduct, and prudent
          stewardship of investor capital. Portfolio decision-making, valuation
          practices, and operational processes are executed with
          institutional-grade discipline and documented procedures.
        </p>
        <p className="text-base text-gray-500">
          Wealthyvia Ventures also observes all applicable laws concerning data
          protection, anti-money laundering (AML), anti-terrorist financing
          (CFT), and fraud prevention. Regular internal reviews, third-party
          audits where required, and continuous monitoring support adherence to
          evolving regulatory expectations.
        </p>
        <p className="text-base text-gray-500">
          The organisation is committed to fair treatment of investors,
          protection of confidential information, disclosure integrity, and
          maintaining the highest standards of professionalism and fiduciary
          responsibility.
        </p>
      </div>
    </div>
  );
};

export default Resources;
