import React from "react";
import { Modal } from "react-bootstrap";
import { ClearIcon } from "../../components/Icon";

const TokenSelect = ({
	value,
	setValue,
	open,
	setOpen,
	options,
	setMainOpen,
}) => {
	return (
		<>
			<Modal
				show={open}
				onHide={() => {
					setOpen(false);
					setMainOpen(true);
				}}
				centered
				className="zapper-modal select-modal"
			>
				<Modal.Body>
					<div className="top">
						<h5 className="title">Select a Token</h5>
						<button
							type="button"
							className="no-gutter close-icon"
							onClick={() => {
								setOpen(false);
								setMainOpen(true);
							}}
						>
							<ClearIcon />
						</button>
					</div>
					<div className="token-select-options">
						{options?.map((item, index) => (
							<button
								key={index}
								type="button"
								className={`${value === index ? "active" : ""}`}
								onClick={() => {
									setValue(index);
									setOpen(false);
									setMainOpen(true);
								}}
							>
								<div className="d-flex align-items-center w-0 flex-grow-1 gap-2">
									<img src={item.img} alt="" />
									<div className="w-0 flex-grow-1">
										<h6>{item.name}</h6>
										{item.subtitle}
									</div>
									<div className="text-white text-16">
										{item.price}
									</div>
								</div>
							</button>
						))}
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default TokenSelect;
