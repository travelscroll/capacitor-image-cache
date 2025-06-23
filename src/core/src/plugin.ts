import { registerPlugin } from '@capacitor/core';
import { IImageCache } from './definitions';

const ImageCachePlugin : IImageCache = registerPlugin<IImageCache>(
    'ImageCachePlugin',
    {
        web: () => import('./web').then(m => new m.ImageCachePluginWeb()),
    },
);

export class ImageCache implements IImageCache {
    clear(): Promise<{ value: boolean }> {
        return ImageCachePlugin.clear();
    }

    clearItem(options: { src: string }): Promise<{ value: boolean }> {
        return ImageCachePlugin.clearItem(options);
    }

    hasItem(options: { src: string }): Promise<{ value: boolean }> {
        return ImageCachePlugin.hasItem(options);
    }

    get(options: { src: string, overwrite?: boolean }): Promise<{ value: string }> {
        return ImageCachePlugin.get(options);
    }

    saveImage(options: { src: string }): Promise<void> {
        return ImageCachePlugin.saveImage(options);
    }
}
