import React from 'react';
import { Page } from 'zmp-ui';
import { configAppView } from 'zmp-sdk';
import Header from '@/components/Header';
import profileAvatar from '@/assets/icons/profile-avatar.jpg';
import profileFaculty from '@/assets/icons/profile-faculty.svg';
import profileStudentId from '@/assets/icons/profile-studentid.svg';
import profileAddress from '@/assets/icons/profile-address.svg';
import { useProfile } from '@/features/profile/profile.query';

const ProfilePage: React.FC = () => {
  const { data: profile } = useProfile();

  React.useEffect(() => {
    configAppView({
      headerColor: '#ffffff',
      headerTextColor: 'black',
      actionBar: { hide: true },
    }).catch(() => {});
  }, []);

  return (
    <Page className="bg-surface relative h-screen">
      {/* Content */}
      <div className="px-4 pt-4 pb-20 flex flex-col gap-2 h-full">
        {/* Profile Card */}
        <div className="bg-linear-to-b from-white to-transparent rounded-xl px-4 pt-5 pb-4 overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden shrink-0">
              <img src={profileAvatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-body-md text-slate">Sinh viên</span>
              <span className="text-title-md font-medium text-primary">{profile?.name}</span>
            </div>
          </div>
        </div>

        {/* Info List */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex items-center gap-4 p-4">
            <img src={profileFaculty} alt="" className="w-6 h-6 object-contain shrink-0" />
            <span className="text-title-md text-dark flex-1">{profile?.faculty}</span>
          </div>
          <div className="h-px bg-black/5 ml-14" />
          <div className="flex items-center gap-4 p-4">
            <img src={profileStudentId} alt="" className="w-6 h-6 object-contain shrink-0" />
            <span className="text-title-md text-dark flex-1">
              Mã số sinh viên: {profile?.studentId}
            </span>
          </div>
          <div className="h-px bg-black/5 ml-14" />
          <div className="flex items-center gap-4 p-4">
            <img src={profileAddress} alt="" className="w-6 h-6 object-contain shrink-0" />
            <span className="text-title-md text-dark flex-1">{profile?.address}</span>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ProfilePage;
