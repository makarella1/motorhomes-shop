import styles from './Input.module.scss';

const Input = ({
  type = 'text',
  className = '',
  placeholder = '',
  name = '',
  onChange = () => {},
  error = '',
}) => {
  return (
    <div className={className}>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...(type === 'number' && { min: 1 })}
        {...(type === 'file' && { accept: 'image/*' })}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
