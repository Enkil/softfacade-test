/**
 * Close AstraMediaGroup outdade browsers modal
 *
 * @function
 * @name closeAMGOutdateBrowserModal
 * @version 1.0.0
 * @author Igor Timohin <timohin.i@gmail.com>
 *
 * @param {string} cross - Cross icon in head of modal
 * @param {string} btn - "Thanks" text-btn in modal footer
 * @param {string} capWrapper - Modal wrapper
 *
 * @example
 * closeAMGOutdateBrowserModal();
 */
function closeAMGOutdateBrowserModal(cross, btn, capWrapper){
    cross = cross || "amg-outdate__close";
    btn = btn || "amg-outdate__btn-thx";
    capWrapper = capWrapper || "amg-outdate-wrapper";

    var modalCross = document.getElementById(cross),
        modalBtn = document.getElementById(btn),
        modalWrapper = document.getElementById(capWrapper);

    modalCross.onclick = function() {
        modalWrapper.style.display = "none";
    };

    modalBtn.onclick = function() {
        modalWrapper.style.display = "none";
    };

}

closeAMGOutdateBrowserModal();
