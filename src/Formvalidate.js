import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "./Input";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(
      "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$",
      "Please provide the valid email"
    ),
  password: yup
    .string()
    .required()
    .min(6, "passowrd contains atleast 6 characters"),
  confirmpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "password does not match"),
});

export default function Formvalidate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("data");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          label="Name"
          register={{ ...register("name") }}
          errMsg={errors.name?.message}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          label="Email"
          register={{ ...register("email") }}
          errMsg={errors.email?.message}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          label="password"
          register={{ ...register("password") }}
          errMsg={errors.password?.message}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Input
          type="password"
          id="confirmpassword"
          placeholder="confirmpassword"
          label="confirmpassword"
          register={{ ...register("confirmpassword") }}
          errMsg={errors.confirmpassword?.message}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
