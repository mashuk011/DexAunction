import React from "react";

const MarketSize = () => {
  return (
    <>
      <section className="market-size-comp">
        <div className="common-container">
          <button className="why-dex-aunction-label-bx market-size-text">
            <span>Market Size</span>
          </button>

          <div className="global-market-size-info-flex-bx">
            <h3>Global Auction Market Size</h3>

            <p>
              DexAuction aims to revolutionise the multi-trillion dollar Global
              Trading and Auction Markets — right from tokenised RWAs to
              traditional auctions, web2 platforms, NFT marketplaces and much
              more!
            </p>
          </div>


          <div className="sale-volume-main-bx">

            <div className="sale-valume-text-bx">
                <h6>GMV /  Sales Volume</h6>
                <span>(Values Billion USD for 2022)</span>
            </div>

            <div className="globe-img">
            </div>

            <div className="sales-volme-grid grid grid-three-col gap">

                <div className="sales-volume-bx">
                <p>Traditional Auction Houses</p>
                <h5>26.85</h5>
                </div>

                <div className="sales-volume-bx">
                <p>Web2 Auction Platforms</p>
                <h5>739.2</h5>
                </div>

                <div className="sales-volume-bx">
                <p>NFT Marketplaces</p>
                <h5>24.7</h5>
                </div>
                
            </div>

            
            <div className="sales-volme-grid grid grid-two-col gap">

                <div className="sales-volume-bx">
                <p>Crypto exchanges</p>
                <h5>1398.3</h5>
                </div>

                <div className="sales-volume-bx">
                <p>Tokenized RWA and Real-World Use-cases</p>
                <h5>1604</h5>
                </div>

                
                
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default MarketSize;
