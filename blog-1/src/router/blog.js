const { getList, getDetail, newBLog, updateBLog, delBLog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id
    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })

    }

    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const result = getDetail(id)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 新建博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const author = 'pyd'
        req.body.author = author
        const result = newBLog(req.body)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 更新博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBLog(id, req.body)
        return result.then(val => {
            if (val) {
                return new SuccessModel(val)
            } else {
                return new ErrorModel('更新博客失败')
            }

        })
    }

    // 删除博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        const author = '$author{}'
        const result = delBLog(id, author)
        return result.then(val => {
            if (val) {
                return new SuccessModel(val)
            } else {
                return new ErrorModel('删除博客失败')
            }

        })
    }
}

module.exports = handleBlogRouter