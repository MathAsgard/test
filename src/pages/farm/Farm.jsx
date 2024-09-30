import React, { useState } from "react";
import img1 from "../../assets/img/RWDx-WTITANX.png";
// import img2 from "../../assets/img/pine-pdai.png";
// import img3 from "../../assets/img/pine-pwbtc.png";
import DropdownGroup from "../../components/DropdownGroup";
import Layout from "../../components/Layout";
import AtropineFarmCard from "./AtropineFarmCard";
import ZapperModal from "./ZapperModal";
const Farm = () => {
	const [active, setActive] = useState(true);
	const [stacked, setStacked] = useState(false);
	const [zapperOpen, setZapperOpen] = useState(false);
	return (
		<Layout>
			<div className="atropine-top text-base">
				<h2 className="title">FarmX</h2>
				<div>Stake your LP Tokens to earn yield in PINE tokens</div>
				<div
					className="mx-auto"
					style={{ maxWidth: "793px", marginTop: "19px" }}
				>
					<div className="row flex-md-nowrap g-3 g-sm-4 align-items-center">
						<div className="col-6 col-md-3">
							<DropdownGroup options={options} />
						</div>
						<div className="col-6 col-md-3">
							<input
								type="text"
								className="form-control form--control"
								placeholder="Search farms"
							/>
						</div>
						<div className="col-6 col-md-3 custom-sm-col">
							<div className="toggle-button-group">
								<button
									className={`toggle-button ${active ? "active" : ""}`}
									type="button"
									onClick={() => setActive(true)}
								>
									Active
								</button>
								<button
									className={`toggle-button ${active ? "" : "active"}`}
									type="button"
									onClick={() => setActive(false)}
								>
									Inactive
								</button>
							</div>
						</div>
						<div className="col-6 col-md-3 custom-sm-col">
							<label class="form-check form-switch form--switch">
								<input
									class="form-check-input"
									type="checkbox"
									checked={stacked}
									onChange={(e) => setStacked(e.target.checked)}
								/>
								<span>Staked Only</span>
							</label>
						</div>
						<div className="col-6 col-md-2 ps-md-0">
							<button
								className="harvest-button no-gutter mb-2 font-medium"
								style={{ height: "36px" }}
								type="button"
								onClick={() => setZapperOpen(true)}
							>
								Zapper
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Farms Card */}
			<div
				className="row g-4 justify-content-center"
				style={{ "--bs-gutter-x": "32px" }}
			>
				{stackedCardData.map((item, index) => (
					<div className="col-xl-4 col-sm-6" key={index}>
						<AtropineFarmCard {...item} />
					</div>
				))}
			</div>
			{/* Zapper Modal */}
			<ZapperModal open={zapperOpen} setOpen={setZapperOpen} />
		</Layout>
	);
};

const options = [
	{
		name: "Sort by",
		value: "",
	},
	{
		name: "Hot",
		value: "hot",
	},
	{
		name: "APR",
		value: "APR",
	},
	{
		name: "Earned",
		value: "earned",
	},
	{
		name: "Liquidity",
		value: "liquidity",
	},
];

const stackedCardData = [
	{
		img: img1,
		name: "RWDx-WTITANX",
	},
	{
		img: img1,
		name: "RWDx-WTITANX",
	},
	{
		img: img1,
		name: "RWDx-WTITANX",
	},
];

export default Farm;
