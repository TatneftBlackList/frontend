import {Controller, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";



interface HookForm {
    name: string;
    age: number;
}

const HookForm = () => {
    const {register, handleSubmit, control, clearErrors, formState: {errors}, reset} = useForm<HookForm>({
        defaultValues: {
            age: 18,
            name: '',
        }
    });
    const submit: SubmitHandler<HookForm> = data => {
        console.log(data);
    }
    const error: SubmitErrorHandler<HookForm> = data => {
        console.log(data)
    }
    return (
        <>
            <form onSubmit = {handleSubmit(submit, error)}>
                <input type='text' {...register('name', {required: true})} aria-invalid={errors.name ? true : false}/>
                <Controller render={({field}) =><input {...field}/>} name='age' control={control} />
                <button>Отправить</button>
                <button type='button' onClick={() => clearErrors()}>Очистить</button>
                <button type='button' onClick={() => reset()}>очистить поля</button>
            </form>
        </>
    );
};

export default HookForm;