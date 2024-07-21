
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import styles from './Form.module.css';
import {yupResolver} from "@hookform/resolvers/yup";

interface IFormInput {
    firstname: string;
    lastname: string;
    age: number;
    email: string;
    password: string;
    phone: string;
}

const schema = yup.object().shape({
    firstname: yup.string().required('First name is required').max(20,  'First name must be at most 20 characters'),
    lastname: yup.string().matches(/^[A-Za-z]+$/, 'Last name must contain only letters').required('Last name is required'),
    age: yup.number().typeError('Age must be a number').min(18, 'You must be at least 18 years old').max(99, 'You must be at most 99 years old').required('Age is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Invalid phone number').required('Phone is required'),
    password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/, 'Password must be strong').required('Password is required')
});

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h2 className={styles.form__title}>Добавление пользователя</h2>
            <input className={styles.field} {...register("firstname")} placeholder="First Name" />
            {errors.firstname && <p>{errors.firstname.message}</p>}

            <input className={styles.field} {...register("lastname")} placeholder="Last Name" />
            {errors.lastname && <p>{errors.lastname.message}</p>}

            <input className={styles.field} {...register("age")} placeholder="Age" />
            {errors.age && <p>{errors.age.message}</p>}

            <input className={styles.field} type='email' {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}

            <input className={styles.field} {...register('phone')} placeholder="Phone" />
            {errors.phone && <p>{errors.phone.message}</p>}

            <input className={styles.field} type='password' {...register('password')} placeholder="Password" />
            {errors.password && <p>{errors.password.message}</p>}

            <input type="submit" value="Добавить в ЧС" className={styles.button} />
        </form>
    );
};

export default Form;