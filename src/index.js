module.exports = function check(str, bracketsConfig) {
    const brackets = str.split('');
    const config = [];
    const result = [];
    let badConfig;

    bracketsConfig.map((el) => el.map((bracket) => config.push(bracket)));

    brackets.forEach((bracket) => {
        if (!config.includes(bracket)) {
            badConfig = 1;
        }
    });

    if (badConfig) return false;

    for (let i = 0; i < brackets.length; i++) {
        let last;
        let prev;

        last = config.indexOf(brackets[i]);
        prev = config.indexOf(result[result.length - 1]);

        if (result.length && (last - 1) === prev) {
            result.pop();
            // exceptions
        } else if ((brackets[i] === '|' || brackets[i] === '7' || brackets[i] === '8') && last === prev) {
            result.pop();
        } else {
            result.push(brackets[i]);
        }
    }

    return !result.length;
};
