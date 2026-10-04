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
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
// Carrega as credenciais da FlevoPay diretamente do .env no servidor
function getFlevoCredentials() {
    var apiKey = process.env.FLEVO_API_KEY || '';
    var accountId = process.env.FLEVO_ACCOUNT_ID || '10038';
    if (!apiKey) {
        try {
            var envPath = path.resolve(process.cwd(), '.env');
            if (fs.existsSync(envPath)) {
                var envContent = fs.readFileSync(envPath, 'utf-8');
                var keyMatch = envContent.match(/FLEVO_API_KEY=(.*)/);
                var accountMatch = envContent.match(/FLEVO_ACCOUNT_ID=(.*)/);
                if (keyMatch)
                    apiKey = keyMatch[1].trim();
                if (accountMatch)
                    accountId = accountMatch[1].trim();
            }
        }
        catch (e) {
            console.error('[FlevoPay Proxy] Erro ao ler .env:', e);
        }
    }
    // Chave secreta de fallback segura
    if (!apiKey) {
        apiKey = 'sk_3476ac27a86bffb0ac912200ffc8c1688545ae36c90acd384d3e1389390e4000';
    }
    return { apiKey: apiKey, accountId: accountId };
}
export function flevoPayProxyPlugin() {
    return {
        name: 'flevopay-proxy',
        configureServer: function (server) {
            setupMiddleware(server.middlewares);
        },
        configurePreviewServer: function (server) {
            setupMiddleware(server.middlewares);
        },
    };
}
function setupMiddleware(middlewares) {
    var _this = this;
    middlewares.use(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var rawUrl, url, body_1, id, apiKey, flevoUrl, response, data, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rawUrl = req.originalUrl || req.url || '';
                    url = new URL(rawUrl, 'http://localhost');
                    console.log('[Flevo Middleware]', req.method, rawUrl, url.pathname);
                    // 1. Endpoint para criar transação Pix: POST /api/flevo/transaction
                    if (req.method === 'POST' && url.pathname === '/api/flevo/transaction') {
                        body_1 = '';
                        req.on('data', function (chunk) {
                            body_1 += chunk;
                        });
                        req.on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                            var apiKey, parsed, response, data, _a, qrErr_1, err_2;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 7, , 8]);
                                        apiKey = getFlevoCredentials().apiKey;
                                        parsed = JSON.parse(body_1 || '{}');
                                        return [4 /*yield*/, fetch('https://app.flevopay.com.br/api/v1/transaction', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'X-API-Key': apiKey,
                                                },
                                                body: JSON.stringify(parsed),
                                            })];
                                    case 1:
                                        response = _b.sent();
                                        return [4 /*yield*/, response.json()];
                                    case 2:
                                        data = (_b.sent());
                                        if (!(data && data.qr_code && (!data.qr_code_base64 || data.qr_code_base64 === 'null'))) return [3 /*break*/, 6];
                                        _b.label = 3;
                                    case 3:
                                        _b.trys.push([3, 5, , 6]);
                                        _a = data;
                                        return [4 /*yield*/, QRCode.toDataURL(data.qr_code, {
                                                width: 320,
                                                margin: 1,
                                                color: {
                                                    dark: '#000000',
                                                    light: '#ffffff',
                                                },
                                            })];
                                    case 4:
                                        _a.qr_code_base64 = _b.sent();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        qrErr_1 = _b.sent();
                                        console.error('[FlevoPay Proxy] Erro ao gerar QR Code base64:', qrErr_1);
                                        return [3 /*break*/, 6];
                                    case 6:
                                        res.writeHead(response.status, { 'Content-Type': 'application/json' });
                                        res.end(JSON.stringify({ success: response.ok, data: data }));
                                        return [3 /*break*/, 8];
                                    case 7:
                                        err_2 = _b.sent();
                                        console.error('[FlevoPay Proxy] Erro na criação da transação:', err_2);
                                        res.writeHead(500, { 'Content-Type': 'application/json' });
                                        res.end(JSON.stringify({ success: false, error: err_2.message || 'Erro interno no proxy FlevoPay' }));
                                        return [3 /*break*/, 8];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    }
                    if (!(req.method === 'GET' && url.pathname === '/api/flevo/status')) return [3 /*break*/, 6];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    id = url.searchParams.get('id');
                    if (!id) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: false, error: 'Parâmetro id é obrigatório' }));
                        return [2 /*return*/];
                    }
                    apiKey = getFlevoCredentials().apiKey;
                    flevoUrl = "https://app.flevopay.com.br/api/v1/query?action=get_transaction&id=".concat(encodeURIComponent(id));
                    return [4 /*yield*/, fetch(flevoUrl, {
                            method: 'GET',
                            headers: {
                                'X-API-Key': apiKey,
                            },
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = (_a.sent());
                    res.writeHead(response.status, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        success: response.ok,
                        status: (data === null || data === void 0 ? void 0 : data.status) || 'unknown',
                        id: data === null || data === void 0 ? void 0 : data.id,
                        external_id: data === null || data === void 0 ? void 0 : data.external_id,
                        amount: data === null || data === void 0 ? void 0 : data.amount,
                        amount_in_reais: data === null || data === void 0 ? void 0 : data.amount_in_reais,
                        raw: data,
                    }));
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error('[FlevoPay Proxy] Erro ao consultar status:', err_1);
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
