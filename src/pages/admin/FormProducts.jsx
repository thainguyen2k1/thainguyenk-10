import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createNew, getById, updateById } from "../../services/Crud";
import { useEffect } from "react";

export default function FormProducts() {
  const nav = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  id &&
    useEffect(() => {
      (async () => {
        const data = await getById("products", id);
        reset(data);
      })();
    }, []);
  const submitProduct = async (dataBody) => {
    if (id) {
      await updateById("products", id, dataBody);
    } else {
      await createNew("products", dataBody);
    }
    nav("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitProduct)}>
        <h1>{id ? "Cap Nhat San Pham" : "Them san pham moi"}</h1>
        <div>
          <label>Tieu de :</label>
          <input
            type="text"
            {...register("title", { required: true })}
            type="text"
          />
        </div>
        <div>
          <label>Gia :</label>
          <input
            type="number"
            {...register("price", { required: true })}
            type="text"
          />
        </div>
        <div>
          <label>Mo ta :</label>
          <input
            type="text"
            {...register("description", { required: true })}
            type="text"
          />
        </div>
        <div>
          <label>So luong :</label>
          <input
            type="number"
            {...register("stock", { required: true })}
            type="text"
          />
        </div>
        <button type="submit">{id ? "Cap Nhat" : "Them Moi"}</button>
      </form>
    </div>
  );
}
