import { Feather, MaterialIcons } from "@expo/vector-icons";
import _ from "lodash";
import capitalize from "lodash/capitalize";
import toString from "lodash/toString";
import {
  Button,
  FormControl,
  IButtonProps,
  ICheckboxProps,
  IInputProps,
  ISelectProps,
  Input,
  Select,
  Spinner,
  TextArea,
} from "native-base";
import React, { memo, useEffect, useMemo, useState } from "react";
import isEqual from "react-fast-compare";

interface ICustomInput extends IInputProps {
  name: string;
  label: string;
  placeholder: string;
  errMsg: string;
  currentValue: string | number;
  setFieldValue: (arg0: string, arg1: string) => void;
  isRequired: boolean;
  isInvalid: boolean;
  editable?: boolean;
}

interface ICustomButton extends IButtonProps {
  name: string;
  isSubmitting: boolean;
  onSubmit: () => void;
}

interface ICustomSelect extends ISelectProps {
  isRequired: boolean;
  isInvalid: boolean;
  label?: string;
  options: { label: string; value: string }[];
  name: string;
  setFieldValue: (arg0: string, arg1: string) => void;
  initValue?: string;
  errMsg: string;
}

interface ICustomCheckBox extends ICheckboxProps {
  isRequired: boolean;
  isInvalid: boolean;
  label: string;
  errMsg: string;
}

export const CustomInput: React.FC<ICustomInput> = memo((props) => {
  const {
    setFieldValue,
    currentValue,
    errMsg,
    label,
    name,
    placeholder,
    isRequired,
    isInvalid,
    keyboardType,
    type,
    editable = true,
  } = props;

  const handleChangeText = (val: string) => {
    setFieldValue(name, val);
  };

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      {label && (
        <FormControl.Label fontWeight={"bold"} textTransform="capitalize">
          {_.capitalize(label)}
        </FormControl.Label>
      )}
      <Input
        {...props}
        keyboardType={keyboardType}
        placeholder={capitalize(placeholder)}
        value={toString(currentValue)}
        onChangeText={handleChangeText}
        borderRadius="12"
        type={type}
        isReadOnly={!editable}
      />
      <FormControl.ErrorMessage mt={0.5}>
        {capitalize(errMsg)}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}, isEqual);

export const CustomTextArea: React.FC<ICustomInput> = memo((props) => {
  const {
    setFieldValue,
    currentValue,
    errMsg,
    label,
    name,
    placeholder,
    isRequired,
    isInvalid,
    keyboardType,
  } = props;

  const handleChangeText = (val: string) => {
    setFieldValue(name, val);
  };

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      {label && (
        <FormControl.Label fontWeight={"bold"} textTransform="capitalize">
          {label}
        </FormControl.Label>
      )}
      <TextArea
        {...props}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={toString(currentValue)}
        onChangeText={handleChangeText}
        borderRadius="12"
        autoCompleteType={true}
      />
      <FormControl.ErrorMessage mt={0.5}>
        {capitalize(errMsg)}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}, isEqual);

