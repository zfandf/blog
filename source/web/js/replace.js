var s = "{0}a{1}b{2}";



function format(s, d) {
    var s1 = s.replace(/{(\w)}/g, function() {
        return d[arguments[1]];
    });
    console.log(s1);
}
format(s, [2,1,0]);