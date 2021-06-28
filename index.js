const Koa = require('koa');
const Router = require('koa-router')
const fs = require('fs');
const parser = require("@babel/parser")
// const traverse = require('@babel/traverse').default
// const babel = require('@babel/core')

const router = new Router();
const app = new Koa();

router.get('/changeData', async (ctx, next) => {

    const data = fs.readFileSync('D:/project/react-cli/offical-pc-website-builder/src/pc/views/danceTraining/hipHop.js', 'utf-8')
    // const data = fs.readFileSync('E:/20201111/Gitlab/offical-mobile-website-builder/src/beijing/pc/common/js/public.js', 'utf-8')
    const ast = parser.parse(data, {
        sourceType: "module",
        plugins: [
            // enable jsx and flow syntax
            "jsx",
            "flow",
        ],
    });
    ctx.response.body = ast

})

app.use(router.routes());


app.listen(4000, () => {
    console.log('服务已启动')
})