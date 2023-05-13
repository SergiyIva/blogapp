import React, { useState } from "react";

export type EventWithTarget = {
  target: {
    name: string;
    value: string;
  };
};

export const useFormInput = <
  T extends Object,
  E extends React.ChangeEvent<HTMLElement> & EventWithTarget
>(
  initialValue: T
): [{ value: T; onChange(e: E): void }, () => void] => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => {
        const { name, value: newValue } = e.target;
        if (name === "content") {
          if (newValue.length >= 100_000) return;
          setValue({
            ...value,
            [name]: newValue
          });
        } else if (name === "file" && e.target instanceof HTMLInputElement) {
          if (!e.target.files) return;
          if (!e.target.multiple) {
            e.target.files.length
              ? setValue({
                  ...value,
                  [name]: e.target.files[0]
                })
              : setValue({
                  ...value,
                  [name]: ""
                });
          } else return;
        } else {
          if (newValue.length > 200) return;
          setValue({
            ...value,
            [name]: newValue
          });
        }
      }
    },
    () => setValue(initialValue)
  ];
};
