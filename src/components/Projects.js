// Import Assets
import Whitelist from '../assets/Whitelist.png';
import CoinMarketCap from '../assets/Coin MarketCap Clone.png';
import Invoicing from '../assets/Invoicing.png';
import defiTippingDapp from '../assets/defiTippingDapp.png';
import uniswapV3PoolFinder from '../assets/uniswapV3PoolFinder.png';
import CheckContractAddressOrRegularAddress from '../assets/CheckContractAddressOrRegularAddress.png'
import uniswapV3TokenDetailsFinder from '../assets/uniswapV3TokenDetailsFinder.png'
import uniswapV3Oracle from '../assets/uniswapV3Oracle.png'
const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3><b>Coin MarketCap Clone</b></h3>
                    <img src={CoinMarketCap} alt="CoinMarketCap Page" />
                    <p><li>To see Top 100 Cryptocurrencies with Live 24 hour Price Change in percentage as well as Volume Change.</li>
                       <li>This site uses Coinmarket Cap API to fetch the real time transaction details from blockchain using querying algorithms and Nextjs to show the details on frontend </li>
                    </p>

                    <a href="https://coin-market-cap-clone-five.vercel.app" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/CoinMarketCap-Clone" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3><b>Make the Addresses Whitelist</b></h3>
                    <img src={Whitelist} alt="Whitelist Landing page" />
                    <p>
                    <li>We want to give early supporters an access to a whitelist for an NFT collection; where Whitelist access should be given to the first 10 users for free.</li>
                    <li>This site uses Solidity as backend and Nextjs as Frontend with Ethersjs as Middleware</li>
                    </p>

                    <a href="https://whitelist-dapp-8u2n3x3t1-coderraj07.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/WhiteList_DApp" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3><b>Invoice Keeping DApp</b></h3>
                    <img src={Invoicing} alt="Invoice Storing Landing Page" />
                    <p><li>This Dapp is used to store buyer's invoicing details using buyer's pan ID</li>
                       <li>Where buyer can see his purchase history with dates using his pan ID.</li>
                       <li>This site uses Solidity as it's backend, Ethersjs as the middleware and Simple ECMAScript for the frontend</li>
                    </p>

                    <a href="https://coderraj07.github.io/Invoice-Details-Project/InvoiceDetails.html" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Invoice-Details-Project" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3><b>Ethereum Address Validator</b></h3>
                    <img src={CheckContractAddressOrRegularAddress} alt="CheckContractAddressOrRegularAddress Page" />
                    <p><li>To Check the provided address is of Contract Address or Regular Address or Invalid Address</li>
                       <li>This site uses ethersjs to connect frontend with backend of solidity which uses a predefined algorithm to verify the provided address </li>
                    </p>

                    <a href="https://address-validator-theta.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Check-Address-is-Contract-Address-or-Regular-Address" target="_blank" className="button">Code</a>
                </div>


                <div className="projects__card">
                    <h3><b>Buy me a coffee Defi Tipping Dapp</b></h3>
                    <img src={defiTippingDapp} alt="defiTippingDapp Page" />
                    <p><li>It is a Dapp for Tipping people with ethers for Coffee</li>
                       <li>We can tip ethers using this dapp to the service provider, whose service we enjoyed</li>
                       <li>As well as we can see who tipped and what message they want to send to the service provider</li>
                    </p>

                    <a href="https://defi-tipping-dapp-9dn2advuw-coderraj07.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Defi_tipping-Dapp" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3><b>Uniswap V3 pool finder</b></h3>
                    <img src={uniswapV3PoolFinder} alt="uniswapV3PoolFinder Page" />
                    <p><li>Earlier I had a problem of getting pool Address to perform swap using Uniswap Labs V3 protocol programmatically</li>
                       <li>So I created a Dapp using which we can get Pool Address of any two pairs of tokens available on Uniswap V3 Protocol</li>
                       <br/>
                    </p>

                    <a href="https://uniswap-v3-pool-address-finder.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Uniswap_V3_Pool_Address_Finder" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3><b>Uniswap V3 Token Details finder</b></h3>
                    <img src={uniswapV3TokenDetailsFinder} alt="uniswapV3TokenDetailsFinder Page" />
                    <p> <li>Searching for an address of a particular token is an hectic process and we may end up getting a wrong address</li>
                        <li>Using this dapp We can find the address as well as other details about any token that is getting traded on Uniswap V3 Protocol just by putting the Token's symbol as an input</li>
                        <li>This Dapp uses GraphQL to query the <b>Uniswap V3 subgraph</b> and axios to fetch data from that particular subgraph</li>
                       <br/>
                    </p>

                    <a href="https://token-details-finder.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Token-Details-Finder-Using-Uniswap-V3-Subgraph" target="_blank" className="button">Code</a>
                </div>

                 <div className="projects__card">
                    <h3><b>Uniswap V3 Oracle</b></h3>
                    <img src={uniswapV3Oracle} alt="uniswapV3Oracle page" />
                    <p><li>The Price and amount out shown in the Uniswap can easily be manipulated, if attacker knows that we are relying on it's latest price </li>
                       <li>The attacker can make a really large trade on Uniswap when liquidity is low and it changes the price </li>
                       <li>To avoid such oracle problems I have created a Dapp that fetches <b>OracleLibrary.sol</b> functionalities through our custom smart contract to calculate the amount of tokens to be received and shows the token amount to be received on frontend</li>
                       <br/>
                    </p>

                    <a href="https://uniswapv3oracle.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/UniswapV3_Oracle" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
