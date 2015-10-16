/**
 * Get outdate browser link in AMG modal cap and set up css class to it
 * @name getOutDateBrowserLink
 * @constructor
 * @requires detectBrowser
 * @param {string} browserLinksClass - CSS class off browsers links
 * @param {string} classToAdd - CSS class, which will be added to user current browsers link
 * @param {string} dataset - data-attribute of browsers links with browsers name, to compare current user browser and browsers link
 * @example
 * setUpLink = new getOutDateBrowserLink();
 */
function getOutDateBrowserLink(browserLinksClass, classToAdd, dataset) {
    browserLinksClass = browserLinksClass || '.amg-outdate__browser';
    classToAdd = classToAdd || ' amg-outdate__browser--isUsed';
    dataset = dataset || 'data-browser';
    var browserLinks = document.querySelectorAll(browserLinksClass);

    if (browserLinks.length) {
        for (var i = 0; i < browserLinks.length; i++) {
            if (browserLinks[i].getAttribute(dataset) == userBrowserIs.getBrowser()) {
                browserLinks[i].className += (' ' + classToAdd);
            }
        }
    }

}

setUpLink = new getOutDateBrowserLink();
