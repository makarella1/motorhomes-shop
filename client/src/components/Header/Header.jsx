import ContentWrapper from '../ContentWrapper';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <ContentWrapper className={styles.container}>
        <h1 className={styles.title}>Travel with drive and comfort</h1>
        <p className={styles.text}>
          {`The high level of travel\n thanks to our motorhomes will bring you a
          lot of unforgettable emotions. Good riddance!`}
        </p>
      </ContentWrapper>
    </header>
  );
};

export default Header;
