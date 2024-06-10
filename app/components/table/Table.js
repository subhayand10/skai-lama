import styles from "./Table.module.css";

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className={`${styles.table} dark`}>
        <thead>
          <tr>
            <th className={`${styles.headerCell} dark`}>Name</th>
            <th className={`${styles.headerCell} dark`}>Upload Date & Time</th>
            <th className={`${styles.headerCell} dark`}>Status</th>
            <th className={`${styles.headerCell} dark`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array(4)
            .fill()
            .map((_, index) => (
              <tr key={index} className="border-t">
                <td className={`${styles.rowCell} dark`}>Sample Name</td>
                <td className={`${styles.rowCell} dark`}>12 Jun 24 | 15:67</td>
                <td className={`${styles.rowCell} dark`}>Done</td>
                <td className={`${styles.rowCell} dark`}>
                  <button className={`${styles.rowCellButton} dark`}>
                    Edit
                  </button>
                  <button className={`${styles.deleteButton} dark`}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
