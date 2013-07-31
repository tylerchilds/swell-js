swell-js
========

Swell JS is a JQuery plugin that easily reveals hidden content wells

Demo
----------------------------

[Demo](http://cdpn.io/Fxkdb)

Documentation
-------------

### You need to include the following css.
<pre>
    &lt;link rel="stylesheet" href="swell.css"&gt;
</pre>

### You need to include the following after Jquery has been included.
<pre>
   	&lt;script src="swell.js"&gt;&lt;/script&gt;
</pre>

Below is the basic syntax for a Swell. The lid will cover the content until the Swell is hovered over to reveal the content.
<pre>
    &lt;div class="sw-box sw-text"&gt;
        &lt;div class="sw-lid"&gt;
            &lt;!-- Lid --&gt;
        &lt;/div&gt;
        &lt;div class="sw-well"&gt;
            &lt;!-- Content --&gt;
        &lt;/div&gt;
    &lt;/div&gt;
</pre>

Finally, bind the plugin to a selector
<pre>
    $(function() {
        $('.sw-box').swell();
    });
</pre>

Below is a list of the options and their default values
<pre>
    $('.sw-box').swell({
        offset: "0", // positive or negative number to offset the lid
        direction: "top", // values: [top, left, right, bottom]
        duration: 200, // animation duration
        easing: "linear", // easing property
        animation: "slide", // values: [slide, flip, fade]
        shownCallback: null, // function name
        hiddenCallback: null // function name
    });
</pre>

### A quick note about the options
Offset and callbacks are not used for flip animations
Direction is not used for the fade animation

Compatibility
-------------

Tested in the following browsers

+ Chrome
+ Firefox
+ Opera Next
+ Opera ***
+ IE 7, 8, 9 ***

*** The flip animation is not compatible due to the CSS3 Transformations