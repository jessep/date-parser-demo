"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chrono_node_1 = __importDefault(require("chrono-node"));
function parse(dateString) {
    var initialChronoResult = chrono_node_1.default.parse(dateString, new Date(), {
        forwardDate: true
    });
    var prevDateAsRefForNext = function (refDate, chronoResult) {
        var newPartialChronoResult = chrono_node_1.default.parse(chronoResult.text, refDate, { forwardDate: true });
        return newPartialChronoResult[0].start.date();
    };
    return initialChronoResult.reduceRight(prevDateAsRefForNext, new Date());
}
exports.parse = parse;
