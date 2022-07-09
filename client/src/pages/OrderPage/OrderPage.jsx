import ContentWrapper from '../../components/ContentWrapper';
import Button from '../../components/Button';

import { useNavigate } from 'react-router-dom';
import { paths } from '../../utils/paths';

import styles from './OrderPage.module.scss';

const OrderPage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(paths.home);
  };

  return (
    <ContentWrapper className={styles.orderWrapper}>
      <section>
        <h1 className={styles.title}>
          You've successfully ordered an amazng motorhome! We'll ship it ASAP
        </h1>
        <Button className={styles.backBtn} onClick={navigateHandler}>
          Go back
        </Button>
      </section>
    </ContentWrapper>
  );
};

export default OrderPage;
