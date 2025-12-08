import * as React from "react";
import Heading from "../../components/Heading/Heading";
import GovernanceGrid from "../../components/GovernanceGrid/GovernanceGrid";
import { governanceItems } from "../../data/governanceItems";

const Governance: React.FC = () => {
  return (
    <div className="pt-24 pb-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <Heading title="Our Governance" className="mb-6 md:mb-16" />
      <GovernanceGrid items={governanceItems} />
    </div>
  );
};

export default Governance;
