import styles from './Motorhome.module.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../utils/paths';

const Motorhome = ({
  name = '',
  price = 0,
  image = '',
  capacity = 0,
  _id = '',
}) => {
  return (
    <Link className={styles.plane} to={`${paths.motorhome}/${_id}`}>
      <div className={styles.capacity}>{capacity}</div>
      {image && <img className={styles.image} src={image} alt={name} />}
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.price}>USD {price}</span>
      </div>
    </Link>
  );
};

export default Motorhome;
