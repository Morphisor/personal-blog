import { MetadataRoute } from "next";
import { SITE_METADATA } from "../utils/site-metadata";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_METADATA.title,
        short_name: SITE_METADATA.headerTitle,
        description: SITE_METADATA.description,
        start_url: '/',
        display: 'standalone',
        //background_color: '#fff',
        //theme_color: '#fff',
        icons: [
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            },
            {
                src: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png'
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            },
        ]
    }
}