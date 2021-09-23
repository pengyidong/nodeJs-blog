const fs = require('fs')
const path = require('path')

const fileName = path.resolve.call(__dirname, 'data.text')

// 读取文件内容
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data.toString());
// })

// 写入文件
const content = '写入的内容\n'
const opt = {
    flag: 'a' // 追加写入，覆盖用'w'
}

fs.writeFile(fileName, content, opt, (err) => {
    if (err) {
        console.error(err)
        return
    }
})