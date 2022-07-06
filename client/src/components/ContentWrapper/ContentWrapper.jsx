import styles from './ContentWrapper.module.scss';

const ContentWrapper = ({ children, className }) => {
  return (
    <div
      className={
        className
          ? `${className} ${styles.contentWrapper}`
          : `${styles.contentWrapper}`
      }
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
