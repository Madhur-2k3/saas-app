"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchparams = useSearchParams();
  const query = searchparams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    const delayDebouncefn = setTimeout(() => {

    if (searchQuery) {
      const newUrl = formUrlQuery({
        params: searchparams.toString(),
        key: "topic",
        value: searchQuery,
      });
      router.push(newUrl, { scroll: false });
    } else {
      if (pathName === "/companions") {
        const newUrl = removeKeysFromUrlQuery({
          params: searchparams.toString(),
          keysToRemove: ["topic"],
        });

        router.push(newUrl, { scroll: false });
      }
    }
    }, 500);
  }, [searchparams, searchQuery, pathName, router]);

  

  return (
    <div className="relative border border-black rounded-lg flex items-center gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search icon" width={15} height={15} />
      <input
        type="text"
        placeholder="Search companions..."
        className=" outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
