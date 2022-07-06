import styles from './Button.module.scss';

const Button = ({
  className = '',
  onClick = () => {},
  isBackBtn = false,
  children = null,
}) => {
  return (
    <button
      className={`${isBackBtn ? styles.backBtn : styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
