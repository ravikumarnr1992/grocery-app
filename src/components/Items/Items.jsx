import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";
import Spinner from "../../UI/Spinner";

const Items = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoding] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoding(true);
      const data = await axios.get(
        "https://backend-api-2qaj.onrender.com/products/users/list"
      );
      if(data){
        setIsLoding(false);
        setItems(data.data.response_data);
      }
      
    };
  

    fetchItems();
    // setIsLoding(false);
  }, []);

  console.log(items);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-6">
          {isLoading && <Spinner />}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items?.map((product) => (
              <Item product={product} key={product.id} />
            ))}
          </div>
          {/* {filteredItems.length < 1 && <Message />} */}
        </div>
      </div>
    </>
  );
};

export default Items;
