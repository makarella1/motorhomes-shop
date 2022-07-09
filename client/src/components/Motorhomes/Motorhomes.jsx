import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMotorhomes } from '../../store/slices/motorhomesSlice';
import { Link } from 'react-router-dom';

import { useSortMotorhomes } from '../../hooks/useSortMotorhomes';

import Spinner from '../Spinner';
import ContentWrapper from '../ContentWrapper';
import Motorhome from '../Motorhome/Motorhome';

import styles from './Motorhomes.module.scss';
import Button from '../Button';
import { paths } from '../../utils/paths';

const Motorhomes = () => {
  const { motorhomes, isLoading } = useSelector((state) => state.motorhomes);
  const dispatch = useDispatch();

  const [sortedMotorhomes, isDesc, setIsDesc] = useSortMotorhomes(
    motorhomes || []
  );

  useEffect(() => {
    dispatch(getMotorhomes());
  }, [dispatch]);

  const sortHandler = () => {
    setIsDesc((prevState) => !prevState);
  };

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  }

  if (!isLoading) {
    content = (
      <>
        <ContentWrapper className={styles.motorhomesContainer}>
          {sortedMotorhomes &&
            sortedMotorhomes.map((motorhome) => (
              <Motorhome key={motorhome._id} {...motorhome} />
            ))}
        </ContentWrapper>
      </>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.sort}>
        <ContentWrapper className={styles.sortWrapper}>
          <Button onClick={sortHandler}>
            Sort by price {isDesc ? '↓' : '↑'}
          </Button>
          <Link className={styles.addLink} to={paths.create}>
            Add your own motorhome!
          </Link>
        </ContentWrapper>
      </div>
      {content}
    </main>
  );
};

export default Motorhomes;
