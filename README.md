# LazyHTML: Lazy load Ads, Widgets, Images & Any HTML elements.

LazyHTML is an OpenSource Javascript Library that Supports Lazy Loading any elements without Modifying Code, 
LazyHTML can lazy load Ads, Videos, Images, Widgets, Javascript, CSS, Inline-Javascript, Inline-CSS & Any HTML.
LazyHTML was initially developed with the intention to Lazy Load Ads

## Features & Pros

 - Cross browser compatible.
 - Support Asynchronous loading.
 - LazyHTML can load Both Asynchronous & Synchronous Ads, Widgets, Javascript codes Asynchronously. 
 - No HTML, Javascript or CSS Code modification required when Lazy Loading elements.
 - LazyHTML Supports lazy loading Ads without Modifying Adcodes.
 - Uses Intersection Observer with fall back to eager loading on its absence.
 - Supports eager loading.
 - Supports media queries.
 - Supports container dimension conditions. 




   ## Cons

  - HTML, CSS or Javascript comments are not allowed inside the wrapper.



# How it Works

Load the script.

```html
 <script async src="https://cdn.jsdelivr.net/npm/lazyhtml@1.0.0/dist/lazyhtml.min.js" crossorigin="anonymous"></script>
```



Wrap the elements those you want to Lazy Load.




```html
<div class="lazyhtml" data-lazyhtml>
  <script type="text/lazyhtml">
  <!--
  
Your HTML, CSS or Adcodes here. (including wrapping <script>,<style> tags)
  
  -->
  </script>
</div>
```



## Installation

Install via `npm`:

```bash
npm install --save lazyhtml
```



## Support

* IE7 and up, and modern browsers (Chrome, FF, Opera etc).
* Most modern browsers support intersection observer, If intersection observer is not available eager loading will be used.





* More Info about [LazyHTML ](https://www.guest.blog/post/12111/lazyhtml-a-break-through-in-lazyloading-elements/)
*  [Lazy Loading Ads ](https://www.guest.blog/post/12113/lazyload-ads/)
* [Hire me on Fiverr](https://www.fiverr.com/niresh12495)

