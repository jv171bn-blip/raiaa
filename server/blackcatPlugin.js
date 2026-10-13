var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
function getBlackcatApiKey() {
    var apiKey = process.env.BLACKCAT_API_KEY ||
        process.env.BLACKCAT_SECRET_KEY ||
        '';
    if (!apiKey) {
        try {
            var envPath = path.resolve(process.cwd(), '.env');
            if (fs.existsSync(envPath)) {
                var envContent = fs.readFileSync(envPath, 'utf-8');
                var keyMatch = envContent.match(/BLACKCAT_API_KEY=(.*)/) ||
                    envContent.match(/BLACKCAT_SECRET_KEY=(.*)/);
                if (keyMatch)
                    apiKey = keyMatch[1].trim();
            }
        }
        catch (e) {
            console.error('[Blackcat Proxy] Erro ao ler .env:', e);
        }
    }
    if (!apiKey) {
        apiKey = 'sk_live_b1802bc43e0e87989c22d837fdbe9f688ff3c9ef2f6fbff4f820693d0ab32666';
    }
    return apiKey;
}
export function blackcatProxyPlugin() {
    return {
        name: 'blackcat-proxy',
        configureServer: function (server) {
            setupMiddleware(server.middlewares);
        },
        configurePreviewServer: function (server) {
            setupMiddleware(server.middlewares);
        },
    };
}
// Mascaramento server-side rígido:
// A Blackcat receberá estritamente "Kit Novo", referência genérica "PED-..." e nenhum metadado ou menção a farmácia/raia
var MASKED_PRODUCT_NAME = 'Kit Novo';
function sanitizeReference(ref) {
    if (!ref || typeof ref !== 'string') {
        return "PED-".concat(Date.now(), "-").concat(Math.floor(Math.random() * 89999 + 10000));
    }
    var cleaned = ref
        .replace(/(?:raia|droga|drogaria|farmacia|farmácia|farma|drogasil|portal)+/gi, 'PED')
        .replace(/(?:PED)+/g, 'PED')
        .replace(/--+/g, '-')
        .trim();
    if (!cleaned || cleaned === 'PED' || cleaned === 'PED-') {
        cleaned = "PED-".concat(Date.now(), "-").concat(Math.floor(Math.random() * 89999 + 10000));
    }
    return cleaned;
}
function sanitizeEmail(email) {
    if (!email || typeof email !== 'string')
        return '';
    var e = email.toLowerCase().trim();
    if (e.includes('raia') || e.includes('farmacia') || e.includes('droga')) {
        var userPart = e.split('@')[0].replace(/(raia|droga|drogaria|farmacia|farma|drogasil|portal)/gi, '') || 'cliente';
        return "".concat(userPart, "@gmail.com");
    }
    return email;
}
function sanitizeText(val) {
    if (!val || typeof val !== 'string')
        return '';
    return val.replace(/(raia|droga|drogaria|farmacia|farmácia|farma|drogasil|portal)/gi, '').trim();
}
function generateValidCPF() {
    var digits = [];
    for (var i = 0; i < 9; i++) {
        digits.push(Math.floor(Math.random() * 10));
    }
    if (digits.every(function (d) { return d === digits[0]; })) {
        digits[8] = (digits[8] + 1) % 10;
    }
    var sum1 = 0;
    for (var i = 0; i < 9; i++)
        sum1 += digits[i] * (10 - i);
    var rem1 = sum1 % 11;
    digits.push(rem1 < 2 ? 0 : 11 - rem1);
    var sum2 = 0;
    for (var i = 0; i < 10; i++)
        sum2 += digits[i] * (11 - i);
    var rem2 = sum2 % 11;
    digits.push(rem2 < 2 ? 0 : 11 - rem2);
    return digits.join('');
}
function buildBlackcatPayload(input) {
    var _a, _b, _c, _d, _e, _f;
    var amount = typeof (input === null || input === void 0 ? void 0 : input.amount) === 'number' ? input.amount : parseInt(input === null || input === void 0 ? void 0 : input.amount, 10) || 0;
    var externalRef = sanitizeReference((input === null || input === void 0 ? void 0 : input.reference) || (input === null || input === void 0 ? void 0 : input.externalRef));
    var customerName = sanitizeText((_a = input === null || input === void 0 ? void 0 : input.customer) === null || _a === void 0 ? void 0 : _a.name) || 'Cliente';
    var customerEmail = sanitizeEmail((_b = input === null || input === void 0 ? void 0 : input.customer) === null || _b === void 0 ? void 0 : _b.email) || 'cliente@gmail.com';
    var customerPhone = ((_c = input === null || input === void 0 ? void 0 : input.customer) === null || _c === void 0 ? void 0 : _c.phone) ? String(input.customer.phone).replace(/\D/g, '') : '';
    if (!customerPhone || customerPhone.length < 10) {
        customerPhone = '11999999999';
    }
    var docNumber = ((_e = (_d = input === null || input === void 0 ? void 0 : input.customer) === null || _d === void 0 ? void 0 : _d.document) === null || _e === void 0 ? void 0 : _e.number) || ((_f = input === null || input === void 0 ? void 0 : input.customer) === null || _f === void 0 ? void 0 : _f.document);
    if (typeof docNumber === 'string') {
        docNumber = docNumber.replace(/\D/g, '');
    }
    else {
        docNumber = '';
    }
    if (!docNumber || docNumber.length < 11) {
        docNumber = generateValidCPF();
    }
    var payload = {
        amount: amount,
        currency: 'BRL',
        paymentMethod: 'pix',
        items: [
            {
                title: MASKED_PRODUCT_NAME,
                unitPrice: amount,
                quantity: 1,
                tangible: false,
            },
        ],
        customer: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
            document: {
                number: docNumber,
                type: 'cpf',
            },
        },
        pix: {
            expiresInDays: 1,
        },
        externalRef: externalRef,
        metadata: MASKED_PRODUCT_NAME,
    };
    var addr = (input === null || input === void 0 ? void 0 : input.address) || (input === null || input === void 0 ? void 0 : input.shipping);
    if (addr && addr.street && addr.number) {
        var zipCode = addr.zipCode || addr.zipcode || '';
        var cleanZip = String(zipCode).replace(/\D/g, '');
        var cleanState = (addr.state || 'SP').toUpperCase().slice(0, 2);
        payload.shipping = {
            name: customerName,
            street: sanitizeText(addr.street) || addr.street,
            number: String(addr.number),
            complement: sanitizeText(addr.complement) || addr.complement || '',
            neighborhood: sanitizeText(addr.neighborhood) || addr.neighborhood || 'Centro',
            city: sanitizeText(addr.city) || addr.city || 'São Paulo',
            state: cleanState,
            zipCode: cleanZip.length === 8 ? cleanZip : '01001000',
        };
    }
    return payload;
}
function setupMiddleware(middlewares) {
    var _this = this;
    middlewares.use(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var rawUrl, url, isTransactionPath, isStatusPath, BLACKCAT_ACQUIRERS, body_1, id, apiKey, response, data, rawStatus, mappedStatus, err_1;
        var _this = this;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    rawUrl = req.originalUrl || req.url || '';
                    url = new URL(rawUrl, 'http://localhost');
                    isTransactionPath = url.pathname === '/api/blackcat/transaction' ||
                        url.pathname === '/api/flevo/transaction';
                    isStatusPath = url.pathname === '/api/blackcat/status' ||
                        url.pathname === '/api/flevo/status';
                    BLACKCAT_ACQUIRERS = [
                        'payzu',
                        'suitpay',
                        'asaas',
                        'ezzebank',
                        'celcoin',
                        'primepag',
                        'voluti',
                        'mercadopago',
                        'bspay',
                        'fitbank',
                        'iugu',
                        'woovi',
                        'starkbank',
                        'santsbank',
                        'fyhub',
                        'pagsmile',
                        null,
                    ];
                    if (req.method === 'POST' && isTransactionPath) {
                        body_1 = '';
                        req.on('data', function (chunk) {
                            body_1 += chunk;
                        });
                        req.on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                            var apiKey, parsed_1, basePayload, acquirersToTry, lastError, lastData, lastStatus, _i, acquirersToTry_1, acquirer, currentPayload, response, data, qrCode, qrCodeBase64, qrErr_1, formatted, subErr_1, err_2;
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                            return __generator(this, function (_p) {
                                switch (_p.label) {
                                    case 0:
                                        _p.trys.push([0, 13, , 14]);
                                        apiKey = getBlackcatApiKey();
                                        parsed_1 = JSON.parse(body_1 || '{}');
                                        basePayload = buildBlackcatPayload(parsed_1);
                                        acquirersToTry = parsed_1.acquirer
                                            ? __spreadArray([parsed_1.acquirer], BLACKCAT_ACQUIRERS.filter(function (a) { return a !== parsed_1.acquirer; }), true) : BLACKCAT_ACQUIRERS;
                                        lastError = null;
                                        lastData = null;
                                        lastStatus = 500;
                                        _i = 0, acquirersToTry_1 = acquirersToTry;
                                        _p.label = 1;
                                    case 1:
                                        if (!(_i < acquirersToTry_1.length)) return [3 /*break*/, 12];
                                        acquirer = acquirersToTry_1[_i];
                                        currentPayload = __assign({}, basePayload);
                                        if (acquirer) {
                                            currentPayload.acquirer = acquirer;
                                        }
                                        else {
                                            delete currentPayload.acquirer;
                                        }
                                        _p.label = 2;
                                    case 2:
                                        _p.trys.push([2, 10, , 11]);
                                        console.log("[Blackcat Proxy] Tentando adquirente: ".concat(acquirer || 'padrão'));
                                        return [4 /*yield*/, fetch('https://api.blackcatoficial.com/api/sales/create-sale', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'X-API-Key': apiKey,
                                                },
                                                body: JSON.stringify(currentPayload),
                                            })];
                                    case 3:
                                        response = _p.sent();
                                        return [4 /*yield*/, response.json()];
                                    case 4:
                                        data = (_p.sent());
                                        if (!(response.ok && data.success && data.data)) return [3 /*break*/, 9];
                                        qrCode = ((_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.paymentData) === null || _b === void 0 ? void 0 : _b.copyPaste) || ((_d = (_c = data.data) === null || _c === void 0 ? void 0 : _c.paymentData) === null || _d === void 0 ? void 0 : _d.qrCode) || '';
                                        qrCodeBase64 = ((_f = (_e = data.data) === null || _e === void 0 ? void 0 : _e.paymentData) === null || _f === void 0 ? void 0 : _f.qrCodeBase64) || null;
                                        if (!((!qrCodeBase64 || qrCodeBase64 === '') && qrCode)) return [3 /*break*/, 8];
                                        _p.label = 5;
                                    case 5:
                                        _p.trys.push([5, 7, , 8]);
                                        return [4 /*yield*/, QRCode.toDataURL(qrCode, {
                                                width: 320,
                                                margin: 1,
                                                color: {
                                                    dark: '#000000',
                                                    light: '#ffffff',
                                                },
                                            })];
                                    case 6:
                                        qrCodeBase64 = _p.sent();
                                        return [3 /*break*/, 8];
                                    case 7:
                                        qrErr_1 = _p.sent();
                                        console.error('[Blackcat Proxy] Erro ao gerar QR Code base64:', qrErr_1);
                                        return [3 /*break*/, 8];
                                    case 8:
                                        formatted = {
                                            success: true,
                                            status: 'success',
                                            payment_status: ((_h = (_g = data.data) === null || _g === void 0 ? void 0 : _g.status) === null || _h === void 0 ? void 0 : _h.toLowerCase()) || 'pending',
                                            transaction_id: ((_j = data.data) === null || _j === void 0 ? void 0 : _j.transactionId) || '',
                                            id: ((_k = data.data) === null || _k === void 0 ? void 0 : _k.transactionId) || basePayload.externalRef,
                                            qr_code: qrCode,
                                            qr_code_base64: qrCodeBase64,
                                            amount: ((_l = data.data) === null || _l === void 0 ? void 0 : _l.amount) || basePayload.amount,
                                            expires_at: ((_o = (_m = data.data) === null || _m === void 0 ? void 0 : _m.paymentData) === null || _o === void 0 ? void 0 : _o.expiresAt) || null,
                                            acquirer: acquirer || 'default',
                                            raw: data.data,
                                        };
                                        console.log("[Blackcat Proxy] Sucesso com adquirente ".concat(acquirer || 'padrão', "! TxID: ").concat(formatted.transaction_id));
                                        res.writeHead(201, { 'Content-Type': 'application/json' });
                                        res.end(JSON.stringify({ success: true, data: formatted }));
                                        return [2 /*return*/];
                                    case 9:
                                        console.warn("[Blackcat Proxy] Adquirente ".concat(acquirer || 'padrão', " falhou (Status ").concat(response.status, "):"), data.message || data.error);
                                        lastError = data.message || data.error || 'Erro ao processar adquirente na Blackcat';
                                        lastData = data;
                                        lastStatus = response.status || 500;
                                        return [3 /*break*/, 11];
                                    case 10:
                                        subErr_1 = _p.sent();
                                        console.warn("[Blackcat Proxy] Exce\u00E7\u00E3o na adquirente ".concat(acquirer || 'padrão', ":"), subErr_1.message);
                                        lastError = subErr_1.message;
                                        return [3 /*break*/, 11];
                                    case 11:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 12:
                                        console.error('[Blackcat Proxy] Todas as adquirentes falharam. Último erro:', lastError);
                                        res.writeHead(lastStatus, { 'Content-Type': 'application/json' });
                                        res.end(JSON.stringify({
                                            success: false,
                                            error: lastError || 'Erro ao criar venda na Blackcat após tentar todas as adquirentes',
                                            raw: lastData,
                                        }));
                                        return [3 /*break*/, 14];
                                    case 13:
                                        err_2 = _p.sent();
                                        console.error('[Blackcat Proxy] Erro na criação da transação:', err_2);
                                        res.writeHead(500, { 'Content-Type': 'application/json' });
                                        res.end(JSON.stringify({ success: false, error: err_2.message || 'Erro interno no proxy Blackcat' }));
                                        return [3 /*break*/, 14];
                                    case 14: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    }
                    if (!(req.method === 'GET' && isStatusPath)) return [3 /*break*/, 6];
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 4, , 5]);
                    id = url.searchParams.get('id') || url.searchParams.get('transactionId');
                    if (!id) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: false, error: 'Parâmetro id é obrigatório' }));
                        return [2 /*return*/];
                    }
                    apiKey = getBlackcatApiKey();
                    return [4 /*yield*/, fetch("https://api.blackcatoficial.com/api/sales/".concat(encodeURIComponent(id), "/status"), {
                            method: 'GET',
                            headers: {
                                'X-API-Key': apiKey,
                            },
                        })];
                case 2:
                    response = _f.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = (_f.sent());
                    if (!response.ok || !data.success) {
                        res.writeHead(response.status, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            success: false,
                            error: data.message || 'Erro ao consultar status na Blackcat',
                            raw: data,
                        }));
                        return [2 /*return*/];
                    }
                    rawStatus = ((_a = data.data) === null || _a === void 0 ? void 0 : _a.status) || 'PENDING';
                    mappedStatus = rawStatus.toLowerCase();
                    if (rawStatus === 'PAID')
                        mappedStatus = 'approved';
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        success: true,
                        status: mappedStatus,
                        id: (_b = data.data) === null || _b === void 0 ? void 0 : _b.transactionId,
                        external_id: (_c = data.data) === null || _c === void 0 ? void 0 : _c.transactionId,
                        amount: (_d = data.data) === null || _d === void 0 ? void 0 : _d.amount,
                        amount_in_reais: ((_e = data.data) === null || _e === void 0 ? void 0 : _e.amount) ? (data.data.amount / 100).toFixed(2) : undefined,
                        raw: data.data,
                    }));
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _f.sent();
                    console.error('[Blackcat Proxy] Erro ao consultar status:', err_1);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: err_1.message || 'Erro ao consultar status' }));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
                case 6:
                    next();
                    return [2 /*return*/];
            }
        });
    }); });
}
