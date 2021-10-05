
export const calculateTwoNumbersSum = ({ numbers, sum }: { numbers: number[], sum: number }) => {
    const results: number[] = []
    const dictionary: number[] = [];
    if (numbers?.length) {
        for (let index = 0; index < numbers.length; index++) {
            const number = numbers[index];
            const pairIndex = dictionary[sum - number]
            if (pairIndex) {
                return [numbers[pairIndex], number]
            }
            dictionary[number] = index;
        }
    }
    return results;
}