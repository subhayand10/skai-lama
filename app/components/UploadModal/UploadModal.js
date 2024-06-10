import styles from './UplaodModal.module.css';

export default function UploadModal() {
    return (
        <div className={`${styles.overlay} dark`}>
          <div className={`${styles.modal} dark`}>
            <div className={styles.header}>
              <div className={styles.titleContainer}>
                <img src="https://placehold.co/24x24" alt="YouTube Logo" className={styles.logo} />
                <h2 className={`${styles.title} dark`}>Upload from Youtube</h2>
              </div>
              <button className={`${styles.closeButton} dark &times;`}></button>
            </div>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={`${styles.label} dark`}>Name</label>
                <input type="text" id="name" className={`${styles.input} dark`} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="link" className={`${styles.label} dark`}>Link</label>
                <input type="text" id="link" className={`${styles.input} dark`} />
              </div>
              <div className="flex justify-end">
                <button type="submit" className={styles.button}>Upload</button>
              </div>
            </form>
          </div>
        </div>
    )
}
