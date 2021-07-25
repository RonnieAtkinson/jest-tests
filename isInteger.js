// module.exports = value => !isNaN(parseInt(value, 10));
// module.exports = value => !isNaN(value) && (x => (x | 0) === x)(parseFloat(value));
// module.exports = value => !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
module.exports = value => typeof value === 'number' && (value % 1) === 0;