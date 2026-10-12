import blackcatHandler from '../blackcat/transaction.js';

export default async function handler(req, res) {
  return blackcatHandler(req, res);
}
