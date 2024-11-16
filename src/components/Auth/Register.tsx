import { Button } from '@recobook/components/ui/Button';
import { FormikInput } from '@recobook/components/ui/FormikInput';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export const RegistrationPage: FC = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком короткое имя')
            .max(10, 'Слишком длинное имя')
            .required('Обязательное поле'),
        email: Yup.string()
            .email('Невалидний email')
            .required('Обязательное поле'),
        password: Yup.string()
            .min(6, 'Минимальная длина пароля 6 символов')
            .max(20, 'Слишком длинный пароль')
            .required('Обязательное поле'),
        confirmPassword: Yup.string()
            .oneOf(
                [Yup.ref('password'), null],
                'Подтверждение пароля должно совпадать с основным паролем'
            )
            .required('Обязательное поле'),
    });

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values: any) => {
        console.log('values register', values);

        navigate('/login');
    };

    return (
        <div className="h-screen bg-gradient-to-r from-green-100 to-green-300 flex items-center justify-center">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
                <h1 className="text-3xl text-center font-bold text-green-600 mb-8">
                    Регистрация
                </h1>
                <Formik
                    preventDefault
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="space-y-6">
                            <FormikInput label="Имя" name="name" />

                            <FormikInput
                                label="Email"
                                type="email"
                                name="email"
                            />

                            <FormikInput
                                label="Пароль"
                                type="password"
                                name="password"
                            />

                            <FormikInput
                                label="Подтвердите пароль"
                                type="password"
                                name="confirmPassword"
                            />

                            <Button
                                text="Регистрация"
                                type="submit"
                                className="mt-4 w-full"
                            />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
