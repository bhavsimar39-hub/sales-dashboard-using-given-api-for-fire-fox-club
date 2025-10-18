import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // DO NOT use curly braces

export default function ExportButtons({ data }) {
  const exportCSV = () => {
    const csvData = data.map(s => `${s.date},${s.region},${s.product},${s.quantity},${s.total_price}`).join("\n");
    const blob = new Blob(["date,region,product,quantity,total_price\n" + csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'sales_data.csv');
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Sales Report", 14, 10);
    const tableData = data.map(s => [s.date, s.region, s.product, s.quantity, s.total_price]);
    doc.autoTable({
      head: [['Date', 'Region', 'Product', 'Quantity', 'Total Price']],
      body: tableData,
      startY: 20
    });
    doc.save("sales_report.pdf");
  };

  return (
    <div style={{marginTop: 20}}>
      <button onClick={exportCSV} style={{marginRight: 10}}>Export CSV</button>
      <button onClick={exportPDF}>Export PDF</button>
    </div>
  );
}
