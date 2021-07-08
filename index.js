const Koa = require('koa');
const Router = require('koa-router')
const fs = require('fs');

const exec = require('child_process').exec;
// const parser = require("@babel/parser")
// const traverse = require('@babel/traverse').default
// const babel = require('@babel/core')
// const generate = require('@babel/generator').default;

const router = new Router();
const app = new Koa();

let ast = null;

router.get('/changeData', async (ctx, next) => {
    const data = fs.readFileSync('E:/20201111/Gitlab/testnode/src/pc/views/aboutUs/studentHonor.js', 'utf-8')
    const regex = /title:.?".*",/

    const str = data.replace(regex, 'title: "nodejs改变",');

    fs.writeFileSync('E:/20201111/Gitlab/testnode/src/pc/views/aboutUs/studentHonor.js', str, 'utf8');

    next();//执行命令

    console.log("npm run build执行完毕")
    ctx.response.body = '已设置'
})






const execCmd = (ctx, next) => {

    console.log("执行shell")

    const subprocess = exec('npm run build', { cwd: "E:/20201111/Gitlab/testnode" });

    const subprocessPid = subprocess.pid;

    ctx.firstPid = subprocessPid;
    console.log(subprocessPid)


    subprocess.stdout.on('data', function (message) {//监听子进程输出

        console.log('正确执行:', message)

        if (message.indexOf('The build folder is ready to be deployed.') !== -1) {
            console.log("打包完毕");
            next();
        }

    })


    subprocess.stderr.on('data', function (message) {//监听子进程错误输出
        console.log('错误输出:', message)
    })

    subprocess.on('exit', function (code, _) {//监听子进程退出
        console.log('子进程已退出，代码：' + code);
    });
    subprocess.on('close', function (code, _) {//监听子进程退出
        console.log('子进程已关闭，代码：' + code);
    });

}

const execRun = (ctx, next) => {
    console.log("进入静态服务器")
    const subprocess = exec(`taskkill /pid ${ctx.firstPid} -f && serve -s build`, { cwd: "E:/20201111/Gitlab/testnode" }, (error, stdout, stderr) => {
        console.log("执行完成静态资源服务器")
    })

    subprocess.stdout.on('data', function (message) {//监听子进程输出

        console.log('正确执行静态服务器:', message)

    })
    subprocess.stderr.on('data', function (message) {//监听子进程错误输出
        console.log('错误输出静态服务器:', message)
    })

}

app.use(router.routes());
app.use(execCmd);
app.use(execRun);


app.listen(4000, () => {
    console.log('服务已启动')
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
/**
 *
 *
 * ast = parser.parse(data, {
        sourceType: "module",
        plugins: [
            // enable jsx and flow syntax
            "jsx",
            "flow",
        ],
    });
 * traverse(ast, {
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
 */
