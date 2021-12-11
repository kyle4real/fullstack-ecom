import React, { useState } from "react";

import { SForm, SFormControl, SFormTitle, SInput, SLabel, SSubmitButton } from "./styles";

const prepareFormInput = (formArr) => {
    return formArr?.reduce((r, v) => ({ ...r, [v.name]: v.initialValue }), {});
};

const AuthForm = ({ formTitle, formArr, submitBtn, onSubmit }) => {
    const [formInput, setFormInput] = useState(prepareFormInput(formArr));

    const onChangeHandler = ({ target: { name, value } }) => {
        setFormInput((p) => ({ ...p, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = formInput;
        onSubmit(form, () => {
            setFormInput(prepareFormInput(formArr));
        });
    };

    return (
        <SForm autoComplete="off">
            <SFormTitle>{formTitle}</SFormTitle>
            {formArr?.map(({ label, name, type }) => {
                let value = formInput[name];
                return (
                    <SFormControl>
                        <SLabel>{label}</SLabel>
                        <SInput
                            type={type}
                            name={name}
                            id={name}
                            value={value}
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </SFormControl>
                );
            })}
            <SSubmitButton onClick={(e) => onSubmitHandler(e)}>{submitBtn}</SSubmitButton>
        </SForm>
    );
};

export default AuthForm;
