import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';

type FormikInputProps = {
    label: string;
    type: string;
    name: string;
};

export const FormikInput: FC<FormikInputProps> = ({ label, type = 'text', name }) => {
    return (
        <div className="mb-4 flex justify-between items-baseline">
            <label
                htmlFor={name}
                className="block w-1/2 text-lg text-green-700 mb-2"
            >
                {label}
            </label>
            <div className="w-full ml-2 flex flex-col space-y-1">
                <Field
                    type={type}
                    id={name}
                    name={name}
                    className={`w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 placeholder-green-500 text-green-700 focus:bg-white transition-all ease-in-out duration-300`}
                />
                <ErrorMessage
                    name={name}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                />
            </div>
        </div>
    );
};
