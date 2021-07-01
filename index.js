const Koa = require('koa');
const Router = require('koa-router')
const fs = require('fs');
const parser = require("@babel/parser")
const traverse = require('@babel/traverse').default
// const babel = require('@babel/core')
const generate = require('@babel/generator').default;

const router = new Router();
const app = new Koa();

let ast = null;

router.get('/changeData', async (ctx, next) => {
    const data = fs.readFileSync('D:/project/react-cli/offical-pc-website-builder/src/pc/views/danceTraining/hipHop.js', 'utf-8')
    ast = parser.parse(data, {
        sourceType: "module",
        plugins: [
            // enable jsx and flow syntax
            "jsx",
            "flow",
        ],
    });
    traverse(ast, {
        enter(path) {
            if (path.type === 'ClassDeclaration') {
                const obj = path.scope.block.body.body[0].value;
                const cache = []
                ctx.response.body = JSON.stringify(obj, function (key, value) {
                    if (typeof value === 'object' && value !== null) {
                        if (cache.indexOf(value) !== -1) {
                            // Circular reference found, discard key
                            return;
                        }
                        // Store value in our collection
                        cache.push(value);
                    }
                    return value;
                })

                console.log(path.scope.block)
            }
        },
    })

    // ctx.response.body = '已设置'
})

// router.get('/getData', async (ctx, next) => {


//     traverse(ast, {
//         enter(path) {
//             if(path.type === 'ClassDeclaration'){
//                 console.log(path.scope.block.body.body)
//             }
//         },
//     })

//     let code = generate(ast).code;
//     ctx.response.body = code
// })

app.use(router.routes());


app.listen(4000, () => {
    console.log('服务已启动')
})