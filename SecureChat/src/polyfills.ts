/**
 * This file, which is loaded before the app, contains the polyfills that Angular requires.
 * You can add your own extra polyfills to this record.
 * * There are two sections to this file:
 *   1. Polyfills for browsers. These are sorted by browser and are applied prior to loading ZoneJS.
 *   2. Imports applications. Files that should be loaded prior to your main * file and were imported after ZoneJS.
 *
 * The ongoing arrangement is for supposed "evergreen" programs; the last adaptations of programs that
 * naturally update themselves. This incorporates ongoing variants of Safari, Chrome (counting
 * Show), Edge on the work area, and iOS and Chrome on versatile.
 * 
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * The following flags must be set prior to the loading of "zone.js," and webpack will place import at the top of the bundle, requiring the user to create a separate file in this directory (for example: zone-flags.ts), and put the accompanying banners
 * into that document, and afterward add the accompanying code prior to bringing in zone.js.
 * import './zone-banners';
 Here is a list of the flags that can be used in zone-flags.ts.
 *
 * The accompanying banners will work for all programs.
 * (like any other window).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame * (as any window), with zone_disable_on_property set to true; // disable patch onProperty, such as onclick * (as with any window).__zone_symbol__UNPATCHED_EVENTS = ["scroll"], "mousemove"; // disable patch specified eventNames in the IE/Edge developer tools. The addEventListener will also be wrapped by zone.js with the following flag, allowing it to bypass the "zone.js" patch for IE/Edge 
 * * * (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js';  // It is included with Angula-CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */
