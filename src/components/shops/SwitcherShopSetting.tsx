import React from 'react';
import ShopCategoriesSettings from './ShopCategoriesSettings';
import ShopProductsSettings from './ShopProductsSettings';

interface ActiveTabProps {
    activeTab: string
}


const SwitcherShopSetting = ({ activeTab }: ActiveTabProps) => {
    const switcher = () => {
        if(activeTab === 'Категории')
            return <ShopCategoriesSettings/>
        else if(activeTab === 'Товары')
            return <ShopProductsSettings/>
    }

    return (
        <div>
            {switcher()}
        </div>
    );
};

export default SwitcherShopSetting;