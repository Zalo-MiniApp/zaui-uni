import React from 'react';
import { Icon } from 'zmp-ui';
import { useNavigate } from 'react-router-dom';
import { navigateBack } from '@/utils/navigation';
import logoImg from '@/assets/logo.png';

type HeaderProps = { variant: 'logo' } | { variant: 'back'; title: string };

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="z-10 bg-white">
      {props.variant === 'logo' ? (
        <div className="flex items-center gap-1 h-12 px-3">
          <img src={logoImg} alt="" className="w-7 h-7 rounded-[26px] object-cover shrink-0" />
          <span className="font-semibold text-title-lg text-primary whitespace-nowrap">
            Trường Đại học Khoa học
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2 h-11 px-2">
          <div
            className="flex items-center justify-center w-10 h-10 cursor-pointer text-primary"
            onClick={() => navigateBack(navigate)}
          >
            <Icon icon="zi-arrow-left" size={24} />
          </div>
          <span className="font-medium text-title-lg text-primary">{props.title}</span>
        </div>
      )}
      <div className="h-px bg-divider" />
    </div>
  );
};

export default Header;
