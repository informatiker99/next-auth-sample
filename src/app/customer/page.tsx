import Image from "next/image";
import React from "react";
import Layout from "./layout";
const page = async () => {
  const response = await fetch(
    `https://my.api.mockaroo.com/products.json?key=d0c390e0`,
    {
      cache: "force-cache",
      next: {
        revalidate: 20,
      },
    }
  );
  const posts = await response.json();
  console.log(posts);

  return (
    <div className="flex flex-wrap gap-1 justify-center ">
      {posts.map((item) => {
        return (
          <div key={item.id} className="border w-[15rem] p-2">
            {/* {item.name}
            <p>{item.description}</p>
            <Image
              src={item.image_url}
              width={40}
              height={40}
              alt="img"
            ></Image> */}
            <input type="text" className="p-2 border rounded-lg" />
          </div>
        );
      })}
    </div>
  );
};

page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default page;
