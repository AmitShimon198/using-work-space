
export const findMatchPairToSum = ({ numbers, sum }: { numbers: number[], sum: number }) => {
    const results: number[] = []
    const dictionary: number[] = [];
    if (numbers?.length) {
        for (let index = 0; index < numbers.length; index++) {
            debugger
            const number = numbers[index];
            const pairIndex = dictionary[sum - number]
            if (pairIndex !== undefined) {
                return [numbers[pairIndex], number]
            }
            dictionary[number] = index;
        }
    }
    return results;
}