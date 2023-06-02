import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "janindu",
    lastName: "Kulathilaka",
    email: "janindusandeepa2020@gmail.com",
  });

  return (
    <>
      <label>
        First Name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last Name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>

      <br />
      <br />

      <p>
        {form.firstName} {form.lastName}
        {"\n"}
        {form.email}
      </p>
    </>
  );
}
