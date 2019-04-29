declare module "chrono-node" {
    // https://github.com/wanasit/chrono#parsedcomponents

    interface ParseOptions {
        forwardDate: boolean;
    }

    interface ParsedValue {
        day: number;
        month: number;
        year: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
        weekday: number;
    }
    export interface ParsedComponents {
        knownValues: ParsedValue | {};
        impliedValues: ParsedValue | {};

        date: () => Date;
    }

    export interface ParsedResult {
        start: ParsedComponents;
        end: ParsedComponents;
        index: number;
        text: string;
        ref: Date;
    }
    export function parse(dateString: string): ParsedResult[];
    export function parse(dateString: string, ref: Date): ParsedResult[];
    export function parse(
        dateString: string,
        ref: Date,
        options: ParseOptions
    ): ParsedResult[];
}
