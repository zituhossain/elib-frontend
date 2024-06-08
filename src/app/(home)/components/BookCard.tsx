import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <Image
        src={book.coverImage}
        alt={book.title}
        width={150}
        height={150}
        // sizes="100vw"
        // style={{ width: "auto", height: "auto" }}
      />
      <div>
        <h2 className="text-xl font-bold text-primary-600 line-clamp-2 text-balance">
          {book.title}
        </h2>
        <p className="text-primary-900 font-bold mt-1">{book.author.name}</p>
        <Link
          href={`/books/${book._id}`}
          className="text-primary-500 font-medium text-sm rounded border border-primary-500 px-2 py-1 mt-4 inline-block hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
