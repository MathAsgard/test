import React from "react";
import { Modal } from "react-bootstrap";
import { ChevronDownIcon, ClearIcon } from "../../components/Icon";
import TokenSelect from "./TokenSelect";

const ZapperModal = ({ open, setOpen }) => {
	const [value, setValue] = React.useState(0);
	const [selectOpen, setSelectOpen] = React.useState(false);
	const [slippage, setSlippage] = React.useState("");
	return (
		<>
			<Modal
				show={open}
				onHide={() => setOpen(false)}
				centered
				className="zapper-modal"
			>
				<Modal.Body>
					<h5 className="title">
						Zap Tokens to{" "}
						<span className="text-base">RWDx-WTITANX LP</span>
					</h5>
					<div className="subtitle">
						Automatically convert any token into{" "}
						<span className="text-base">RWDx-WTITANX LP</span> tokens
					</div>
					<button
						type="button"
						className="no-gutter close-icon"
						onClick={() => setOpen(false)}
					>
						<ClearIcon />
					</button>
					<div className="zapper-modal-inner">
						<div className="zapper-modal-body">
							<div className="top d-flex justify-content-between align-items-center">
								<div>
									<input
										type="text"
										className="form-control amount font-medium transparent-input"
										placeholder="2,370"
									/>
									<div className="sub-amount">$123,839.51</div>
								</div>

								<button
									type="button"
									className="active-button-select no-gutter"
									onClick={() => {
										setSelectOpen(true);
										setOpen(false);
									}}
								>
									<div className="d-flex align-items-center gap-1">
										<img
											src={selectOptions[value].img}
											alt=""
											className="me-1"
										/>
										<h6 className="m-0">
											{selectOptions[value].name}
										</h6>
										<ChevronDownIcon />
									</div>
								</button>
							</div>
							<div className="bottom d-flex justify-content-between">
								<span>Min: 00.00</span>
								<span>Max: 000,000.00</span>
							</div>
						</div>
						<div className="slippage-buttons">
							<button
								type="button"
								className={slippage === "25%" ? "active" : ""}
								onClick={() => setSlippage("25%")}
							>
								25%
							</button>
							<button
								type="button"
								className={slippage === "50%" ? "active" : ""}
								onClick={() => setSlippage("50%")}
							>
								50%
							</button>
							<button
								type="button"
								className={slippage === "75%" ? "active" : ""}
								onClick={() => setSlippage("75%")}
							>
								75%
							</button>
							<button
								type="button"
								className={slippage === "max" ? "active" : ""}
								onClick={() => setSlippage("max")}
							>
								Max
							</button>
							<div className="d-flex align-items-center ms-auto">
								<input
									type="number"
									className="form-control"
									placeholder="2"
								/>{" "}
								<span>% Slippage</span>
							</div>
						</div>
						<div className="d-flex align-items-center justify-content-center gap-3 pt-4 pb-4 mt-3">
							<button
								type="button"
								className="harvest-button text-16 no-gutter font-bold btn-outline w-100 max-142"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="harvest-button text-16 no-gutter font-bold w-100 max-142"
							>
								Zap
							</button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
			<TokenSelect
				value={value}
				setValue={setValue}
				setOpen={setSelectOpen}
				setMainOpen={setOpen}
				open={selectOpen}
				options={selectOptions}
			/>
		</>
	);
};

const selectOptions = [
	{
		img: "/img/icons/bnb.png",
		name: "BNB",
		subtitle: "Binance Chain Native Token",
		price: "1,283,299.88",
	},
	{
		img: "/img/icons/cake.png",
		name: "CAKE",
		subtitle: "PancakeSwap Token",
		price: "59,300.45",
	},
	{
		img: "/img/icons/usdt.png",
		name: "USDT",
		subtitle: "Tether USD",
		price: "14,884.88",
	},
	{
		img: "/img/icons/eth.png",
		name: "ETH",
		subtitle: "Ethereum Token",
		price: "1,283,299.88",
	},
	{
		img: "/img/icons/btcb.png",
		name: "BTCB",
		subtitle: "BTCB Token",
		price: "1,283,299.88",
	},
];

export default ZapperModal;
