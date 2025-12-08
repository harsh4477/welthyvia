import * as React from "react";
import * as LucideIcons from "lucide-react";
import Heading from "../../components/Heading/Heading";

type IconName = keyof typeof LucideIcons;

interface GovernanceItem {
  iconName: IconName;
  title: string;
  description: string;
}

const Governance = () => {
  const governanceItems: GovernanceItem[] = [
    {
      iconName: "Shield",
      title: "Accountability",
      description:
        "Executive management set strategic targets and are accountable for it. In turn, we are accountable to the stakeholders.",
    },
    {
      iconName: "Users",
      title: "Responsibility",
      description: "The clear separation and delegation of authority.",
    },
    {
      iconName: "Target",
      title: "Transparency and disclosure",
      description:
        "Stakeholders have clear and complete information of the financial calls which we take, so they can assess the Company's performance and situation.",
    },
    {
      iconName: "ShieldCheck",
      title: "Investor Protection",
      description:
        "All investor interests are safeguarded through robust processes, controls, and conflict-free decision-making.",
    },
  ];
  return (
    <div className="px-4 lg:px-10 py-20 h-full bg-white">
      <Heading title="Our Governance" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {governanceItems.map((item, index) => {
          const IconComponent = LucideIcons[
            item.iconName as keyof typeof LucideIcons
          ] as React.ElementType;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-[0_0_5px_5px_#00000008]">
              <div className="text-blue-600 mb-4">
                {React.createElement(IconComponent, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Governance;
