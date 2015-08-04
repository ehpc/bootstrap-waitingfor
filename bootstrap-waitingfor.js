/**
 * Module for displaying "Waiting for..." dialog using Bootstrap
 *
 * @author Eugene Maslovich <ehpc@em42.ru>
 */

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
            '<div class="modal-dialog modal-m">' +
                '<div class="modal-content">' +
                    '<div class="modal-header"></div>' +
                    '<div class="modal-body">' +
                        '<div class="progress progress-striped active" style="margin-bottom:0;">' +
                            '<div class="progress-bar" style="width: 100%"></div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>');

    return {
        /**
         * Opens our dialog
         * @param message Custom message
         * @param options Custom options:
         * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
         * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
         */
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Loading';
            }
            var settings = $.extend({
                headerText: '',
                headerSize: 3,
                headerClass: '',
                dialogSize: 'm',
                progressType: '',
                contentElement: 'p',
                contentClass: 'content',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }

            // generate header tag
            var headerTag = $('<h' + settings.headerSize + '></h' + settings.headerSize + '>');
                headerTag.css({ 'margin-bottom': 0 });
            if (settings.headerClass.length > 0) {
                headerTag.addClass(settings.headerClass);
            }

            // generate content tag
            var contentTag = $('<' + settings.contentElement + '></' + settings.contentElement + '>');
            if (settings.contentClass.length > 0) {
                contentTag.addClass(settings.contentClass);
            }

            $dialog.find('.modal-header').hide();

            if (settings.headerText === false) {
                contentTag.html(message);
                $dialog.find('.modal-body').prepend(contentTag);
            }
            else if (settings.headerText.length > 0) {
                headerTag.html(settings.headerText);
                $dialog.find('.modal-header').show().append(headerTag);

                contentTag.html(message);
                $dialog.find('.modal-body').prepend(contentTag);
            }
            else {
                headerTag.html(message);
                $dialog.find('.modal-header').show().append(headerTag);
            }

            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }
            // Opening dialog
            $dialog.modal();
        },
        /**
         * Closes dialog
         */
        hide: function () {
            $dialog.modal('hide');
        }
    };

})(jQuery);
