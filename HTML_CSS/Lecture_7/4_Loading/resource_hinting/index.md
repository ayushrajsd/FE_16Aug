## Resource Hints
 preload, prefetch, and preconnect are resource hints that allow developers to optimize the performance of web pages by instructing the browser to make certain decisions in advance

## There are three main types of resource hints:

**preload** 

What it does: This hint informs the browser that a specific resource is crucial for the current page's performance and should be fetched as soon as possible.

How to use: You use the <link> tag with rel="preload" and specify the type of resource with the as attribute (e.g., as="script", as="style", as="image", etc.).

   -usecase : getting an image, font ,script that is required for the intial render
    - example 
    ```html
        <link rel="preload" href="/public/home.js" as="script">
    ```

**prefetch** - load content that may be needed to render the next page

    - usecase : Prefetched resources might be needed when the user navigates to the next page, or after the user starts interacting with the page. So loading them before the user starts the navigation will make the page load faster for them.
     
    - example:

    ```html
      <link rel="prefetch" href="/public/app.08343a72.js" as="script">
    ```

**preconnect** - 

What it does: This hint informs the browser to establish an early connection to an external domain. This includes the DNS lookup, TCP handshake, and optional TLS negotiation, which can save significant time for resources fetched from third-party origins.

    - example:

    ```html
    <link rel="preconnect" href="https://storage.googleapis.com">
    ```

Reference Article : https://www.debugbear.com/blog/resource-hints-rel-preload-prefetch-preconnect

