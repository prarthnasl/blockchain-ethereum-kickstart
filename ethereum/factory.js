import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x71d55950EC55bA609F5Cdb7DE67E866Fe767C0f2');

export default instance;
