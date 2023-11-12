import React from "react";
import Product from "../Components/Product";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-5 mt-[100px]">
        <div className="w-full pb-20 ">
          <h1 heading="Special Offers" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
            <Product
              _id="1101"
              img={"./Images/spfOne.webp"}
              productName="Cap for Boys"
              price="35.00"
              color="Blank and White"
              badge={false}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
            <Product
              _id="1102"
              img={"./Images/spfTwo.webp"}
              productName="Tea Table"
              price="180.00"
              color="Gray"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
            <Product
              _id="1103"
              img={"./Images/spfThree.webp"}
              productName="Headphones"
              price="25.00"
              color="Mixed"
              badge={false}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
            <Product
              _id="1104"
              img={"./Images/spfFour.webp"}
              productName="Sun glasses"
              price="220.00"
              color="Black"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
