import React, { useState } from "react";
import Loading from "../Loading/Loading";
import PriceInput from "./PriceInput/PriceInput";

import { SForm, SFormControl, SFormTitle, SInput, SLabel, SSubmitButton } from "./styles";

const prepareFormInput = (formArr) => {
    return formArr?.reduce((r, v) => ({ ...r, [v.name]: v?.initialValue || "" }), {});
};

const Form = ({ formTitle, formArr, submitBtn, onSubmit, loading }) => {
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
                        <SLabel htmlFor={name}>{label}</SLabel>
                        {(() => {
                            if (type === "price") {
                                return (
                                    <PriceInput
                                        type={"text"}
                                        name={name}
                                        id={name}
                                        value={value}
                                        onChange={onChangeHandler}
                                    />
                                );
                            } else {
                                return (
                                    <SInput
                                        type={type}
                                        name={name}
                                        id={name}
                                        value={value}
                                        onChange={(e) => onChangeHandler(e)}
                                    />
                                );
                            }
                        })()}
                    </SFormControl>
                );
            })}
            <SSubmitButton onClick={(e) => onSubmitHandler(e)}>
                {!loading ? submitBtn : <Loading />}
            </SSubmitButton>
        </SForm>
    );
};

export default Form;
