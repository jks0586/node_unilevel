import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-7 gap-4">
        <div>
          <Link href={"/category"}>
            <a>
              <img
                src="/images/pigion.webp"
                className="rounded"
                width={100}
                height={100}
              />
            </a>
          </Link>
          Category
        </div>
        <div>
          <Link href={"/category"}>
            <a>
              <img
                src="/images/images.jpg"
                className="rounded"
                width={100}
                height={100}
              />
            </a>
          </Link>
          Category
        </div>
        <div>
          <Link href={"/category"}>
            <a>
              <img
                src="/images/image.png"
                className="rounded"
                width={120}
                height={100}
              />
            </a>
          </Link>
          Title
        </div>
        <div>
          <Link href={"/category"}>
            <a>
              <img
                src="/images/images.jpg"
                className="rounded"
                width={100}
                height={100}
              />
            </a>
          </Link>
          Image
        </div>
        <div>
          <Link href={"/category"}>
            <a>
              <img
                src="/images/pexel.jpeg"
                className="rounded"
                width={100}
                height={50}
              />
            </a>
          </Link>
          Navbar
        </div>
        <div>
          <Link href={"/category"}>
            <a>
              <img
                src="/images/pexels.jpeg"
                className="rounded"
                width={100}
                height={50}
              />
            </a>
          </Link>
          vxfcgcfcf
        </div>
        <div>
          <a>
            <img
              src="/images/pexels.jpeg"
              className="rounded"
              width={100}
              height={100}
            />
          </a>

          <Link href={"/login"}>dfsf</Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
