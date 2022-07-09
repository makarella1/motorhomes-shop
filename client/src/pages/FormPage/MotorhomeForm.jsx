import ContentWrapper from '../../components/ContentWrapper';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';

import {
  createMotorhome,
  resetErrors,
} from '../../store/slices/motorhomeSlice';

import styles from './MotorhomeForm.module.scss';
import { paths } from '../../utils/paths';

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.motorhome);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [description, setDescription] = useState('');
  const [motorhomeImage, setMotorhomeImage] = useState(null);

  useEffect(() => {
    dispatch(resetErrors());
  }, [dispatch]);

  const navigateHandler = () => {
    navigate('/');
  };

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();

      const formData = new FormData();

      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('capacity', capacity);
      formData.append('motorhomeImage', motorhomeImage);

      dispatch(createMotorhome(formData)).then((res) => {
        if (!res.error) {
          navigate(`${paths.motorhome}/${res.payload._id}`, {
            replace: true,
          });
        }
      });
    },
    [name, price, description, capacity, motorhomeImage, dispatch, navigate]
  );

  return (
    <ContentWrapper className={styles.formWrapper}>
      <Button className={styles.backBtn} onClick={navigateHandler} isBackBtn>
        ← Back to all Motorhomes
      </Button>
      <h1 className={styles.title}>Add your own motorhome!</h1>
      <div className={styles.formContainer}>
        <form>
          <Input
            className={styles.inputContainer}
            name="name"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            error={errors?.name?.message}
          />
          <Input
            className={styles.inputContainer}
            name="price"
            placeholder="Price"
            onChange={(event) => setPrice(event.target.value)}
            error={errors?.price?.message}
          />
          <Input
            className={styles.inputContainer}
            name="capacity"
            placeholder="Capacity"
            onChange={(event) => setCapacity(event.target.value)}
            error={errors?.capacity?.message}
          />
          <div className={styles.inputContainer}>
            <textarea
              className={styles.textarea}
              name="description"
              cols="30"
              rows="10"
              placeholder="Little description"
              maxLength={430}
              onChange={(event) => setDescription(event.target.value)}
            />
            {errors?.description && (
              <p className={styles.error}>{errors.description.message}</p>
            )}
          </div>
          <Input
            className={styles.inputContainer}
            type="file"
            name="motorhomeImage"
            placeholder="Image"
            onChange={(event) => setMotorhomeImage(event.target.files[0])}
            error={errors?.file?.message}
          />
          <Button className={styles.submitBtn} onClick={submitHandler}>
            Add
          </Button>
        </form>
      </div>
    </ContentWrapper>
  );
};

export default FormPage;
