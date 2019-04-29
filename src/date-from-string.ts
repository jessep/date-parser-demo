import chrono from "chrono-node";

export function parse(dateString: string) {
    const initialChronoResult = chrono.parse(dateString, new Date(), {
        forwardDate: true
    });
    const prevDateAsRefForNext = (
        refDate: Date,
        chronoResult: chrono.ParsedResult
    ) => {
        const newPartialChronoResult = chrono.parse(
            chronoResult.text,
            refDate,
            { forwardDate: true }
        );
        return newPartialChronoResult[0].start.date();
    };
    return initialChronoResult.reduceRight(prevDateAsRefForNext, new Date());
}
