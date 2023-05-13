import "@testing-library/jest-dom/extend-expect";
import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useFormInput } from "./useFormInput";

const initialValues = {
  username: "",
  content: "",
  file: "",
  another: ""
};

type Keys = keyof typeof initialValues;

describe("useFormInput", () => {
  const Component = () => {
    const [formValues, reset] = useFormInput(initialValues);
    const onClickReset = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      reset();
    };

    return (
      <form role={"form"}>
        {Object.keys(formValues.value)
          .filter((v) => v !== "file")
          .map((value) => (
            <div key={value}>
              <label htmlFor={value}>{value}</label>
              <input
                id={value}
                type={value}
                value={formValues.value[value as Keys]}
                name={value}
                onChange={formValues.onChange}
              />
            </div>
          ))}
        <button onClick={onClickReset}>reset</button>
      </form>
    );
  };
  const BaseComponent = () => <Component />;
  it("correct functionality", () => {
    render(<BaseComponent />);
    const form = screen.getByRole("form");
    const username = screen.getByRole("textbox", { name: /username/i });
    const content = screen.getByRole("textbox", { name: /content/i });
    const another = screen.getByRole("textbox", { name: /another/i });
    act(() => {
      user.type(username, "123");
      user.type(content, "123");
      user.type(another, "123");
    });
    expect(form).toHaveFormValues({
      username: "123",
      content: "123",
      another: "123"
    });
    act(() => {
      user.clear(username);
      user.type(username, "1234567890".repeat(20));
    });
    expect(username).toHaveValue("1234567890".repeat(19) + "123456789");
    act(() => {
      user.clear(content);
      user.clear(another);
      user.type(content, "1234567890".repeat(100));
    });
    expect(content).toHaveValue("1234567890".repeat(99) + "123456789");
    act(() => {
      user.type(another, "1234567890".repeat(21));
    });
    expect(another).toHaveValue("1234567890".repeat(20));
    act(() => {
      user.click(screen.getByRole("button", { name: /reset/i }));
    });
    expect(form).toHaveFormValues({
      username: "",
      content: "",
      another: ""
    });
  });
});
