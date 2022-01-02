import React, { useState } from "react";
import { useMemo } from "react";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import PriceInput from "./PriceInput/PriceInput";

import {
    SErrorIcon,
    SForm,
    SFormControl,
    SInput,
    SLabel,
    SSubmitButton,
    SValidityMessage,
} from "./styles";

const prepareFormInput = (formArr) => {
    return formArr?.reduce((r, v) => ({ ...r, [v.name]: v?.initialValue || "" }), {});
};

const prepareNameToValidityHash = (formArr) => {
    return formArr?.reduce((r, v) => {
        if (v?.validity !== undefined) {
            return { ...r, [v.name]: v.validity };
        } else return r;
    }, {});
};

const Form = ({ formTitle, formArr, submitBtn, onSubmit, loading }) => {
    const [formInput, setFormInput] = useState(prepareFormInput(formArr));
    const [validities, setValidities] = useState(null);

    const validityHash = useMemo(() => {
        return prepareNameToValidityHash(formArr);
    }, [formArr]);

    console.log(validityHash);

    const onChangeHandler = ({ target: { name, value } }) => {
        setFormInput((p) => ({ ...p, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const notValidObj = {};
        for (const name in validityHash) {
            const validityFunc = validityHash[name];
            const inputValue = formInput[name];
            const notValid = validityFunc(inputValue, formInput);
            if (notValid) notValidObj[name] = notValid;
        }
        if (Object.keys(notValidObj).length) {
            return setValidities(notValidObj);
        }

        const form = formInput;
        onSubmit(form, () => {
            setFormInput(prepareFormInput(formArr));
        });
    };

    return (
        <SForm autoComplete="off">
            {formArr?.map(({ label, name, type }) => {
                let value = formInput[name];
                const isInvalid = validities && !!validities?.[name];
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
                        {isInvalid && (
                            <SValidityMessage>
                                <SErrorIcon />
                                &nbsp;
                                {validities[name]}
                            </SValidityMessage>
                        )}
                    </SFormControl>
                );
            })}
            <SSubmitButton>
                <Button onClick={(e) => onSubmitHandler(e)} style={{ width: "100%" }}>
                    {!loading ? submitBtn : <Loading />}
                </Button>
            </SSubmitButton>
        </SForm>
    );
};

export default Form;
