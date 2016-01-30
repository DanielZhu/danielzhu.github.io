$(document).ready(function () {
    var tagsWindowClicked = false;
    var offsets = {};

    $('.tags-selection-header')
        .mouseover(function () {
            $('.tags-selection').animate(
                {
                    height: '300',
                    width: '400'
                },
                200,
                function () {
                    $('#tags-selection-panel').show();
                }
            );
        })
        .mousedown(function (el) {
            tagsWindowClicked = true;

            $('.tags-selection').css('opacity', 0.4);
            offsets.top = el.clientY - $('.tags-selection').offset().top;
            offsets.left = el.clientX - $('.tags-selection').offset().left;
        })
        .mouseup(function (el) {
            tagsWindowClicked = false;
            $('.tags-selection').css('opacity', 1);
        })
        .mouseleave(function (el) {
            tagsWindowClicked = false;
            $('.tags-selection').css('opacity', 1);
        });

    $('.tags-selection').mouseleave(function () {
        $('.tags-selection').animate(
            {
                height: $('.tags-selection-header').height(),
                width: '80'
            }, 200,
            function () {
                $('#tags-selection-panel').hide();
            }
        );
    })
    .mousemove(function (el) {
        if (tagsWindowClicked) {
            // el.stopPropagation();
            $('.tags-selection').css('left', el.clientX - offsets.left);
            $('.tags-selection').css('top', el.clientY - offsets.top);
        }
    });

    $('.tags-selection-nav').hover(
        function (el) {
            var navId = $(this).attr('navid');
            $('.tags-selection-nav').removeClass('active');
            $(this).addClass('active');
            $('.tags-selection-content-part').hide();
            $('#tags-selection-content-' + navId).show();
        },
        function (argument) {
          // body...
        }
    );
});
