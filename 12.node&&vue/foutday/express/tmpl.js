let tmpl='i like <%=name%> is <%=age%>';
// let tmpl=`i like ${name} is ${age}`
let data={name:'zhufengpeixun',age:8};
//
// function remnder(tmpl,data) {
// return tmpl.replace(/<%=(\w+)%>/g,function () {
//     console.log(arguments);
//     return data[arguments[1]]
// })
// }
function remnder(tmpl,data) {
    return tmpl.replace(/ \$\{(\w+)\}/g,function () {
        console.log(arguments);
        return data[arguments[1]]
    })
}
console.log(remnder(tmpl, data));