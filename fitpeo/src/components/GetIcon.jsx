import { FaUser } from 'react-icons/fa';
import { GiArm, GiTooth } from 'react-icons/gi';

export const getIcon = (icon, iconColor) => {
  switch (icon) {
    case 'GiTooth':
      return <GiTooth color={iconColor} />;
    case 'GiArm':
      return <GiArm color={iconColor} />;
    case 'FaUser':
      return <FaUser color={iconColor} />;
    default:
      return;
  }
};
