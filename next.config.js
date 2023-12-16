/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgbb.com',
                // port: '',
                // pathname: '/your-account/**',
            },
        ],
    },
    // output: "export"
}

module.exports = nextConfig
