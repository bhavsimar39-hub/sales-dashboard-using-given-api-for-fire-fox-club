import React, { useEffect, useState } from "react";
import {
  fetchSalesData,
  calculateTotalRevenue,
  groupByRegion,
  salesTrendByDate,
  topProducts
} from "./utils/dataUtils";
import SummaryCards from "./components/SummaryCards";
import SalesTrendChart from "./components/SalesTrendChart";
import RegionDistributionChart from "./components/RegionDistributionChart";
import TopProductsChart from "./components/TopProductsChart";
import Filters from "./components/Filters";
import ExportButtons from "./components/ExportButtons";

export default function App() {
  const [salesData, setSalesData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchSalesData();
      setSalesData(data);
    };
    loadData();
    const interval = setInterval(loadData, 30000); // real-time updates every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const filteredData = selectedRegion
    ? salesData.filter(s => s.region === selectedRegion)
    : salesData;

  const totalRevenue = calculateTotalRevenue(filteredData);
  const regions = [...new Set(salesData.map(s => s.region))];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Sales Dashboard</h1>
      <Filters regions={regions} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      <SummaryCards totalRevenue={totalRevenue} totalSales={filteredData.length} />
      <SalesTrendChart data={salesTrendByDate(filteredData)} />
      <RegionDistributionChart data={groupByRegion(filteredData)} />
      <TopProductsChart data={topProducts(filteredData)} />
      <ExportButtons data={filteredData} />
    </div>
  );
}
