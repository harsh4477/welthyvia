import FAQSection from "../../components/FAQSection/FAQSection";
import Heading from "../../components/Heading/Heading";

const Resources = () => {
  return (
    <div className="bg-white px-4 lg:px-10 pt-24 pb-10 md:py-20 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-5 md:gap-10">
        <Heading title="Help & support (FAQ)" className="" />
        <FAQSection />
      </div>
      <div className="flex flex-col gap-5 md:gap-10">
        <Heading title="Privacy Policy" />
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
      <div className="flex flex-col gap-5 md:gap-10">
        <Heading title="Legal Disclaimer " />
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
      <div className="flex flex-col gap-5 md:gap-10">
        <Heading title="Compliance & Governance Statement" />
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
