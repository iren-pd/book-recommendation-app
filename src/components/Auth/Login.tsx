import { Button } from '@recobook/components/ui/Button';
import { FormikInput } from '@recobook/components/ui/FormikInput';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

type LoginValidationSchema = {
    email: string;
    password: string;
};

export const LoginPage: FC = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Невалидний email')
            .required('Обязательное поле'),
        password: Yup.string()
            .min(6, 'Минимальная длина пароля 6 символов')
            .max(20, 'Слишком длинный пароль')
            .required('Обязательное поле'),
    });

    const initialValues: LoginValidationSchema = {
        email: '',
        password: '',
    };

    const handleSubmit = (values: LoginValidationSchema) => {
        console.log('values login', values);
        navigate('/');
    };

    return (
        <div className="h-screen bg-gradient-to-r from-green-100 to-green-300 flex items-center justify-center">
            <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-xl">
                <h1 className="text-3xl text-center font-bold text-green-600 mb-8">
                    Войти
                </h1>
                <Formik
                    preventDefault
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="space-y-6">
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

                            <Button
                                text="Войти"
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
