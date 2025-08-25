let n = 5
for ( let i=5; i>=1; i--){
    let row = " ".repeat( n - i) + "*".repeat( 2 * i -1 )
    console.log(row)
}

for ( let i=2; i<=n; i++){
     let row = " ".repeat( n - i) + "*".repeat( ( 2 * i -1 ) )
    console.log(row)
}
