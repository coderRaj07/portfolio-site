// Import Assets
import Whitelist from '../assets/Whitelist.png';
import CoinMarketCap from '../assets/Coin MarketCap Clone.png';
import Invoicing from '../assets/Invoicing.png';
import CheckContractAddressOrRegularAddress from '../assets/CheckContractAddressOrRegularAddress.png'
const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Coin MarketCap Clone</h3>
                    <img src={CoinMarketCap} alt="CoinMarketCap Page" />
                    <p><li>To see Top 100 Cryptocurrencies with Live 24 hour Price Change in percentage as well as Volume Change.</li>
                       <li>This site uses Coinmarket Cap API to fetch the real time transaction details from blockchain using querying algorithms and Nextjs to show the details on frontend </li>
                    </p>

                    <a href="https://coin-market-cap-clone-five.vercel.app" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/CoinMarketCap-Clone" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Whitelist DApp</h3>
                    <img src={Whitelist} alt="Whitelist Landing page" />
                    <p>
                    <li>We want to give early supporters an access to a whitelist for an NFT collection; where Whitelist access should be given to the first 10 users for free.</li>
                    <li>This site uses Solidity as backend and Nextjs as Frontend with Ethersjs as Middleware</li>
                    </p>

                    <a href="https://whitelist-dapp-8u2n3x3t1-coderraj07.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/WhiteList_DApp" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Invoice Keeping DApp</h3>
                    <img src={Invoicing} alt="Invoice Storing Landing Page" />
                    <p><li>This Dapp is used to store buyer's invoicing details using buyer's pan ID</li>
                       <li>Where buyer can see his purchase history with dates using his pan ID.</li>
                       <li>This site uses Solidity as it's backend, Ethersjs as the middleware and Simple ECMAScript for the frontend</li>
                    </p>

                    <a href="https://coderraj07.github.io/Invoice-Details-Project/InvoiceDetails.html" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Invoice-Details-Project" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Coin MarketCap Clone</h3>
                    <img src={CheckContractAddressOrRegularAddress} alt="CheckContractAddressOrRegularAddress Page" />
                    <p><li>To Check the provided address is of Contract Address or Regular Address or Invalid Address</li>
                       <li>This site uses ethersjs to connect frontend with backend of solidity which uses a predefined algorithm to verify the provided address </li>
                    </p>

                    <a href="https://coderraj07.github.io/Check-Address-is-Contract-Address-or-Regular-Address/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Check-Address-is-Contract-Address-or-Regular-Address" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
