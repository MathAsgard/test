import React from "react";
import CountdownCard from "../../components/CountdownCard";
import Layout from "../../components/Layout";
const Claim = () => {
	return (
		<Layout>
			<div className="atropine-top text-base">
				<h2 className="title">Claim ETH Rewards</h2>
				<div>Claim your TITANX Ethereum Rewards</div>
				<div
					className="mx-auto"
					style={{ maxWidth: "625px", marginTop: "35px" }}
				>
					<div className="atropine-card overflow-visible claim-card">
						<div className="claim-body">
							<div className="claim-title">
								<h6>ETH Rewards</h6>
								<div>Earn TITANX ETH Rewards while holding WTITANX</div>
							</div>
							<div className="claim-inner-card">
								<div className="text-24 pt-3 pb-2 font-semibold price">
									3,485 <span className="text-base">ETH</span>
								</div>
								<div className="text-base text-16 font-semibold py-1">
									$142,585.66
								</div>
							</div>
							<div className="d-flex mb-10 mt-3">
								<div className="w-0 flex-grow-1">
									<div className="text-16 font-semibold mb-10">
										Unclaimed Rewards
									</div>
									<div className="claim-inner-card">
										<div className="text-20 py-2 font-semibold price">
											1.245 <span className="text-base">ETH</span>
										</div>
										<div className="text-base text-16 font-semibold py-1">
											$5,000.00
										</div>
									</div>
								</div>
								<span className="px-2 px-sm-4"></span>
								<div className="w-0 flex-grow-1">
									<div className="text-16 font-semibold mb-10">
										Next Payment Amount
									</div>
									<div className="claim-inner-card">
										<div className="text-20 py-2 font-semibold price">
											0.045 <span className="text-base">ETH</span>
										</div>
										<div className="text-base text-16 font-semibold py-1 d-flex justify-content-center">
											<CountdownCard
												targetDate={`October 30, 2050 00:00:00`}
											/>
										</div>
									</div>
								</div>
							</div>
							<button
								className="cmn-btn w-100 font-bold mt-4 text-16"
								type="button"
							>
								Claim ETH Rewards
							</button>
							<div className="claim-title mt-4">
								<h6>Transfer</h6>
								<div>Move your ETH to another wallet</div>
							</div>

							<div className="d-flex mb-10 mt-3">
								<div className="w-0 flex-grow-1">
									<div className="text-16 font-semibold mb-10">
										ETH Address
									</div>
									<input
										type="text"
										placeholder="Enter ETH Amount"
										className="form-control form--control form-control-2"
									/>
								</div>
								<span className="px-2 ps-sm-3"></span>
								<div className="w-0 flex-grow-1">
									<div className="text-16 font-semibold mb-10">
										ETH Amount to Transfer
									</div>
									<input
										type="text"
										placeholder="Enter ETH Amount"
										className="form-control form--control form-control-2"
									/>
								</div>
							</div>
							<button
								className="cmn-btn w-100 font-bold mt-4 text-16"
								type="button"
							>
								Transfer ETH
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Claim;
