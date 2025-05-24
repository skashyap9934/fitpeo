import { FaUser } from 'react-icons/fa';
import {
  GiArm,
  GiBoneKnife,
  GiBrain,
  GiHeartBeats,
  GiTooth,
} from 'react-icons/gi';

export const getIcon = (icon, iconColor) => {
  switch (icon) {
    case 'GiTooth':
      return <GiTooth color={iconColor} />;
    case 'GiArm':
      return <GiArm color={iconColor} />;
    case 'GiBoneKnife':
      return <GiBoneKnife color={iconColor} />;
    case 'FaUser':
      return <FaUser color={iconColor} />;
    case 'GiHeart':
      return <GiHeartBeats color={iconColor} />;
    case 'GiBrain':
      return <GiBrain color={iconColor} />;
    default:
      return;
  }
};
