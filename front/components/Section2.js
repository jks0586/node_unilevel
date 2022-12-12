import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Section2() {
  return (
    <section className="p-2">
      <div className="grid grid-cols-10 gap-4">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/image.png"}
              className="rounded"
              width={100}
              height={100}
            />
          </a>
        </Link>
        Category
      </div>
    </div>
  );
}
