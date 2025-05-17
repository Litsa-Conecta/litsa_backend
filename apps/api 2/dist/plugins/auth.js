"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPlugin = authPlugin;
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
function authPlugin(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        const clerk = (0, clerk_sdk_node_1.createClerkClient)({ secretKey: process.env.CLERK_SECRET_KEY });
        fastify.addHook('onRequest', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
            if (token) {
                const session = yield clerk.verifyToken(token);
                request.auth = session;
            }
            else {
                reply.code(401).send({ message: 'Unauthorized' });
            }
        }));
    });
}
