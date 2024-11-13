import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const RegistrationPage = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Слишком короткое имя')
            .max(10, 'Слишком длинное имя')
            .required('Обязательное поле'),
        email: Yup.string()
            .email('Невалидний email')
            .required('Обязательное поле'),
        password: Yup.string()
            .min(6, 'Минимальная длина пароля 6 символов')
            .max(10, 'Слишком длинный пароль')
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
        navigate('/');
    };

    return (
        <div className="h-screen bg-gradient-to-r from-green-100 to-green-300 flex items-center justify-center">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
                <h1 className="text-3xl text-center font-bold text-green-600 mb-8">
                    Регистрация
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <div className="mb-4 flex justify-between items-baseline">
                                <label
                                    htmlFor="name"
                                    className="block w-1/2 text-lg text-green-700 mb-2"
                                >
                                    Имя
                                </label>
                                <div className="w-full ml-2 flex flex-col space-y-1">
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        component={Input}
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex justify-between items-baseline">
                                <label
                                    htmlFor="email"
                                    className="block w-1/2 text-lg text-green-700 mb-2"
                                >
                                    Email
                                </label>
                                <div className="w-full ml-2 flex flex-col space-y-1">
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        component={Input}
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex justify-between items-baseline">
                                <label
                                    htmlFor="password"
                                    className="block w-1/2 text-lg text-green-700 mb-2"
                                >
                                    Пароль
                                </label>
                                <div className="w-full ml-2 flex flex-col space-y-1">
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        component={Input}
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex items-baseline">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block w-1/2 text-lg text-green-700 mb-2"
                                >
                                    Подтвердите пароль
                                </label>
                                <div className="w-full ml-2 flex flex-col space-y-1">
                                    <Field
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        component={Input}
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>

                            <Button
                                text={
                                    isSubmitting
                                        ? 'Подтверждение...'
                                        : 'Регистрация'
                                }
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
