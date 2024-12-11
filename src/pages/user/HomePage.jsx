import { useContext } from "react";
import { ProductsContext } from "../../App";
import { removeById } from "../../services/Crud";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useContext(ProductsContext);
  console.log(products);
  const nav = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  if (user.role) {
    const onDeleteProduct = async (id) => {
      await removeById("products", id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    };
    return (
      <div>
        <h1>Danh sach san pham</h1>
        <button
          onClick={() => {
            nav("/admin/productFrom");
          }}
        >
          Them san pham moi
        </button>
        <table>
          <tr>
            <th>Title</th>
            <th>Gia</th>
            <th>Mo ta</th>
            <th>So luong</th>
            <th>Hanh Dong</th>
          </tr>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.stock}</td>
                <td>
                  <button
                    onClick={() => {
                      onDeleteProduct(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      nav(`admin/productFrom/${item.id}`);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }

  return (
    <div>
      Danh sach san pham
      <div className="grid grid-cols-3 gap-4">
        {products.map((item) => {
          return (
            <div className="" key={item.id}>
              <span className="border">{item.title}</span>
              <img src="https://picsum.photos/200/300.webp" alt="" />
              <div className="border">Gia : {item.price}</div>
              <div className="border">Mo ta : {item.description}</div>
              <span className="border">So Luong : {item.stock}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
