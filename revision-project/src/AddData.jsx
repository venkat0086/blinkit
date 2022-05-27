import axios from "axios";
import { useState } from "react";

export const Adddata = () => {
  const [data, setData] = useState({
    images: "",
    name: "",
    qnty: "",
    price: "",
    discount: "",
    category: "",
    seller: "",
    description: "",
  });
  const eventhandle = (e) => {
    const { id, value } = e.target;
    setData((pres) => ({ ...pres, [id]: value }));
    // console.log(e.target.value);
  };
  const eventsubmit = (e) => {
    e.preventDefault();
    axios.post(" http://localhost:8080/products", data);
    alert("done");
  };
  return (
    <div>
      <form action="" onSubmit={eventsubmit}>
        <input
          type="text"
          id={"images"}
          onChange={eventhandle}
          placeholder="images "
        />
        <br />
        <input
          type="text"
          id={"name"}
          onChange={eventhandle}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          id={"qnty"}
          onChange={eventhandle}
          placeholder="qnty"
        />
        <br />
        <input
          type="text"
          id={"price"}
          onChange={eventhandle}
          placeholder="price"
        />
        <br />
        <input
          type="text"
          id={"discount"}
          onChange={eventhandle}
          placeholder="discount"
        />
        <br />
        <input
          type="text"
          id={"category"}
          onChange={eventhandle}
          placeholder="category"
        />
        <br />
        <input
          type="text"
          id={"seller"}
          onChange={eventhandle}
          placeholder="seller"
        />
        <br />
        <input
          type="text"
          id={"description"}
          onChange={eventhandle}
          placeholder="description"
        />
        <br />
        <input type="submit" value={"submit"} />
        <br />
      </form>
    </div>
  );
};
