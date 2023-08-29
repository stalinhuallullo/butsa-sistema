const path = require('path')
const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    ...nextTranslate()
}

module.exports = nextConfig
