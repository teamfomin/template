export default function SectionWithTable({ title, tableData, children }) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      {children}
      {tableData && tableData.length > 0 && (
        <div className="table-container">
          <table className="section__table">
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((key) => (
                  <th key={key} className="table-header">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="table-row">
                  {Object.values(row).map((value, cellIndex) => (
                    <td key={cellIndex} className="table-cell">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
