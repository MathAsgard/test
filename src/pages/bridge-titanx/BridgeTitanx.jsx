import React from "react";
import DropdownGroupTwo from "../../components/DropdownGroupTwo";
import { ExchangeIcon2 } from "../../components/Icon";
import Layout from "../../components/Layout";
const BridgeTitanx = () => {
	return (
		<Layout>
			<div className="atropine-top text-base">
				<h2 className="title">Bridge TITANX</h2>
				<div className="font-regular">
					Wrap your tokens and bridge to Binance Chain
				</div>
				<div
					className="mx-auto"
					style={{ maxWidth: "442px", marginTop: "35px" }}
				>
					<div className="atropine-card overflow-visible">
						<div
							className="bridge-top"
							style={{
								background: `url(/img/bridge-titanx-bg.png) no-repeat center bottom / contain`,
							}}
						>
							<span>
								Wrap / <span className="text-white">Unwrap</span> TITANX
							</span>
							<img
								src="/img/bridge-titanx-icon.png"
								className="img1"
								alt=""
							/>
							<img
								src="/img/bridge-titanx-icon.png"
								className="img2"
								alt=""
							/>
						</div>
						<div className="bridge-body">
							<div className="d-flex mb-12">
								<div className="w-0 flex-grow-1">
									<DropdownGroupTwo
										label={"Network"}
										options={options}
									/>
								</div>
								<span className="px-2 px-sm-4"></span>
								<div className="w-0 flex-grow-1">
									<DropdownGroupTwo
										label={"Token"}
										options={options2}
									/>
								</div>
							</div>
							<div className="bridge-card">
								<div className="top">
									<div className="d-flex justify-content-between mb-19">
										<div>From</div>
										<div>Balance: 00.00</div>
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<input
											type="text"
											className="form-control text-16 font-medium text-white transparent-input"
											placeholder="0.0"
										/>
										<div className="d-flex align-items-center gap-2">
											<button class="__max no-gutter" type="button">
												Max
											</button>
											<img
												src="/img/titan.png"
												width={28}
												height={28}
												alt=""
											/>
											<div className="text-16 font-medium">WTX</div>
										</div>
									</div>
								</div>
								<div className="bottom d-flex justify-content-between">
									<span>Min: 00.00</span>
									<span>Max: 000,000.00</span>
								</div>
							</div>
							<div className="py-20px">
								<ExchangeIcon2 />
							</div>
							<div className="d-flex mb-12">
								<div className="w-0 flex-grow-1">
									<DropdownGroupTwo
										label={"Network"}
										options={options3}
									/>
								</div>
								<span className="px-2 px-sm-4"></span>
								<div className="w-0 flex-grow-1">
									<DropdownGroupTwo
										label={"Token"}
										options={options4}
									/>
								</div>
							</div>
							<div className="bridge-card">
								<div className="top">
									<div className="mb-19 text-start">
										You will receive:
									</div>
									<div className="d-flex justify-content-between align-items-center">
										{/* <div className="text-16 text-white">0.00</div> */}
										<input
											type="text"
											className="form-control text-16 font-medium text-white transparent-input"
											placeholder="0.0"
										/>
										<div className="d-flex align-items-center gap-2">
											<img
												src="/img/wittax.png"
												width={28}
												height={28}
												alt=""
											/>
											<div className="text-16">WTX</div>
										</div>
									</div>
								</div>
								<div className="bottom d-flex justify-content-between">
									<span>$0.00</span>
								</div>
							</div>
							<button
								className="cmn-btn w-100 font-bold mt-4 text-16"
								type="button"
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

const options = [
	{
		name: "Etherium",
		value: "Etherium",
		img: "/img/eth.png",
	},
	{
		name: "BSC Chain",
		value: "BSC Chain",
		img: "/img/bsc.png",
	},
	{
		name: "WTITANX",
		value: "WTITANX",
		img: "/img/wittax.png",
	},
	{
		name: "TITANX",
		value: "TITANX",
		img: "/img/titan.png",
	},
];
const options2 = [
	{
		name: "TITANX",
		value: "TITANX",
		img: "/img/titan.png",
	},
	{
		name: "WTITANX",
		value: "WTITANX",
		img: "/img/wittax.png",
	},
	{
		name: "Etherium",
		value: "Etherium",
		img: "/img/eth.png",
	},
	{
		name: "BSC Chain",
		value: "BSC Chain",
		img: "/img/bsc.png",
	},
];
const options3 = [
	{
		name: "BSC Chain",
		value: "BSC Chain",
		img: "/img/bsc.png",
	},
	{
		name: "WTITANX",
		value: "WTITANX",
		img: "/img/wittax.png",
	},
	{
		name: "Etherium",
		value: "Etherium",
		img: "/img/eth.png",
	},
	{
		name: "TITANX",
		value: "TITANX",
		img: "/img/titan.png",
	},
];
const options4 = [
	{
		name: "WTITANX",
		value: "WTITANX",
		img: "/img/wittax.png",
	},
	{
		name: "Etherium",
		value: "Etherium",
		img: "/img/eth.png",
	},
	{
		name: "BSC Chain",
		value: "BSC Chain",
		img: "/img/bsc.png",
	},
	{
		name: "TITANX",
		value: "TITANX",
		img: "/img/titan.png",
	},
];
export default BridgeTitanx;
