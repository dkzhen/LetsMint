import Link from "next/link";
import React from "react";

export default function DetailItem({ title, data, link }) {
  return (
    <div className="flex flex-row  justify-between items-center">
      <p>{title}</p>
      {link != null ? (
        <Link
          target="_blank"
          className="pr-2 md:pr-10 text-blue-500"
          href={link}
        >
          {data}
        </Link>
      ) : (
        <p className="pr-2 md:pr-10">{data}</p>
      )}
    </div>
  );
}
