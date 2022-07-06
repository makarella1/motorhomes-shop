import { SpinnerInfinity } from 'spinners-react';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <SpinnerInfinity
        size={90}
        thickness={100}
        speed={100}
        color="#fff"
        secondaryColor="rgba(0, 0, 0, 1)"
      />
    </div>
  );
};

export default Spinner;
