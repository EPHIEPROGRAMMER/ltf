(function($) {
    'use strict';

    $(function () {
        var loading = false;
        $(document).on('click', '.user-site-like', function () {
            if (!loading) {
                var id = $(this).data('like-id');
                loading = true;
                console.log(urlAjax);
                var parentEl = $(this).parent()

                var rl = parentEl.find('.user-site-like');
                var bc = parentEl.find('.user-site-useful');

                $.ajax({
                    type: 'POST',
                    url: urlLike + '?like_id=' + id,
                    dataType: 'json',
                    success: function (data) {
                        if (data.response && data.response == 'success' && data.value) {
                            rl.html(data.value);

                            if (data.title) {
                                var span = $('<span />').html(data.title);
                                bc.html(span);
                            }
                        } else if (data.response && data.response == 'error' && data.message && bc) {
                            var span = $('<span />').html(data.message);
                            bc.html(span);
                        }

                        loading = false;
                    },
                    error: function () {
                        console.log('internal server error');
                        loading = false;
                    }
                });
            }
        });
    });
})(window.jQuery);