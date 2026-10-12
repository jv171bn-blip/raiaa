/**
 * Gateway Pay Service (Blackcat Pay Bridge)
 * Mantém compatibilidade total com o código existente, agora operando com a API Blackcat.
 */

export * from './blackcatPayService';

import {
  createBlackcatPixTransaction,
  checkBlackcatPixStatus,
  BlackcatCustomer,
  BlackcatAddress,
  CreateBlackcatTransactionParams,
  BlackcatTransactionResponse,
  BlackcatStatusResponse,
  BLACKCAT_MASKED_PRODUCT_NAME,
} from './blackcatPayService';

export const FLEVO_MASKED_PRODUCT_NAME = BLACKCAT_MASKED_PRODUCT_NAME;

export type FlevoCustomer = BlackcatCustomer;
export type FlevoAddress = BlackcatAddress;
export type CreateFlevoTransactionParams = CreateBlackcatTransactionParams;
export type FlevoTransactionResponse = BlackcatTransactionResponse;
export type FlevoStatusResponse = BlackcatStatusResponse;

export const createFlevoPixTransaction = createBlackcatPixTransaction;
export const checkFlevoPixStatus = checkBlackcatPixStatus;
