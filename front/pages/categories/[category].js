import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="item">
          <a>
            <Image
              src={"/images/pexel.jpeg"}
              className="rounded"
              width={350}
              height={350}
            />
          </a>

          <p>price2$</p>
          <p></p>
        </div>
        <div>
          <a>
            <Image
              src={"/images/download.jpg"}
              className="rounded"
              width={350}
              height={350}
            />
          </a>

          <p>price2$</p>
          <p></p>
        </div>
        <div>
          <a>
            <Image
              src={"/images/pexel.jpeg"}
              className="rounded"
              width={350}
              height={350}
            />
          </a>

          <p>price2$</p>
          <p></p>
        </div>
        <div>
          <a>
            <Image
              src={"/images/pigion.webp"}
              className="rounded"
              width={350}
              height={350}
            />
          </a>

          <p>price2$</p>
        </div>
        <div>
          <a>
            <Image
              src={"/images/pigion.webp"}
              className="rounded"
              width={350}
              height={350}
            />
          </a>

          <p>price2$</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
