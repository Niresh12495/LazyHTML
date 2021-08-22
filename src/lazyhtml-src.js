LazyHTML = (function() {
	'use strict';
	var debug = false;
	if(document.currentScript.getAttribute('debug') !== null) {
		var debug = true;
	} 
	var config = {
		containerElement: 'div',
		containerClass: 'lazyhtml'
	};
	var startTime,
		timeToComplete;
	var counter = counter || 1;
	/**
	 * Utility functions
	 */
	''.trim || (String.prototype.trim = function() {
		return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	});

	function log() {
		if(debug === true && window.console) {
			// Only run on the first time through - reset this function to the appropriate console.log helper
			if(Function.prototype.bind) {
				log = Function.prototype.bind.call(console.log, console);
			} else {
				log = function() {
					Function.prototype.apply.call(console.log, console, arguments);
				};
			}
			log.apply(this, arguments);
		}
	}
	// Debounce source: https://github.com/rhysbrettbowen/debounce
	/**
	 * @license
	 * 
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2013 Rhys Brett-Bowen
	 */
	var debounce = function(func, wait) {
		// we need to save these in the closure
		var timeout, args, context, timestamp;
		return function() {
			// save details of latest call
			context = this;
			args = [].slice.call(arguments, 0);
			timestamp = new Date();
			// this is where the magic happens
			var later = function() {
				// how long ago was the last call
				var last = (new Date()) - timestamp;
				// if the latest call was less that the wait period ago
				// then we reset the timeout to wait for the difference
				if(last < wait) {
					timeout = setTimeout(later, wait - last);
					// or if not we can null out the timer and run the latest
				} else {
					timeout = null;
					func.apply(context, args);
				}
			};
			// we only need to set the timer now if one isn't already running
			if(!timeout) {
				timeout = setTimeout(later, wait);
			}
		}
	};

	function addEvent(evnt, elem, func) {
		if(elem.addEventListener) // W3C DOM
			elem.addEventListener(evnt, func, false);
		else if(elem.attachEvent) { // IE DOM
			elem.attachEvent("on" + evnt, func);
		} else { // No much to do
			elem["on" + evnt] = func;
		}
	}
	/// Inter
	var el,
		adScripts,
		lazyAdEl,
		lazyAdElType,
		elWidth,
		elHeight,
		reqAdWidth,
		reqAdHeight,
		mq,
		sizeReqFulfilled,
		isLoaded;

	function lazyhtmlloader(target, onvisible, rootmarginvariable) {
		// log(onvisible);
		if(onvisible === true) {
			var rootMarginValue = "0%";
			log("Onvisible Margin True");
		} else if(typeof rootmarginvariable === 'undefined' || rootmarginvariable === null) {
			var rootMarginValue = "100%"; // Default Value
			log("Root Margin Value Undefined, Using Default Value");
			var isMobile = /Mobile/i.test(navigator.userAgent) || false;
			log("Is Mobile " + isMobile);
			if(isMobile) {
				var rootMarginValue = "175%";
			} else {
				var rootMarginValue = "125%";
			}
		} else {
			var rootMarginValue = rootmarginvariable + "%";
		}
		rootMarginValue = '0%' + ' ' + '0%' + ' ' + rootMarginValue + ' ' + '0%';
		var io = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(entry) {
				// reset timer
				startTime = new Date().getTime();
				if(entry.isIntersecting) {
					var element = entry.target;
					mq = element.getAttribute('data-matchmedia') || false;
					reqAdWidth = parseInt(element.getAttribute('data-adwidth'), 0) || false;
					reqAdHeight = parseInt(element.getAttribute('data-adheight'), 0) || false;
					adScripts = findAdScripts(element);
					for(var i = 0; i < adScripts.length; i++) {
						lazyAdEl = adScripts[i];
						isLoaded = (element.getAttribute('data-lazyhtml-loaded') === "true");
						if(reqAdWidth || reqAdHeight) {
							elWidth = element.offsetWidth;
							elHeight = element.offsetHeight;
							sizeReqFulfilled = true;
							if(reqAdWidth && (reqAdWidth > elWidth)) sizeReqFulfilled = false;
							if(reqAdHeight && (reqAdHeight > elHeight)) sizeReqFulfilled = false;
							if(sizeReqFulfilled === false) {
								// log('Lazy-loaded container dimensions fulfilment not met.', reqAdWidth, reqAdHeight, elWidth, elHeight, element, lazyAdEl);
								if(isLoaded) {
									unloadAds(element);
								}
								break;
							}
						}
						if(mq !== false && matchMedia(mq).matches === false) {
							// log('Lazy-loaded Ad media-query fulfilment not met.', element, lazyAdEl);
							if(isLoaded) {
								unloadAds(element);
							}
							break;
						}
						if(!isLoaded) {
							log('  ')
							log('*** Preparing to lazyhtml HTML Element with Intersection Observer ***');
							log('Root Margin Value is ' + rootMarginValue);
							adReplace(element, lazyAdEl.innerHTML, counter);
							// stop the clock…
							timeToComplete = (new Date().getTime() - startTime);
							timeToComplete = '~' + timeToComplete + 'ms';
							log('Lazy-loaded count: ', counter, timeToComplete);
							counter++;
							log('*** Lazy Loaded HTML Element with Intersection Observer ***');
							log('  ')
						}
						return counter;
					}
					observer.disconnect();
				}
			});
		}, {
			//  root: null,
			rootMargin: rootMarginValue,
			threshold: 0
		});
		// Delay works when trackVisibility is true, Delay needs to be at-least 100,       delay: 100
		//      trackVisibility: true,
		//  delay: 100
		io.observe(target);
	};

	function instantload(target) {
		// reset timer
		startTime = new Date().getTime();
		mq = target.getAttribute('data-matchmedia') || false;
		reqAdWidth = parseInt(target.getAttribute('data-adwidth'), 0) || false;
		reqAdHeight = parseInt(target.getAttribute('data-adheight'), 0) || false;
		adScripts = findAdScripts(target);
		for(var i = 0; i < adScripts.length; i++) {
			lazyAdEl = adScripts[i];
			isLoaded = (target.getAttribute('data-lazyhtml-loaded') === "true");
			if(reqAdWidth || reqAdHeight) {
				elWidth = target.offsetWidth;
				elHeight = target.offsetHeight;
				sizeReqFulfilled = true;
				if(reqAdWidth && (reqAdWidth > elWidth)) sizeReqFulfilled = false;
				if(reqAdHeight && (reqAdHeight > elHeight)) sizeReqFulfilled = false;
				if(sizeReqFulfilled === false) {
					// log('Lazy-loaded container dimensions fulfilment not met.', reqAdWidth, reqAdHeight, elWidth, elHeight, target, lazyAdEl);
					if(isLoaded) {
						unloadAds(target);
					}
					break;
				}
			}
			if(mq !== false && matchMedia(mq).matches === false) {
				// log('Lazy-loaded Ad media-query fulfilment not met.', target, lazyAdEl);
				if(isLoaded) {
					unloadAds(target);
				}
				break;
			}
			if(!isLoaded) {
				log(' ');
				log('*** Preparing to Eager Load HTML Element ***');
				adReplace(target, lazyAdEl.innerHTML, counter);
				// stop the clock…
				timeToComplete = (new Date().getTime() - startTime);
				timeToComplete = '~' + timeToComplete + 'ms';
				log('Lazy-loaded count: ', counter, timeToComplete);
				counter++;
				log('*** Eager Loaded HTML Element ***');
				log(' ');
			}
			return counter;
		}
		// finished
	}
	// Internals
	function find(tagName, className, context) {
		var results = [],
			selector, node, i, isLazyAd, classListSupported, querySelectorSupported,
			context = context || document;
		classListSupported = 'classList' in document.createElement("_"),
			querySelectorSupported = 'querySelectorAll' in document;
		if(querySelectorSupported) {
			selector = tagName;
			selector += className ? '.' + className : '';
			results = context.querySelectorAll(selector);
		} else {
			q = context.getElementsByTagName(tagName);
			for(i = 0; i < q.length; i++) {
				node = q[i];
				if(className === false) {
					results.push(node);
				} else {
					if(classListSupported) {
						if(node.classList.contains(className)) {
							results.push(node);
						}
					} else {
						if(node.className && node.className.split(/\s/).indexOf(className) !== -1) {
							results.push(node);
						}
					}
				}
			}
		}
		return results;
	};

	function findAdContainers(root) {
		var containers = find(config.containerElement, config.containerClass),
			node,
			isLazyAd = false,
			results = [];
		for(var i = 0; i < containers.length; i++) {
			node = containers[i];
			isLazyAd = (node.getAttribute('data-lazyhtml') !== null);
			if(isLazyAd === true) {
				results.push(node);
			}
		}
		return results;
	};

	function findAdScripts(root) {
		var ads = find('script', false, root),
			node,
			type,
			results = [];
		for(var i = 0; i < ads.length; i++) {
			node = ads[i];
			type = node.getAttribute('type');
			if(type && type === 'text/lazyhtml') {
				results.push(node);
			}
		}
		return results;
	};

	function stripCommentBlock(str) {
		// trim whitespace
		str = str.replace(/^\s+|\s+$/g, '');
		return str.replace('<!--', '').replace('-->', '').trim();
	};

	function adReplace(el, text, counter) {
		var node, target;
		log('Injecting lazy-loaded Ad', el);
		text = stripCommentBlock(text);
		setTimeout(function() {
			postscribe(el, text, {
				releaseAsync: true,
				error: function() {
					console.info('Some error occurred in rendering Block ' + counter);
				}
			});
		}, 0);
		// set the loaded flag
		el.setAttribute('data-lazyhtml-loaded', true);
	};

	function processAll(adContainers) {
		var supportsIntersectionObserver = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && "isIntersecting" in window.IntersectionObserverEntry.prototype;
		for(var x = 0; x < adContainers.length; x++) {
			el = adContainers[x];
			if((!supportsIntersectionObserver)) {
				// No Intersection observer
				instantload(el);
				   log("No Intersection Observer");
			} else if(el.getAttribute('eager') !== null) {
				instantload(el);
				// log("Instant Loaded");
			}
			// Intersection Observer Available
			else if(el.getAttribute('onvisible') !== null) {
				lazyhtmlloader(el, true);
				log("Observer available, But Onvisible");
			} else if(el.getAttribute('threshold') !== null) {
				var thresholdvariable = el.getAttribute('threshold');
				if(!isNaN(thresholdvariable)) {
					lazyhtmlloader(el, false, el.getAttribute('threshold'));
					log("Observer available, Using threshold Value " + thresholdvariable);
				} else {
					lazyhtmlloader(el, false);
					log(thresholdvariable + ' Is not an Integer');
				}
			} else {
				lazyhtmlloader(el, false);
				log("Observer available, Using Default Values");
			}
		}
	};

	function unloadAds(el) {
		log('Unloading Ad:', el);
		var childNodes = el.getElementsByTagName('*');
		while(childNodes) {
			var child = childNodes[childNodes.length - 1];
			if(child.nodeName.toLowerCase() === 'script' && child.type === 'text/lazyhtml') {
				// dont want to remove the lazy-loaded script
				break;
			} else {
				child.parentNode.removeChild(child);
			}
		}
		el.setAttribute('data-lazyhtml-loaded', "false");
	}

	function init() {
		var adContainers, counter = counter || 0;
		// find all lazyads
		adContainers = findAdContainers();
		// process/replace/unload
		if(adContainers && adContainers.length > 0) {
			counter = processAll(adContainers);
		}
	};
	// dependency on ready.js
	domreadylazyhtml(function() {
		init();
		// watch the windows resize event
		addEvent('resize', window, debounce(function(e) {
			init();
		}, 250));
		var oldXHR = window.XMLHttpRequest;

		function newXHR() {
			var realXHR = new oldXHR();
			realXHR.addEventListener("readystatechange", function() {
				if(realXHR.readyState == 4 && realXHR.status == 200) {
					setTimeout(function() {
						init();
					}, 100);
				}
			}, false);
			return realXHR;
		}
		window.XMLHttpRequest = newXHR;
	});
console.log('Powered by LazyHTML: https://github.com/Niresh12495/LazyHTML ```Lazy Load Ads, Images, Widgets, CSS, JS and any HTML```');
})();