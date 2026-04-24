import { BsTelephoneFill, BsCalendarCheckFill } from "react-icons/bs";
import {
  LuBrainCircuit,
  LuFileBadge2,
  LuLandmark,
  LuHeartHandshake,
} from "react-icons/lu";

const PhoneIcon = () => <BsTelephoneFill size={18} color="white" />;

const CalendarIcon = () => <BsCalendarCheckFill size={16} color="white" />;

// Feature Icons — stroke-based, colored via className (size controlled by parent)
const ExpertIcon = ({ className }: { className?: string }) => (
  <LuBrainCircuit size={24} className={className} />
);

const VisaIcon = ({ className }: { className?: string }) => (
  <LuFileBadge2 size={24} className={className} />
);

const PartnershipIcon = ({ className }: { className?: string }) => (
  <LuLandmark size={24} className={className} />
);

const LifetimeIcon = ({ className }: { className?: string }) => (
  <LuHeartHandshake size={24} className={className} />
);

export { PhoneIcon, CalendarIcon, ExpertIcon, VisaIcon, PartnershipIcon, LifetimeIcon };