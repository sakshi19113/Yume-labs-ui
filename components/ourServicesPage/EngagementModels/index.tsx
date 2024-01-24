import styles from "./styles.module.scss";

function EngagementModels() {
  return (
    <div>
      <section className={styles.engagementModels}>
        <h1>Our Engagement Models</h1>
        <div className={styles.retainePrices}>
          <div className={styles.engagementModelsBlock}>
            <h3>Monthly Retainer</h3>
            <p>
              Yume Labs is a global UI UX Design and Industrial Design agency
              that helps your business scale through fail-proof design
              innovation <span>systems.</span>
            </p>
          </div>
          <div className={styles.engagementModelsBlock}>
            <h3>Fixed Price</h3>
            <p>
              Yume Labs is a global UI UX Design and Industrial Design agency
              that helps your business scale through fail-proof design
              innovation <span>systems.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EngagementModels;
