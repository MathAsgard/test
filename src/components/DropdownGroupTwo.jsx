import React, { useState } from "react";
import { ChevronDownIcon } from "./Icon";

const DropdownGroupTwo = ({ label, options }) => {
	const [index, setIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const activeIndex = options[index];
	return (
		<>
			{label && (
				<label className="d-block text-start font-medium mb-1">
					{label}
				</label>
			)}
			<div className={"__dropdown __dropdown-2"}>
				<div className="__dropdown-active" onClick={() => setOpen(!open)}>
					{activeIndex.img && <img src={activeIndex.img} alt="" />}
					{activeIndex.icon && activeIndex.icon}
					{activeIndex.name && (
						<span className="me-auto">{activeIndex.name}</span>
					)}
					<span className="caret">
						<ChevronDownIcon />
					</span>
				</div>
				<ul className={`__dropdown-menu ${open ? "active" : ""}`}>
					{options?.map(({ img, name, value }, i) => (
						<li
							key={i}
							onClick={() => {
								setIndex(i);
								setOpen(false);
							}}
							className={index === i ? "active" : ""}
						>
							{img && <img src={img} alt="name" />}
							{name && <span>{name}</span>}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default DropdownGroupTwo;
