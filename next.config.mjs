/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['pdf-parse'],
    },
    // `pdfjs-dist` (pulled in by react-pdf via pdf-parser-client-side) has a
    // server-only `require('canvas')` that we don't need in the browser flow.
    // Aliasing it to `false` tells webpack to treat it as an empty module
    // during server compilation, which is the pdfjs-maintained workaround.
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                canvas: false,
            };
        }
        return config;
    },
};

export default nextConfig;
