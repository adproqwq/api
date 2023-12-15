const {
    createProxyMiddleware
} = require('http-proxy-middleware')
module.exports = (req, res) => {
    let target = ''
    if (req.url.startsWith('/adpro/oi')) {
        target = 'https://oiapi.net'
        createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite: {
                '^/adpro/([^/]*)/': '/'
            }
        })(req, res)
    }
    else if(req.url.startsWith('/adpro/xingzhige')){
        target = 'https://api.xingzhige.com'
        createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite: {
                '^/adpro/([^/]*)/': '/'
            }
        })(req, res)
    }
    else if(req.url.startsWith('adpro/st')){
        target = 'https://api.lolicon.app/setu'
        createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite: {
                '^/adpro/([^/]*)/': '/'
            },
            headers: {
                Referer: 'https://api.lolicon.app/'
            }
        })(req, res)
    }
}