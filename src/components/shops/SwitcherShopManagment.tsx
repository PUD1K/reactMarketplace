import React from 'react';
import ManagmentOrders from './managment/ManagmentOrders';
import ManagmentStatistics from './managment/ManagmentStatistics';

interface ActiveTabProps {
    activeTab: string
}

const SwitcherShopManagment = ({ activeTab }: ActiveTabProps) => {

    const switcher = () => {
        if(activeTab === 'Заказы')
            return <ManagmentOrders/>
        else if(activeTab === 'Статистика')
            return <ManagmentStatistics/>
    }

    return (
        <div>
            {switcher()}
        </div>
    );
};

export default SwitcherShopManagment;