/// <reference path="../typings/jquery/jquery.d.ts" />
 
/**
 * Module for displaying "Waiting for..." dialog using Bootstrap
 *
 * @author Eugene Maslovich <ehpc@em42.ru>
 */


class waitingDialog {

    "use strict"

    private $dialog:any = $(
    '<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
    '<div class="modal-dialog modal-m">' +
    '<div class="modal-content">' +
    '<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
    '<div class="modal-body">' +
    '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
    '</div>' +
    '</div></div></div>');
    
    show(message:string, options:any) {
        // Assigning defaults
        if (typeof options === 'undefined') {
            options = {};
        }
        if (typeof message === 'undefined') {
            message = 'Loading';
        }
        var settings = $.extend({
            dialogSize: 'm',
            progressType: '',
            onHide: null // This callback runs after the dialog was hidden
        }, options);

        // Configuring dialog
        this.$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
        this.$dialog.find('.progress-bar').attr('class', 'progress-bar');
        if (settings.progressType) {
            this.$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
        }
        this.$dialog.find('h3').text(message);
        // Adding callbacks
        if (typeof settings.onHide === 'function') {
            this.$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                settings.onHide.call(this.$dialog);
            });
        }
        // Opening dialog
        this.$dialog.modal();
    }

    hide = function () {
        this.$dialog.modal('hide');
    }
}
