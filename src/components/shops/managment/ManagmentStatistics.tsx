import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import TotalSalesGraph from "./TotalSalesGraph";
import SalesPerMonthGraph from "./SalesPerMonthGraph";
import axios from "axios";
import { localhostCheckout, localhostShop } from "../../../variables/server";
import { useAppSelector } from "../../../hooks/redux";

const Chart = () => {
  const [cellsPerCategoriesLabels, setCellsPerCategoriesLabels] = useState<string[]>([]);
  const [cellsPerCategoriesDatas, setCellsPerCategoriesDatas] = useState<string[]>([]);

  const [cellsPerMonthLabels, setCellsPerMonthLabels] = useState<string[]>([]);
  const [cellsPerMonthDatas, setCellsPerMonthDatas] = useState<string[]>([]);

  const { shop } = useAppSelector(state => state.shopDataReducer);

  useEffect(() => {
    const getStats = async () => {
      const cellsPerCategoriesLabelsArr = [];
      const cellsPerCategoriesDatasArr = [];
      const cellsPerMonthLabelsArr = [];
      const cellsPerMonthDatasArr = [];

      const getStatsResponse = await axios.get(`${localhostCheckout}/by_shop_slug/${shop.slug}`);
      const cellsPerCategories = getStatsResponse.data.cellsPerCategories
      const cellsPerMonths = getStatsResponse.data.cellsPerMonths
      
      for (const [key, value] of Object.entries(cellsPerCategories)){
        cellsPerCategoriesLabelsArr.push(key);
        cellsPerCategoriesDatasArr.push(value as string);
      }
      
      for (const [key, value] of Object.entries(cellsPerMonths)){
        cellsPerMonthLabelsArr.push(key);
        cellsPerMonthDatasArr.push(value as string);
      }
      
      setCellsPerMonthLabels([...cellsPerMonthLabelsArr]);
      setCellsPerMonthDatas([...cellsPerMonthDatasArr]);
      setCellsPerCategoriesLabels([...cellsPerCategoriesLabelsArr]);
      setCellsPerCategoriesDatas([...cellsPerCategoriesDatasArr]);
    }
    getStats()
  }, [])

  return (
   <div>
    <TotalSalesGraph
    labelsProp={cellsPerCategoriesLabels}
    dataProp={cellsPerCategoriesDatas}
    />
    <SalesPerMonthGraph
    labelsProp={cellsPerMonthLabels}
    dataProp={cellsPerMonthDatas}
    />
   </div>
  );
};
export default Chart;