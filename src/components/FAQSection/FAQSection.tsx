import { useState } from "react";
import * as LucideIcons from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqData: FAQItem[] = [
  {
    question: "How do I know that my money is safe with Wealthyvia?",
    answer:
      "Wealthyvia never handles your money directly. Funds move securely from your bank to the regulated custodian or product provider you select. We recommend only after thorough due diligence with investor security as a priority.",
  },
  {
    question: "How do we know Wealthyvia's advice is reliable?",
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
      "What is Wealthyvia's investment approach in the Category III AIF?",
    answer:
      "Wealthyvia follows a high-conviction, research-driven approach using proprietary analytics to identify scalable businesses early, with a clear focus on consistent absolute returns and disciplined risk control.",
  },
  {
    question: "How does Wealthyvia differentiate its AIF Category 3 fund?",
    answer:
      "Wealthyvia's strategy  focuses on equity, long-only, unleveraged, value-based, and sector/market-cap agnostic portfolio management looking into megatrends  of tomorrow to optimize returns with controlled risk.",
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
    answer: "Wealthyvia is an open-ended fund with a lock-in period of 1 year.",
  },
  {
    question: "Is this fund suitable for all investors?",
    answer:
      "Category 3 funds are generally aimed at high-net-worth investors or accredited investors due to the complex strategies and higher risk profile involved.",
  },
  {
    question: "What are the regulatory compliance and reporting requirements?",
    answer:
      "Category 3 funds must adhere to SEBI rules regarding minimum corpus, risk management, leverage caps, exposure limits and reporting.",
  },
];

interface FAQSectionProps {
  faqData?: FAQItem[];
  title?: string;
  className?: string;
}

const FAQSection = ({
  faqData = defaultFaqData,
  className = "",
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={` bg-white ${className}`}>
      <div className="w-full lg:max-w-6xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="font-medium text-gray-800 text-base md:text-lg">
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
              className={`px-6 pb-4 pt-2 text-gray-600 transition-all duration-200 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
