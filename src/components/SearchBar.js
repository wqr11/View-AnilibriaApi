"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { queryClient } from "@/util/Provider";

import { useState } from "react";

import Image from "next/image";

import { FaMagnifyingGlass as FaSearch } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

import Spinner from "./Spinner";

import styles from "@/styles/SearchBar.module.css";

const SearchBar = () => {
	const [searchText, setSearchText] = useState("");

	const { data, refetch, isSuccess, isFetching } = useQuery({
		queryKey: ["searchQuery", "searchBar"],
		queryFn: async ({ signal }) => {
			return await axios.get(
				`/anilibriaApi/title/search?search=${searchText}&limit=20`,
				{ signal }
			);
		},
		enabled: !!searchText,
	});

	return (
		<div className={styles.search_container}>
			<div className={styles.search_div}>
				<input
					className={styles.search_bar}
					type="text"
					placeholder="Search"
					onChange={(e) => {
						e.preventDefault();
						setSearchText(e.target.value);
						queryClient.cancelQueries(["searchQuery", "searchBar"]);
						refetch();
					}}
					value={searchText}></input>
				<FaSearch className={styles.search_icon} />
				<button
					className={styles.cancel_icon}
					style={{ opacity: searchText ? "1" : "0" }}
					onClick={(e) => {
						e.preventDefault();
						setSearchText("");
					}}>
					<MdCancel />
				</button>
			</div>
			{isFetching && (
				<div className={`${styles.found_div}`}>
					<div className="my-[40px]">
						<Spinner loading={isFetching} />
					</div>
				</div>
			)}

			{isSuccess && data.data.list.length > 0 && !!searchText && (
				<div className={styles.found_div}>
					{data.data.list.map((item, idx) => (
						<div key={`found-card-${idx}`} className={styles.found_card}>
							<div className={styles.poster_image_div}>
								<Image
									className={styles.poster_image}
									src={`/anilibriaPosters/${item.posters.original.url.slice(
										1
									)}`}
									width={112}
									height={160}
									alt={item.names["ru"]}
								/>
							</div>
							<div className={styles.secondaries}>
								<div className={styles.titles}>
									<a
										className={styles.main_title}
										href={`/anime/${item.code}`}
										title={item.names["ru"]}>
										{item.names["ru"]}
									</a>
									<p className={styles.sub_title}>{item.names["en"]}</p>
								</div>
								<div>{item.type.full_string}</div>
								<div>{item.season.year}</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
