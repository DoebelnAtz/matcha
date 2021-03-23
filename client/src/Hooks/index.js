import { useEffect, useState, useRef } from "react";

export const useInput = () => {
  const ref = useRef();
  const [value, setValue] = useState("");

  const validateType = (string, ref) => {
    switch (ref.current.type) {
      case "email":
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(string).toLowerCase());
      case "password":
        return !!string.length > 7;
      default:
        return true;
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
    ref.current.valid = validateType(e.target.value, ref);
  };

  useEffect(() => {}, [ref.current]);
  return [ref, value, onChange];
};

export const useForm = (config) => {
  const form = useRef();
};
