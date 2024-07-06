import Link from "next/link";
import styles from "./Table.module.css";

export default function Table({tableData}) {
  return (
    <div className="shadow-custom-4 border-[1px] border-[#999999] rounded-lg w-[100%] overflow-scroll hide-scrollbar">
      <table className={`${styles.table} dark  hide-scrollbar`}>
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
                <td className={`${styles.rowCell} dark `}>
                  <Link href="Transcript">
                    <button className={`${styles.rowCellButton} dark`}>
                      Edit
                    </button>
                  </Link>
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
