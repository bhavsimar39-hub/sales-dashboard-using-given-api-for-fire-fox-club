export default function Filters({ regions, selectedRegion, setSelectedRegion }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>
        <b>Filter by Region: </b>
        <select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
          <option value="">All Regions</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
