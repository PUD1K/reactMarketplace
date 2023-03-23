import React from 'react';
import MyCheckoutComponent from '../checkout/MyCheckoutComponent';
import ProfileInfo from './ProfileInfo';
import ProfileSetting from './ProfileSetting';
import SecuritySetting from './SecuritySetting';

interface ActiveTabProps {
    activeTab: string
}

const SwitcherProfile = ({ activeTab }: ActiveTabProps) => {
    
    const switcher = () => {
        if(activeTab === 'Профиль')
            return <ProfileInfo/>
        else if(activeTab === 'Настройки аккаунта')
            return <ProfileSetting/>
        else if(activeTab === 'Настройки безопасности')
            return <SecuritySetting/>
        else if(activeTab === 'Мои заказы')
            return <MyCheckoutComponent/>
    }

    return (
        <div>
            {switcher()}
        </div>
    );
};

export default SwitcherProfile;