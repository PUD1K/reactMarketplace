import React from 'react';
import CreateOutfit from './create/CreateOutfit';
import CreateTechnique from './create/CreateTechnique';
import CreateDishes from './create/CreateDishes';
import CreateCosmetic from './create/CreateCosmetic';
import CreateAdornment from './create/CreateAdornment';

interface SwitcherCreateProductProps{
    selectedCategory: string;
    selectedSubcategory: string;
}

enum Categories{
    OUTFIT = "Одежда",
    TECHNIQUE = "Техника",
    DISHES = "Посуда",
    ADORNMENT = "Украшения",
    COSMETIC = "Косметика"
}

const SwitcherCreateProduct = ({selectedCategory, selectedSubcategory}: SwitcherCreateProductProps) => {
    const switcher = () => {
        if(selectedCategory === Categories.OUTFIT){
            return <CreateOutfit
                    subcategoryName={selectedSubcategory}/>
        }
        if(selectedCategory === Categories.TECHNIQUE){
            return <CreateTechnique
                    subcategoryName={selectedSubcategory}/>
        }
        if(selectedCategory === Categories.DISHES){
            return <CreateDishes
                    subcategoryName={selectedSubcategory}/>
        }
        if(selectedCategory === Categories.ADORNMENT){
            return <CreateAdornment
                    subcategoryName={selectedSubcategory}/>
        }
        if(selectedCategory === Categories.COSMETIC){
            return <CreateCosmetic
                    subcategoryName={selectedSubcategory}/>
        }
    }

    return (
        <div>
            { switcher() }
        </div>
    );
};

export default SwitcherCreateProduct;