
export const findMatchPairToSum = ({ numbers, sum }: { numbers: number[], sum: number }) => {
    const dictionary: number[] = [];
    if (numbers?.length) {
        for (let index = 0; index < numbers.length; index++) {
            const number = numbers[index];
            const pairIndex = dictionary[sum - number]
            if (pairIndex !== undefined) {
                const results = [numbers[pairIndex], number]
                return { results, sum };
            }
            dictionary[number] = index;
        }
    }
}