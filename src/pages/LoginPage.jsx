import { useForm } from "react-hook-form";
import { schemaLogin } from "../schema/account";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNew } from "../services/Crud";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });
  const handleLogin = async (dataBody) => {
    const { user } = await createNew("/login", dataBody);
    localStorage.setItem("user", JSON.stringify(user));
    nav("/");
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label htmlFor="email">Email : </label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password?.message && <p>{errors.password?.message}</p>}
      </div>

      <button type="submit">Gui</button>
    </form>
  );
}
