previewApp.service('imagesService', function () {
    this.setActiveImage = function (data, index) {
        for (var ii = 0; ii < data.Images.length; ii++) {
            data.Images[ii] = {
                Url: data.Images[ii]
                , Active: ii == index
            }
        }
    }

    this.getActiveImage = function (images) {

        // not work
        //var actives = images.filter(function (s) { return s.Active; });
        //if (typeof (actives) !== 'undefined' && actives.length > 0)
        //    return actives[0].Url;

        // bad hack
        var active = $('.itemCarousel.active');
        if (active.length > 0)
            return active.attr('url')

        return "";
    }
});
