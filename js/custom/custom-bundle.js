window.onload = function(){

    /**
     * Init Images lazy loading
     * https://github.com/verlok/lazyload
     * DO NOT set src attribute to img tag.
     * SET data-original="path_to_img"
     * SET CSS class .lazyload to all img tags
     * Example: <img class="lazyload" data-original="img/img.png" alt="alt text" title="title text">
     *
     *  TODO: незабыть в мануал написать про использование
     */
    var AMGLazyLoad = new LazyLoad({
        elements_selector: ".lazyload", // img
        data_srcset: "original" // original-set
    });

    /**
     * Set function and constructor to top toggler for cityes dropdown list
     */
    function topDropdown(){
        var dropDownToggler = document.querySelector('.js-cities__dropdown');
        var dropDownList = document.querySelector('.js-cities__dropdown-list');
        var escapeBtn = 27;

        /**
         * Toggle CSS class to show/hide dropdown list on btn click event
         * @param e
         */
        dropDownToggler.onclick = function(e){
            e.preventDefault();
            dropDownList.classList.toggle('cities__dropdown-list--open');
        };

        /**
         * Toggle CSS class to show/hide dropdown list on "Escape" keyboard btn press event
         * @param e
         */
        document.onkeydown = function(e){
            e = e || window.event;
            if (e.keyCode == escapeBtn) {
                if (dropDownList.classList.contains('cities__dropdown-list--open')) {
                    dropDownList.classList.remove('cities__dropdown-list--open');
                }
            }
        };

        /**
         * Toggle CSS class to show/hide dropdown list on not by btn click event
         * @param e
         */
        document.body.onclick = function(e) {
            e = e || window.event;
            target = e.target || e.srcElement;
            if (e.target.classList != dropDownToggler.classList)  {
                dropDownList.classList.remove('cities__dropdown-list--open');
            }
        };
    }

    topDropdown.prototype = {
        setToggler: function() {
            return this.topDropdown;
        }
    };

    var toggle = new topDropdown();
    toggle.setToggler();

    $(".js-banners").slick({
        arrows: false,
        dots: true
    });

};

