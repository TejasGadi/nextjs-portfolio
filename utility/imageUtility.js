import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/sanity.client'

const builder = imageUrlBuilder(client)
function urlFor(source) {
    if (!source) {
      console.error('Image source is undefined');
      return '';
    }
    const url = builder.image(source);
    return url;
  }

export default urlFor;
