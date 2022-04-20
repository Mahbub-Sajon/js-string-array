const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    '1X59 Lenevo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with laptop'
];
const searching = 'laptop'
// indeOf
const output = [];
for(const product of products){
    // if(product.toLowerCase().indexOf(searching) != -1) { etao hobe vai
        if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);