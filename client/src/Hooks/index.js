import { useEffect, useState, useRef } from "react";
import { useDeepCompareMemoize } from "../Utils";
import { useHistory, useLocation } from "react-router";
import api from "../Api";
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

// custom hook for easy modal dismissal
export const useDismiss = (refInside, close, exclude) => {
  const handleEsc = (e) => {
    if (e.key !== "Escape") return;
    else {
      e.preventDefault();
      // esc by default stops the page from refreshing,
      // this is not a problem but causes a small delay when pressing.
      close();
    }
  };
  const handleClick = (e) => {
    let target = e.target;
    if (
      refInside?.current?.contains(target) ||
      exclude?.current?.contains(target)
    )
      return;
    else close();
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};

export const useMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

export function useGet(url, variables = {}, conditional = true) {
  const [data, setData] = useState();
  const resp = useRef(null);
  const history = useHistory();
  const mounted = useMounted();
  const propsVariablesMemoized = useDeepCompareMemoize(variables);

  useEffect(() => {
    async function request() {
      try {
        resp.current = await api.get(url, variables);
        if (mounted.current) {
          setData(resp.current);
        }
      } catch (e) {
        if (!e.response) {
        } else if (e.response.status === 401) {
          localStorage.clear();
          console.log("unauth");
          history.push(`/login?next=${history.location.pathname}`);
        }
      } finally {
        if (mounted.current) {
        }
      }
    }
    if (conditional && mounted.current) request();
  }, [url, conditional, propsVariablesMemoized]);
  return [data, setData];
}
