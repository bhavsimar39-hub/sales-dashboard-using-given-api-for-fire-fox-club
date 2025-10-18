export default function SummaryCards({ totalRevenue, totalSales }) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', margin: '20px 0'}}>
      <div><h3>Total Revenue</h3><p>${totalRevenue.toFixed(2)}</p></div>
      <div><h3>Total Sales</h3><p>{totalSales}</p></div>
    </div>
  );
}
