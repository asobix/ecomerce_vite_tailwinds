
import { useState, useEffect } from "react";
import Layout from "@/Components/Layout";
import Card from "@/Components/Card";
function Home() {
  const [items, setItems] = useState(null);

  useEffect(()=>{
    const fetchApi = async () => {
      try {
        const response = await  fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json()
        const dataFormatter = data.slice(0,35)
        setItems(dataFormatter)
      } catch (error) {
        console.error(error)
      }
    }
    fetchApi()
  },[])
    return (
      <>
        <Layout>
          Home
          <div className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
          {
            items?.map(item => (
              <Card key={item.id} {...item}/>
            ))
          }
          </div>
        </Layout>
      </>
    );
  }
  
  export default Home;