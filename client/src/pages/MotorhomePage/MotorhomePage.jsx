import styles from './MotorhomePage.module.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotorhome, reset } from '../../store/slices/motorhomeSlice';

import { paths } from '../../utils/paths';

import Button from '../../components/Button';

import ContentWrapper from '../../components/ContentWrapper';

import Spinner from '../../components/Spinner';

const MotorhomePage = () => {
  const { motorhome, isLoading } = useSelector((state) => state.motorhome);

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigateHandler = () => {
    navigate(paths.home);
  };

  const orderHandler = () => {
    navigate(paths.order);
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(getMotorhome(id));
  }, [dispatch, id]);

  let content = null;

  if (isLoading) {
    content = (
      <ContentWrapper className={styles.motorhomeWrapper}>
        <Spinner />
      </ContentWrapper>
    );
  }

  if (motorhome) {
    content = (
      <ContentWrapper className={styles.motorhomeWrapper}>
        <div className={styles.motorhomeContainer}>
          <div className={styles.info}>
            <Button onClick={navigateHandler} isBackBtn>
              ← Back to all Motorhomes
            </Button>
            <h2 className={styles.title}>{motorhome.name}</h2>
            <p className={styles.description}>{motorhome.description}</p>
            <p className={styles.price}>USD {motorhome.price}</p>
            <Button className={styles.orderBtn} onClick={orderHandler}>
              Order this Motorhome!
            </Button>
          </div>
          <div className={styles.imageWrapper}>
            {motorhome.image && (
              <img
                className={styles.image}
                src={motorhome.image}
                alt={motorhome.title}
              />
            )}
          </div>
        </div>
      </ContentWrapper>
    );
  }

  return <section>{content}</section>;
};

export default MotorhomePage;