export const CustomSelect: React.FC<ICustomSelect> = memo((props) => {
  const {
    isRequired,
    isInvalid,
    label,
    options,
    name,
    setFieldValue,
    initValue,
    errMsg,
    placeholder,
  } = props;

  const [val, setValue] = useState("");
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    if (initValue) {
      setFieldValue(name, initValue);
    }
  }, [initValue]);

  useMemo(() => {
    if (options) {
      if (options.length !== 0) {
        if (initValue) {
          options.map((x) => {
            if (
              _.toString(x.label) === _.toString(initValue) ||
              _.toString(x.value) === _.toString(initValue)
            ) {
              setValue(x.value.toString());
              setKey(Math.random());
              return;
            } else {
            }
          });
        }
      }
    }
  }, [initValue]);

  const handleValueChange = (e: string) => {
    if (e) {
      setValue(e);

      if (options) {
        setFieldValue(
          name,
          options.filter((item) => _.toString(item.value) === _.toString(e))[0]
            .label
        );
      }
      // setFieldValue(name, e);
    }
  };

  return (
    <>
      <FormControl isRequired={isRequired} isInvalid={isInvalid}>
        <FormControl.Label fontWeight={"bold"} color={"gray.500"}>
          {label + " "}
        </FormControl.Label>
      </FormControl>
      <Select
        key={key}
        {...props}
        selectedValue={val}
        onValueChange={handleValueChange}
        placeholder={placeholder}
        borderRadius={"md"}
        fontSize={"sm"}
        dropdownIcon={
          <MaterialIcons
            name="arrow-drop-down"
            size={30}
            color="#1A237E"
            style={{ marginRight: 8 }}
          />
        }
        _selectedItem={{
          bg: "gray.300",
          endIcon: (
            <Feather
              name="check"
              size={18}
              color="#000000"
              style={{ marginTop: 2 }}
            />
          ),
        }}
      >
        {options.map((item) => {
          return (
            <Select.Item
              key={item.label + item.value}
              label={capitalize(item.label)}
              value={_.toString(item.value)}
              fontSize={"sm"}
            />
          );
        })}
      </Select>
      {/* <Stack w={"100%"} mt={-1.5}>
        {isInvalid ? (
          <>
            <CustomError errMsg={errMsg?.toLowerCase()} />
          </>
        ) : (
          <></>
        )}
      </Stack> */}
    </>
  );
}, isEqual);
// export const CustomSelect: React.FC<ICustomSelect> = memo((props) => {
//   const {
//     isRequired,
//     isInvalid,
//     label,
//     options,
//     name,
//     setFieldValue,
//     initValue,
//     errMsg,
//   } = props;

//   const [val, setValue] = useState("");
//   const [key, setKey] = useState(Math.random());

//   useEffect(() => {
//     console.log(options);
//   }, [options]);

//   useEffect(() => {
//     if (initValue) {
//       console.log("inint", initValue);
//       setValue(val);
//       setKey(Math.random());
//     }
//   }, [initValue]);

//   const handleValueChange = (e: string) => {
//     if (e) {
//       setValue(e);
//       setFieldValue(name, e);
//     }
//   };
//   console.log("gello", val);
//   useEffect(() => {}, [errMsg]);

//   return (
//     <>
//       <FormControl isRequired={isRequired} isInvalid={isInvalid}>
//         <FormControl.Label fontWeight={"bold"} textTransform="capitalize">
//           {capitalize(label) + " "}
//         </FormControl.Label>
//       </FormControl>
//       <Select
//         {...props}
//         selectedValue={val}
//         onValueChange={handleValueChange}
//         key={key}
//       >
//         {options.map((item) => {
//           return (
//             <Select.Item
//               key={item.label + item.value}
//               label={item.label}
//               value={item.value}
//               textTransform="capitalize"
//             />
//           );
//         })}
//       </Select>
//       <FormControl>
//         <FormControl.ErrorMessage>
//           <Text>{capitalize(errMsg)}</Text>
//         </FormControl.ErrorMessage>
//       </FormControl>
//     </>
//   );
// }, isEqual);

export const CustomCheckBox: React.FC<ICustomCheckBox> = memo((props) => {
  const { isInvalid, isRequired, label, errMsg } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <FormControl.Label fontWeight={"bold"} textTransform="capitalize">
        {capitalize(label) + " "}
      </FormControl.Label>
      <FormControl.ErrorMessage>{capitalize(errMsg)}</FormControl.ErrorMessage>
    </FormControl>
  );
}, isEqual);

export const CustomButton: React.FC<ICustomButton> = memo((props) => {
  const { isSubmitting, name, onSubmit } = props;

  return (
    <Button
      {...props}
      onPress={onSubmit}
      // @ts-ignore
      leftIcon={isSubmitting === true ? <Spinner /> : props.leftIcon || null}
    >
      {capitalize(name)}
    </Button>
  );
}, isEqual);
