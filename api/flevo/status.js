import blackcatStatusHandler from '../blackcat/status.js';

export default async function handler(req, res) {
  return blackcatStatusHandler(req, res);
}
