n = Number(prompt('Nhập số n'))
for (let i = 1 ; i <=n ; i++){
    let str = ''
    for (let j = 1; j <=  n - i; j++) {
    str = str + ' '
}
for (let j = 1;j <= i * 2 - 1 ;j++) {
    str = str + '*'
}
    console.log(str)
}