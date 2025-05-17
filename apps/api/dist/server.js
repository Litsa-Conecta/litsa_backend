"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const auth_1 = require("./plugins/auth");
const crm_1 = require("./routes/crm");
const app = (0, fastify_1.default)();
app.register(cors_1.default);
app.register(auth_1.authPlugin);
app.register(crm_1.crmRoutes);
app.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
    if (err)
        throw err;
    console.log(`Server listening on ${address}`);
});
