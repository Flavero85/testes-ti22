const divide = require('./divide');

test ('Divide 10 / 2 para dar 5',()=>{
    expect (divide(10,2)).toBe(5);
});

test ('Divide 9 / 3 para dar 3',()=>{
    expect (divide(9,3)).toBe(3);
});
