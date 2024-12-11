import { useForm } from "react-hook-form";
import { schemaRegister } from "../schema/account";
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
    resolver: zodResolver(schemaRegister),
  });
  const handleRegister = async (dataBody) => {
    await createNew("users", dataBody);
    nav("/login");
  };
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
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
      <div>
        <label htmlFor="confirmPassword">Confirm Password : </label>
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}
      </div>
      <button type="submit">Gui</button>
    </form>
  );
}
